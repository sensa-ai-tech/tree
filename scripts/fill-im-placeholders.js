/**
 * Fill IM L5 placeholder tables with real content.
 */
const fs = require('fs');
const path = require('path');

const fp = path.join(__dirname, '..', 'src', 'data', 'seed', 'im', 'contents.ts');
let content = fs.readFileSync(fp, 'utf-8');

// Build node_id map
const nodeIdRegex = /node_id:\s*'([^']+)'/g;
const entries = [];
let nm;
while ((nm = nodeIdRegex.exec(content)) !== null) {
  entries.push({ nodeId: nm[1], pos: nm.index });
}

// IM L5 translational data
const IM_TRANS = {
  'IM-L5-001': [ // 慢性腎病管理
    '| SGLT2 抑制劑 (Dapagliflozin) | 貓 CKD 腎保護——EMPA-KIDNEY 人醫延伸 | 2023 年貓 CKD 臨床試驗啟動，初步結果待發表 |',
    '| Atrasentan（內皮素受體拮抗劑） | 蛋白尿性腎病新靶點治療 | 人醫 SONAR trial 陽性，獸醫尚無數據 |',
    '| 腎臟替代療法（CRRT） | 犬貓 AKI/急性加重期血液透析 | 獸醫轉介中心逐漸引入 |',
    '| Finerenone（非類固醇 MRA） | 腎臟纖維化延緩 | 人醫 FIDELIO/FIGARO 陽性，獸醫探索中 |',
  ],
  'IM-L5-002': [ // 內分泌疾病藥物治療
    '| GLP-1 受體促效劑 (Semaglutide) | 犬糖尿病/肥胖管理新途徑 | 人醫重磅藥物，獸醫初步研究中 |',
    '| 連續血糖監測（CGM）如 FreeStyle Libre | 犬貓糖尿病居家血糖曲線 | 獸醫已廣泛使用，準確度驗證完善 |',
    '| Imepitoioin（PLP 拮抗劑） | 犬 Cushing 新替代用藥 | 歐洲已核准，美國/亞洲評估中 |',
    '| 甲狀腺分子靶向治療 | 貓甲亢術前穩定新方案 | 人醫使用成熟，獸醫探索替代方案 |',
  ],
  'IM-L5-003': [ // 免疫抑制治療
    '| JAK 抑制劑（Tofacitinib/Oclacitinib） | 犬自體免疫疾病新標靶免疫調節 | Oclacitinib 已廣泛用於皮膚科，內科應用研究中 |',
    '| 抗 CD20 單株抗體（Rituximab） | 犬 IMHA/ITP 難治性病例 B 細胞清除 | 人醫成熟，犬抗 CD20 抗體開發中 |',
    '| Mycophenolate mofetil (MMF) | 犬 IMHA/IBD 類固醇節約療法 | 獸醫使用經驗快速累積，PK 數據完善中 |',
    '| 糞菌移植（FMT） | 犬 IBD/免疫失調的腸道微生態重建 | 獸醫初步臨床應用，標準化不足 |',
  ],
  'IM-L5-004': [ // 消化系統治療
    '| 糞菌移植（FMT） | 犬急慢性腸炎/難治型 IBD 腸道微生態重建 | 獸醫多中心回顧性研究陽性，前瞻性試驗進行中 |',
    '| 生物製劑（抗 TNF-α/抗 IL-12/23） | 犬 IBD 難治病例精準免疫治療 | 人醫 IBD 標準治療，犬專用生物製劑開發中 |',
    '| 新型止吐劑 Maropitant 延伸適應症 | 犬貓嘔吐以外的腸道發炎抗效果 | 抗炎機轉已確認，臨床應用擴展中 |',
    '| 低 FODMAP 飲食治療 | 犬 IBD 飲食管理精緻化 | 人醫 IBS 標準治療，獸醫營養學探索中 |',
  ],
};

// IM L5 controversy data
const IM_CONTROV = {
  'IM-L5-001': [ // 慢性腎病管理
    '| CKD 貓何時啟動降磷治療 | IRIS 建議 Stage 2 高磷即介入，但起始時機仍有爭議 | Level III |',
    '| 皮下輸液頻率與量 | 日常 vs 隔日 vs 視脫水程度——缺乏 RCT | Level IV |',
    '| ACEi/ARB 在 CKD 貓的腎保護角色 | Telmisartan 已有正面 RCT，Benazepril 證據較弱 | Level II |',
    '| 低蛋白飲食啟動時機 | IRIS Stage 2 vs Stage 3——過早限蛋白可能惡化肌肉流失 | Level III |',
  ],
  'IM-L5-002': [ // 內分泌疾病藥物治療
    '| 犬糖尿病最佳胰島素選擇 | Vetsulin(Lente) vs Glargine vs PZI——缺乏頭對頭 RCT | Level III |',
    '| 貓甲亢治療首選 | Methimazole vs I-131 vs 手術 vs 限碘飲食——需個體化 | Level II |',
    '| Trilostane 起始劑量與監測頻率 | 0.5-1 mg/kg BID vs SID，ACTH stim 最佳時機爭議 | Level III |',
    '| 犬甲低 Levothyroxine 監測目標值 | T4 trough vs peak 最佳監測時間點尚無共識 | Level IV |',
  ],
  'IM-L5-003': [ // 免疫抑制治療
    '| IMHA 第一線免疫抑制藥物選擇 | Prednisolone 單用 vs 合併 Azathioprine/MMF/Cyclosporine | Level III |',
    '| IMHA 抗凝血治療必要性 | 常規抗凝 vs 高風險才用——缺乏大型 RCT | Level IV |',
    '| IBD 類固醇治療 Budesonide vs Prednisolone | 局部 vs 全身副作用——犬貓數據有限 | Level III |',
    '| 免疫抑制劑減量速度 | 快速減量復發風險 vs 長期副作用——經驗法則為主 | Level IV |',
  ],
  'IM-L5-004': [ // 消化系統治療
    '| 犬 IBD 飲食試驗期長度 | 2 週 vs 4 週 vs 8 週——近期研究傾向更短試驗期 | Level III |',
    '| 犬急性胰臟炎禁食 vs 早期進食 | 傳統禁食 vs 人醫 evidence 支持早期腸道營養 | Level II |',
    '| PPI 長期使用安全性 | 犬貓長期 Omeprazole 的骨質/腸道微生態影響 | Level IV |',
    '| 抗生素在 IBD 治療中的角色 | Metronidazole/Tylosin 常規使用 vs 限抗生素策略 | Level III |',
  ],
};

const bodyRegex = /body: `([\s\S]*?)(?<!\\)`/g;
let match;
let count = 0;

while ((match = bodyRegex.exec(content)) !== null) {
  const body = match[1];
  if (!body.includes('\u5f85\u88dc\u5145')) continue;

  // Find node_id
  let nodeId = 'unknown';
  for (const e of entries) {
    if (e.pos < match.index) nodeId = e.nodeId;
    else break;
  }

  if (!IM_TRANS[nodeId] && !IM_CONTROV[nodeId]) continue;

  let newBody = body;

  // Replace translational placeholder
  if (IM_TRANS[nodeId]) {
    const transPlaceholder = '| \uff08\u5f85\u88dc\u5145\uff09 | \u2014 | \u2014 |';
    if (newBody.includes(transPlaceholder)) {
      // Check which table this placeholder is in by looking at the header row before it
      const parts = newBody.split(transPlaceholder);
      if (parts.length === 2) {
        // Only one placeholder - determine if trans or controv by checking header above
        const before = parts[0];
        const lastHeaderLine = before.split('\n').filter(l => l.includes('|')).pop() || '';

        if (lastHeaderLine.includes('\u4eba\u91ab') || lastHeaderLine.includes('\u7378\u91ab')) {
          newBody = parts[0] + IM_TRANS[nodeId].join('\n') + parts[1];
        } else if (lastHeaderLine.includes('\u722d\u8b70') || lastHeaderLine.includes('Evidence')) {
          newBody = parts[0] + (IM_CONTROV[nodeId] || [transPlaceholder]).join('\n') + parts[1];
        } else {
          // Default: use trans data
          newBody = parts[0] + IM_TRANS[nodeId].join('\n') + parts[1];
        }
      } else if (parts.length === 3) {
        // Two placeholders - first is trans, second is controv
        newBody = parts[0] + IM_TRANS[nodeId].join('\n') + parts[1] + (IM_CONTROV[nodeId] || []).join('\n') + parts[2];
      }
    }
  }

  // If still has placeholder and we have controversy data
  if (newBody.includes('\u5f85\u88dc\u5145') && IM_CONTROV[nodeId]) {
    const transPlaceholder = '| \uff08\u5f85\u88dc\u5145\uff09 | \u2014 | \u2014 |';
    newBody = newBody.replace(transPlaceholder, IM_CONTROV[nodeId].join('\n'));
  }

  if (newBody !== body) {
    content = content.substring(0, match.index) + `body: \`${newBody}\`` + content.substring(match.index + match[0].length);
    console.log(`[FILL] ${nodeId}`);
    count++;
  }
}

fs.writeFileSync(fp, content, 'utf-8');
console.log(`\nDone: ${count} IM bodies updated`);
