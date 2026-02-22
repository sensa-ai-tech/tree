import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '隱私權政策',
  description: 'VetKnowledgeTree 獸醫專科知識樹隱私權政策',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          返回首頁
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-gray-900">隱私權政策</h1>
        <p className="mb-6 text-sm text-gray-500">最後更新日期：2026 年 2 月 22 日</p>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">一、前言</h2>
            <p className="text-gray-700 leading-relaxed">
              VetKnowledgeTree（以下簡稱「本平台」）尊重並保護所有使用者的個人隱私權。
              本隱私權政策說明我們如何收集、使用、儲存及保護您的個人資訊。
              使用本平台即表示您同意本政策的條款。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">二、資料收集範圍</h2>
            <p className="text-gray-700 leading-relaxed">我們可能收集以下類型的資料：</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>帳號資訊</strong>：電子郵件地址、顯示名稱</li>
              <li><strong>學習紀錄</strong>：課程進度、複習歷史、測驗結果、成就紀錄</li>
              <li><strong>使用行為</strong>：頁面瀏覽、功能使用頻率（匿名化處理）</li>
              <li><strong>裝置資訊</strong>：瀏覽器類型、作業系統（僅用於優化體驗）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">三、資料使用目的</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>提供個人化的學習體驗與間隔重複複習排程</li>
              <li>記錄學習進度與成就系統</li>
              <li>改善平台功能與使用者體驗</li>
              <li>匿名化統計分析以提升教學品質</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">四、資料保護措施</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>所有資料傳輸採用 HTTPS 加密</li>
              <li>密碼以加密方式儲存，不會以明文保存</li>
              <li>資料庫採用行級安全策略（Row Level Security）</li>
              <li>定期進行安全稽核與漏洞掃描</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">五、第三方服務</h2>
            <p className="text-gray-700 leading-relaxed">
              本平台使用以下第三方服務，各有其獨立的隱私權政策：
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>Supabase</strong>：身份驗證與資料儲存</li>
              <li><strong>Vercel</strong>：網站託管與部署</li>
              <li><strong>Cloudinary</strong>：圖片儲存與管理</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">六、使用者權利</h2>
            <p className="text-gray-700 leading-relaxed">依據台灣個人資料保護法，您享有以下權利：</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>查詢或請求閱覽您的個人資料</li>
              <li>請求製給複製本</li>
              <li>請求補充或更正</li>
              <li>請求停止蒐集、處理或利用</li>
              <li>請求刪除您的帳號及相關資料</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">七、Cookie 政策</h2>
            <p className="text-gray-700 leading-relaxed">
              本平台使用必要的 Cookie 來維持登入狀態與使用者偏好設定。
              我們不使用第三方追蹤 Cookie 進行廣告投放。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">八、政策變更</h2>
            <p className="text-gray-700 leading-relaxed">
              我們保留隨時修改本政策的權利。重大變更將透過平台通知告知使用者。
              建議您定期查閱本頁面以了解最新的隱私權實務。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">九、聯絡方式</h2>
            <p className="text-gray-700 leading-relaxed">
              如有任何關於隱私權的問題或請求，請聯絡我們：
            </p>
            <p className="text-gray-700">
              電子郵件：<a href="mailto:privacy@vetclinic.tw" className="text-indigo-600 hover:text-indigo-800">privacy@vetclinic.tw</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
