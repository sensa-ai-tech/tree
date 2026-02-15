'use client';

import { useState } from 'react';
import { ClipboardCheck, Check, X, Eye } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { showToast } from '@/components/ui/Toast';

interface ReviewItem {
  id: string;
  nodeId: string;
  title: string;
  specialty: string;
  nodeType: string;
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

// Mock review items
const MOCK_ITEMS: ReviewItem[] = [];

export default function AdminReviewPage() {
  const [items, setItems] = useState<ReviewItem[]>(MOCK_ITEMS);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');

  const filteredItems = items.filter((item) => {
    if (filter === 'all') return true;
    return item.status === filter;
  });

  function handleApprove(itemId: string): void {
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, status: 'approved' as const } : item
      )
    );
    showToast.success('已核准');
  }

  function handleReject(itemId: string): void {
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, status: 'rejected' as const } : item
      )
    );
    showToast.info('已退回');
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <ClipboardCheck className="h-6 w-6 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-900">內容審核</h1>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {(['pending', 'approved', 'rejected', 'all'] as const).map((f) => (
          <Button
            key={f}
            variant={filter === f ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setFilter(f)}
          >
            {{ pending: '待審核', approved: '已核准', rejected: '已退回', all: '全部' }[f]}
          </Button>
        ))}
      </div>

      {/* Review List */}
      {filteredItems.length === 0 ? (
        <Card>
          <CardBody className="flex flex-col items-center gap-3 py-12">
            <ClipboardCheck className="h-10 w-10 text-gray-300" />
            <p className="text-gray-500">
              {filter === 'pending' ? '目前沒有待審核的內容' : '沒有符合條件的項目'}
            </p>
          </CardBody>
        </Card>
      ) : (
        <div className="space-y-3">
          {filteredItems.map((item) => (
            <Card key={item.id}>
              <CardBody className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <Badge variant="outline">{item.specialty}</Badge>
                    <Badge variant="outline">{item.nodeType}</Badge>
                  </div>
                  <p className="text-xs text-gray-400">
                    節點 ID: {item.nodeId} | 提交時間: {item.submittedAt}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {item.status === 'pending' ? (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={<Eye className="h-4 w-4" />}
                        onClick={() => showToast.info('預覽功能開發中')}
                      >
                        預覽
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        icon={<Check className="h-4 w-4" />}
                        onClick={() => handleApprove(item.id)}
                      >
                        核准
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        icon={<X className="h-4 w-4" />}
                        onClick={() => handleReject(item.id)}
                      >
                        退回
                      </Button>
                    </>
                  ) : (
                    <Badge
                      className={
                        item.status === 'approved'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-red-100 text-red-700'
                      }
                    >
                      {item.status === 'approved' ? '已核准' : '已退回'}
                    </Badge>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
