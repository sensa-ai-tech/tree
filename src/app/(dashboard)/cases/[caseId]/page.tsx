'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';

interface CaseDetailPageProps {
  params: Promise<{ caseId: string }>;
}

export default function CaseDetailPage({ params }: CaseDetailPageProps) {
  const { caseId } = use(params);
  const router = useRouter();

  // TODO: fetch case data from store or API
  // For now, show placeholder
  const caseData = null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/cases">
          <Button variant="ghost" size="sm" icon={<ArrowLeft className="h-4 w-4" />}>
            返回病例列表
          </Button>
        </Link>
      </div>

      {caseData ? (
        <div>
          {/* CaseChallenge component will render here */}
          <p>CaseChallenge 元件載入中...</p>
        </div>
      ) : (
        <Card>
          <CardBody className="flex flex-col items-center gap-4 py-12">
            <Briefcase className="h-12 w-12 text-gray-300" />
            <p className="text-gray-500">找不到病例 ID: {caseId}</p>
            <p className="text-sm text-gray-400">此病例可能尚未建立或已被移除</p>
            <Button variant="secondary" onClick={() => router.push('/cases')}>
              返回病例列表
            </Button>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
