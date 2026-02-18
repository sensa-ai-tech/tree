'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Briefcase, Filter } from 'lucide-react';
import { Card, CardBody, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CardSkeleton } from '@/components/ui/Skeleton';
import type { CaseChallenge } from '@/types/case';
import { ALL_CASES } from '@/data/seed/case-lookup';

// Seed cases for demonstration (all specialties)
const MOCK_CASES: CaseChallenge[] = ALL_CASES;

const DIFFICULTY_LABELS: Record<number, string> = {
  1: '入門',
  2: '基礎',
  3: '中等',
  4: '進階',
  5: '專家',
};

export default function CasesPage() {
  const [cases] = useState<CaseChallenge[]>(MOCK_CASES);
  const [isLoading] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | null>(null);

  const filteredCases = cases.filter((c) => {
    if (selectedSpecialty && c.specialty !== selectedSpecialty) return false;
    if (selectedDifficulty !== null && c.difficulty !== selectedDifficulty) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Briefcase className="h-6 w-6 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-900">病例挑戰</h1>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <Filter className="h-4 w-4 text-gray-500" />
        <select
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option value="">全部專科</option>
          <option value="CARDIO">心臟科</option>
          <option value="IM">內科</option>
          <option value="DERM">皮膚科</option>
          <option value="SURG">外科</option>
          <option value="NEURO">神經科</option>
          <option value="ONCO">腫瘤科</option>
          <option value="ECC">急診加護</option>
        </select>
        <select
          value={selectedDifficulty ?? ''}
          onChange={(e) => setSelectedDifficulty(e.target.value ? Number(e.target.value) : null)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option value="">全部難度</option>
          {[1, 2, 3, 4, 5].map((d) => (
            <option key={d} value={d}>{DIFFICULTY_LABELS[d]}</option>
          ))}
        </select>
      </div>

      {/* Case Grid */}
      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      ) : filteredCases.length === 0 ? (
        <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white">
          <div className="text-center">
            <Briefcase className="mx-auto h-10 w-10 text-gray-300" />
            <p className="mt-2 text-gray-500">尚無病例挑戰</p>
            <p className="text-sm text-gray-400">病例將在管理員建立後顯示</p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCases.map((caseItem) => (
            <Link key={caseItem.id} href={`/cases/${caseItem.id}`}>
              <Card hoverable className="h-full">
                <CardBody className="space-y-2">
                  <h3 className="font-semibold text-gray-900">{caseItem.title}</h3>
                  <p className="line-clamp-2 text-sm text-gray-600">
                    {caseItem.scenario.chief_complaint}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{caseItem.species}</span>
                    <span>&middot;</span>
                    <span>{caseItem.steps.length} 個步驟</span>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{caseItem.specialty}</Badge>
                    <Badge variant="difficulty" difficulty={caseItem.difficulty}>
                      {DIFFICULTY_LABELS[caseItem.difficulty]}
                    </Badge>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
