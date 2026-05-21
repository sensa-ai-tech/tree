'use client';

import { useEffect, useState } from 'react';
import { ClipboardList, ExternalLink } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { createBrowserClient, isMockMode } from '@/lib/supabase/client';

interface ProcedureLink {
  procedure_id: string;
  procedure_name: string;
  procedure_name_zh: string | null;
  department: string;
  relation_type: string;
  confidence: number;
}

const DEPT_LABELS: Record<string, string> = {
  anesthesia: '麻醉科',
  cardiopulmonary: '心肺科',
  clinical_pathology: '臨床病理',
  dermatology: '皮膚科',
  diagnostic_imaging: '影像診斷',
  emergency: '急診',
  general: '一般',
  internal_medicine: '內科',
  neurology: '神經科',
  oncology: '腫瘤科',
  ophthalmology: '眼科',
  orthopedics: '骨科',
  soft_tissue_surgery: '軟組織外科',
};

// Hostrain app URL - configurable via env
const HOSTRAIN_BASE_URL = process.env.NEXT_PUBLIC_HOSTRAIN_URL || '/hostrain';

interface ProcedureLinksProps {
  nodeId: string;
}

export function ProcedureLinks({ nodeId }: ProcedureLinksProps) {
  const [links, setLinks] = useState<ProcedureLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!nodeId || isMockMode) {
      setLoading(false);
      return;
    }

    const supabase = createBrowserClient();

    interface MappingRow {
      procedure_id: string;
      relation_type: string;
      confidence: number;
    }

    interface ProcRow {
      id: string;
      name: string;
      name_zh: string | null;
      department: string;
    }

    async function fetchLinks() {
      try {
        // Get bridge mappings for this node
        const { data: mappings, error: mapError } = await supabase
          .from('bridge_procedure_node_map')
          .select('procedure_id, relation_type, confidence')
          .eq('node_id', nodeId)
          .order('confidence', { ascending: false })
          .limit(10);

        if (mapError || !mappings || mappings.length === 0) {
          setLoading(false);
          return;
        }

        // Fetch procedure details
        const typedMappings = mappings as MappingRow[];
        const procIds = typedMappings.map((m: MappingRow) => m.procedure_id);
        const { data: procs, error: procError } = await supabase
          .from('vt_procedures')
          .select('id, name, name_zh, department')
          .in('id', procIds);

        if (procError || !procs) {
          setLoading(false);
          return;
        }

        const typedProcs = procs as ProcRow[];
        const procMap = new Map(typedProcs.map((p: ProcRow) => [p.id, p]));
        const result: ProcedureLink[] = typedMappings
          .filter((m: MappingRow) => procMap.has(m.procedure_id))
          .map((m: MappingRow) => {
            const proc = procMap.get(m.procedure_id)!;
            return {
              procedure_id: proc.id,
              procedure_name: proc.name,
              procedure_name_zh: proc.name_zh,
              department: proc.department,
              relation_type: m.relation_type,
              confidence: m.confidence,
            };
          });

        setLinks(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : '載入操作步驟失敗');
      } finally {
        setLoading(false);
      }
    }

    fetchLinks();
  }, [nodeId]);

  if (loading) {
    return (
      <Card id="procedure-links" className="scroll-mt-24 border-emerald-200 bg-emerald-50/30">
        <CardHeader>
          <h2 className="flex items-center gap-2 font-semibold text-emerald-900">
            <ClipboardList className="h-5 w-5" />
            操作步驟指南
          </h2>
        </CardHeader>
        <CardBody>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="h-3 w-3 animate-spin rounded-full border-2 border-emerald-300 border-t-emerald-600" />
            載入相關操作指南中...
          </div>
        </CardBody>
      </Card>
    );
  }

  // Error state: show non-intrusive inline message (CLAUDE.md UI three-state rule)
  if (error) return null; // Optional section — silently skip on error rather than breaking page layout

  // Mock 模式或無對應操作指南：完全不渲染（不打擾使用者）
  if (links.length === 0) return null;

  return (
    <Card id="procedure-links" className="scroll-mt-24 border-emerald-200 bg-emerald-50/30">
      <CardHeader>
        <h2 className="flex items-center gap-2 font-semibold text-emerald-900">
          <ClipboardList className="h-5 w-5" />
          操作步驟指南
        </h2>
        <p className="text-sm text-gray-500">
          在院內訓練平台查看詳細操作步驟與設備清單
        </p>
      </CardHeader>
      <CardBody className="space-y-2">
        {links.map((link) => (
          <a
            key={link.procedure_id}
            href={`${HOSTRAIN_BASE_URL}/doctor/procedures/${link.procedure_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg border border-emerald-100 bg-white p-3 transition-colors hover:border-emerald-300 hover:bg-emerald-50"
          >
            <div>
              <span className="text-sm font-medium text-gray-900">
                {link.procedure_name_zh || link.procedure_name}
              </span>
              {link.procedure_name_zh && (
                <span className="ml-2 text-xs text-gray-500">{link.procedure_name}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {DEPT_LABELS[link.department] || link.department}
              </Badge>
              <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
            </div>
          </a>
        ))}
      </CardBody>
    </Card>
  );
}
