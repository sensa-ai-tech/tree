import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '服務條款',
  description: 'VetKnowledgeTree 獸醫專科知識樹服務條款',
};

export default function TermsPage() {
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

        <h1 className="mb-8 text-3xl font-bold text-gray-900">服務條款</h1>
        <p className="mb-6 text-sm text-gray-500">最後更新日期：2026 年 2 月 22 日</p>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">一、服務描述</h2>
            <p className="text-gray-700 leading-relaxed">
              VetKnowledgeTree（以下簡稱「本平台」）是一個獸醫專科知識互動學習平台，
              提供結構化的知識圖譜、間隔重複複習、病例挑戰與遊戲化學習體驗。
              本平台面向獸醫系學生及臨床獸醫師的繼續教育需求。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">二、使用規範</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>使用者須年滿 18 歲或為獸醫相關系所學生</li>
              <li>帳號為個人使用，不得轉借或共享</li>
              <li>不得以自動化工具大量擷取平台內容</li>
              <li>不得對平台進行惡意攻擊或滲透測試</li>
              <li>不得散佈透過本平台取得的內容供商業用途</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">三、醫療免責聲明</h2>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="font-medium text-amber-800">⚠️ 重要聲明</p>
              <p className="mt-2 text-amber-700 leading-relaxed">
                本平台提供的所有內容僅供<strong>教育學習目的</strong>。任何疾病資訊、治療方案、
                藥物劑量等內容<strong>不構成臨床診斷或治療建議</strong>。
                實際臨床決策應基於完整的病史、理學檢查及實驗室結果，
                並由合格的執業獸醫師依據專業判斷作出。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">四、智慧財產權</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>平台上的教學內容、圖表、病例均受著作權保護</li>
              <li>部分內容使用 AI 輔助生成，並經專家審閱校正</li>
              <li>引用的學術文獻與教科書內容僅供教育用途之合理使用</li>
              <li>使用者不得未經授權重製、散佈或商業利用平台內容</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">五、帳號管理</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>使用者對其帳號活動負完全責任</li>
              <li>如發現帳號遭未授權使用，應立即通知我們</li>
              <li>我們保留因違反服務條款而暫停或終止帳號的權利</li>
              <li>使用者可隨時刪除帳號，相關學習資料將一併移除</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">六、免責條款</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>本平台不保證服務不會中斷或完全無錯誤</li>
              <li>對於因使用本平台內容而導致的任何損失，我們不承擔責任</li>
              <li>學習進度與成就紀錄可能因系統維護而暫時無法存取</li>
              <li>第三方連結的內容不在我們的控制範圍內</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">七、條款變更</h2>
            <p className="text-gray-700 leading-relaxed">
              我們保留隨時修改服務條款的權利。重大變更將提前 14 天透過平台通知或電子郵件告知。
              繼續使用本平台即表示您接受更新後的條款。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">八、準據法</h2>
            <p className="text-gray-700 leading-relaxed">
              本服務條款受中華民國法律管轄。
              因本條款所生之爭議，雙方同意以臺灣臺北地方法院為第一審管轄法院。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">九、聯絡方式</h2>
            <p className="text-gray-700 leading-relaxed">
              如有任何關於服務條款的問題，請聯絡我們：
            </p>
            <p className="text-gray-700">
              電子郵件：<a href="mailto:support@vetclinic.tw" className="text-indigo-600 hover:text-indigo-800">support@vetclinic.tw</a>
            </p>
          </section>
        </div>

        <div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
          <Link href="/privacy" className="hover:text-indigo-600 transition-colors">隱私權政策</Link>
          <span>·</span>
          <Link href="/" className="hover:text-indigo-600 transition-colors">返回首頁</Link>
        </div>
      </div>
    </div>
  );
}
