import type { KnowledgeEdge } from '@/types/knowledge';

export const DERM_EDGES: KnowledgeEdge[] = [
  // L0 → L1: prerequisite
  { id: 'DERM-E-001', source_node_id: 'DERM-L0-001', target_node_id: 'DERM-L1-001', relation_type: 'prerequisite', weight: 1.0, description: '學科總覽為皮膚解剖的前置', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-002', source_node_id: 'DERM-L0-001', target_node_id: 'DERM-L1-002', relation_type: 'prerequisite', weight: 1.0, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-003', source_node_id: 'DERM-L0-001', target_node_id: 'DERM-L1-003', relation_type: 'prerequisite', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },

  // L1 → L2: builds_on
  { id: 'DERM-E-004', source_node_id: 'DERM-L1-002', target_node_id: 'DERM-L2-001', relation_type: 'builds_on', weight: 0.9, description: '皮膚免疫學是過敏機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-005', source_node_id: 'DERM-L1-001', target_node_id: 'DERM-L2-002', relation_type: 'builds_on', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-006', source_node_id: 'DERM-L1-002', target_node_id: 'DERM-L2-003', relation_type: 'builds_on', weight: 0.9, description: '免疫學是自體免疫的基礎', bidirectional: false, unlock_condition: null },

  // L2 → L3: clinical_apply
  { id: 'DERM-E-007', source_node_id: 'DERM-L2-001', target_node_id: 'DERM-L3-001', relation_type: 'clinical_apply', weight: 1.0, description: '過敏機轉導致 CAD', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-008', source_node_id: 'DERM-L2-001', target_node_id: 'DERM-L3-002', relation_type: 'clinical_apply', weight: 0.9, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-009', source_node_id: 'DERM-L2-001', target_node_id: 'DERM-L3-003', relation_type: 'clinical_apply', weight: 0.9, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-010', source_node_id: 'DERM-L2-002', target_node_id: 'DERM-L3-006', relation_type: 'clinical_apply', weight: 0.7, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-011', source_node_id: 'DERM-L2-003', target_node_id: 'DERM-L3-010', relation_type: 'clinical_apply', weight: 1.0, description: '自體免疫導致天疱瘡', bidirectional: false, unlock_condition: null },

  // L3 → L4: clinical_apply
  { id: 'DERM-E-012', source_node_id: 'DERM-L3-004', target_node_id: 'DERM-L4-002', relation_type: 'clinical_apply', weight: 1.0, description: '蠕形蟎需皮膚刮搔確診', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-013', source_node_id: 'DERM-L3-005', target_node_id: 'DERM-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: '膿皮症需皮膚細胞學', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-014', source_node_id: 'DERM-L3-007', target_node_id: 'DERM-L4-004', relation_type: 'clinical_apply', weight: 1.0, description: '外耳炎需耳鏡檢查', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-015', source_node_id: 'DERM-L3-001', target_node_id: 'DERM-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: null, bidirectional: false, unlock_condition: null },

  // L3 → L5: clinical_apply
  { id: 'DERM-E-016', source_node_id: 'DERM-L3-001', target_node_id: 'DERM-L5-001', relation_type: 'clinical_apply', weight: 1.0, description: 'CAD 需過敏管理', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-017', source_node_id: 'DERM-L3-004', target_node_id: 'DERM-L5-002', relation_type: 'clinical_apply', weight: 1.0, description: '蠕形蟎需抗寄生蟲治療', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-018', source_node_id: 'DERM-L3-010', target_node_id: 'DERM-L5-003', relation_type: 'clinical_apply', weight: 1.0, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-019', source_node_id: 'DERM-L3-007', target_node_id: 'DERM-L5-004', relation_type: 'clinical_apply', weight: 1.0, description: '外耳炎需耳科治療', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-020', source_node_id: 'DERM-L3-008', target_node_id: 'DERM-L5-005', relation_type: 'clinical_apply', weight: 1.0, description: '癬菌需抗黴菌治療', bidirectional: false, unlock_condition: null },

  // Differentials
  { id: 'DERM-E-021', source_node_id: 'DERM-L3-001', target_node_id: 'DERM-L3-002', relation_type: 'differential', weight: 0.9, description: 'CAD 與食物不良反應鑑別', bidirectional: true, unlock_condition: null },
  { id: 'DERM-E-022', source_node_id: 'DERM-L3-004', target_node_id: 'DERM-L3-009', relation_type: 'differential', weight: 0.8, description: '蠕形蟎與疥蟎鑑別', bidirectional: true, unlock_condition: null },

  // ─── 審計補齊：缺失的 L1/L2→L3 prerequisite 邊 ───

  // DERM-L3-004 (蠕形蟎) 缺少 L1/L2→L3
  { id: 'DERM-E-023', source_node_id: 'DERM-L1-001', target_node_id: 'DERM-L3-004', relation_type: 'prerequisite', weight: 0.8, description: '皮膚解剖是理解蠕形蟎寄生部位的基礎', bidirectional: false, unlock_condition: null },

  // DERM-L3-005 (膿皮症) 缺少 L1/L2→L3
  { id: 'DERM-E-024', source_node_id: 'DERM-L1-001', target_node_id: 'DERM-L3-005', relation_type: 'prerequisite', weight: 0.8, description: '皮膚解剖是理解膿皮症分層（表層/深層）的基礎', bidirectional: false, unlock_condition: null },

  // DERM-L3-007 (外耳炎) 缺少 L1/L2→L3
  { id: 'DERM-E-025', source_node_id: 'DERM-L1-001', target_node_id: 'DERM-L3-007', relation_type: 'prerequisite', weight: 0.8, description: '皮膚解剖（耳道上皮結構）是理解外耳炎的基礎', bidirectional: false, unlock_condition: null },

  // DERM-L3-008 (皮膚癬菌症) 缺少 L1/L2→L3
  { id: 'DERM-E-026', source_node_id: 'DERM-L1-003', target_node_id: 'DERM-L3-008', relation_type: 'prerequisite', weight: 0.8, description: '毛髮生長週期是理解癬菌侵犯毛幹的基礎', bidirectional: false, unlock_condition: null },

  // DERM-L3-009 (疥蟎) 缺少 L1/L2→L3
  { id: 'DERM-E-027', source_node_id: 'DERM-L1-001', target_node_id: 'DERM-L3-009', relation_type: 'prerequisite', weight: 0.8, description: '皮膚解剖是理解疥蟎穿掘隧道的基礎', bidirectional: false, unlock_condition: null },

  // ─── 審計補齊：缺失的 L3→L4 clinical_apply 邊 ───

  // DERM-L3-002 (食物不良反應) 缺少 L3→L4
  { id: 'DERM-E-028', source_node_id: 'DERM-L3-002', target_node_id: 'DERM-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '食物不良反應需詳細病史（排除飲食試驗）與皮膚檢查', bidirectional: false, unlock_condition: null },

  // DERM-L3-003 (FAD) 缺少 L3→L4
  { id: 'DERM-E-029', source_node_id: 'DERM-L3-003', target_node_id: 'DERM-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: 'FAD 需病史與典型皮膚分布檢查確診', bidirectional: false, unlock_condition: null },

  // DERM-L3-006 (馬拉色菌) 缺少 L3→L4
  { id: 'DERM-E-030', source_node_id: 'DERM-L3-006', target_node_id: 'DERM-L4-003', relation_type: 'clinical_apply', weight: 1.0, description: '馬拉色菌皮膚炎需皮膚細胞學（花生狀酵母菌）確診', bidirectional: false, unlock_condition: null },

  // DERM-L3-008 (癬菌症) 缺少 L3→L4
  { id: 'DERM-E-031', source_node_id: 'DERM-L3-008', target_node_id: 'DERM-L4-002', relation_type: 'clinical_apply', weight: 1.0, description: '癬菌症需毛髮檢查（Wood\'s lamp/DTM/PCR）確診', bidirectional: false, unlock_condition: null },

  // DERM-L3-009 (疥蟎) 缺少 L3→L4
  { id: 'DERM-E-032', source_node_id: 'DERM-L3-009', target_node_id: 'DERM-L4-002', relation_type: 'clinical_apply', weight: 1.0, description: '疥蟎需多處皮膚刮搔檢查', bidirectional: false, unlock_condition: null },

  // DERM-L3-010 (天疱瘡) 缺少 L3→L4
  { id: 'DERM-E-033', source_node_id: 'DERM-L3-010', target_node_id: 'DERM-L4-003', relation_type: 'clinical_apply', weight: 1.0, description: '天疱瘡需皮膚細胞學（棘層鬆解細胞）與組織病理確診', bidirectional: false, unlock_condition: null },

  // ─── Phase 2G 補強邊 ───
  // DERM-L3-011（藥物不良反應）
  { id: 'DERM-E-034', source_node_id: 'DERM-L1-002', target_node_id: 'DERM-L3-011', relation_type: 'prerequisite', weight: 0.8, description: '皮膚免疫學是藥物反應機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-035', source_node_id: 'DERM-L3-011', target_node_id: 'DERM-L4-003', relation_type: 'clinical_apply', weight: 0.8, description: '藥物反應需皮膚細胞學/組織病理輔助', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-036', source_node_id: 'DERM-L3-011', target_node_id: 'DERM-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '藥物反應需詳細用藥史', bidirectional: false, unlock_condition: null },

  // DERM-L3-012（脫毛症 X）
  { id: 'DERM-E-037', source_node_id: 'DERM-L1-003', target_node_id: 'DERM-L3-012', relation_type: 'prerequisite', weight: 0.9, description: '毛髮生長週期異常是脫毛症 X 的核心', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-038', source_node_id: 'DERM-L3-012', target_node_id: 'DERM-L4-002', relation_type: 'clinical_apply', weight: 0.8, description: '脫毛症 X 需毛髮檢查排除其他脫毛原因', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-039', source_node_id: 'DERM-L3-012', target_node_id: 'DERM-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '脫毛症 X 需排除內分泌疾病', bidirectional: false, unlock_condition: null },

  // DERM-L3-013（皮膚淋巴瘤）
  { id: 'DERM-E-040', source_node_id: 'DERM-L2-003', target_node_id: 'DERM-L3-013', relation_type: 'clinical_apply', weight: 0.7, description: '自體免疫機轉與 CTCL 免疫失調相關', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-041', source_node_id: 'DERM-L3-013', target_node_id: 'DERM-L4-003', relation_type: 'clinical_apply', weight: 1, description: 'CTCL 需皮膚細胞學/組織病理確診', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-042', source_node_id: 'DERM-L3-013', target_node_id: 'DERM-L5-003', relation_type: 'clinical_apply', weight: 0.8, description: 'CTCL 需免疫調節治療', bidirectional: false, unlock_condition: null },

  // ─── 審計補齊：缺失的 L3→L5 治療邊與 L3→L4 診斷邊 ───

  // DERM-L3-006 (馬拉色菌) 缺少 L3→L5 治療邊
  { id: 'DERM-E-043', source_node_id: 'DERM-L3-006', target_node_id: 'DERM-L5-005', relation_type: 'clinical_apply', weight: 1.0, description: '馬拉色菌皮膚炎需要抗黴菌治療（局部/全身 ketoconazole 或 itraconazole）', bidirectional: false, unlock_condition: null },

  // DERM-L3-009 (疥蟎) 缺少 L3→L5 治療邊
  { id: 'DERM-E-044', source_node_id: 'DERM-L3-009', target_node_id: 'DERM-L5-002', relation_type: 'clinical_apply', weight: 1.0, description: '疥蟎症需要抗寄生蟲治療（isoxazoline 類藥物為首選）', bidirectional: false, unlock_condition: null },

  // DERM-L3-003 (FAD) 缺少 L3→L5 治療邊
  { id: 'DERM-E-045', source_node_id: 'DERM-L3-003', target_node_id: 'DERM-L5-002', relation_type: 'clinical_apply', weight: 1.0, description: '跳蚤過敏性皮膚炎的根本治療是嚴格跳蚤預防', bidirectional: false, unlock_condition: null },

  // DERM-L3-002 (食物不良反應) 缺少 L3→L5 治療邊
  { id: 'DERM-E-046', source_node_id: 'DERM-L3-002', target_node_id: 'DERM-L5-001', relation_type: 'clinical_apply', weight: 0.9, description: '食物不良反應管理需要排除飲食試驗與長期飲食管理', bidirectional: false, unlock_condition: null },

  // DERM-L3-001 (CAD) 缺少繼發感染診斷邊
  { id: 'DERM-E-047', source_node_id: 'DERM-L3-001', target_node_id: 'DERM-L4-003', relation_type: 'clinical_apply', weight: 0.8, description: '犬異位性皮膚炎常繼發細菌/酵母菌感染，需細胞學確認', bidirectional: false, unlock_condition: null },

  // DERM-L3-012 (脫毛症 X) 缺少 L3→L5 治療邊
  { id: 'DERM-E-048', source_node_id: 'DERM-L3-012', target_node_id: 'DERM-L5-003', relation_type: 'clinical_apply', weight: 0.7, description: '脫毛症 X 治療包含褪黑激素、甲狀腺素補充或免疫調節', bidirectional: false, unlock_condition: null },

  // ─── 第二輪審計：藥理/影像/教育學視角補齊 ───

  // DERM-L3-011 (藥物不良反應) → 治療路徑：嚴重藥物反應需免疫調節治療（停藥 + 支持治療 + 免疫抑制）
  { id: 'DERM-E-049', source_node_id: 'DERM-L3-011', target_node_id: 'DERM-L5-003', relation_type: 'clinical_apply', weight: 0.8, description: '嚴重藥物反應（如 TEN/SJS）需停藥、支持療法與免疫調節治療', bidirectional: false, unlock_condition: null },

  // DERM-L3-001 (CAD) → 耳鏡檢查：50-80% CAD 犬合併外耳炎
  { id: 'DERM-E-050', source_node_id: 'DERM-L3-001', target_node_id: 'DERM-L4-004', relation_type: 'clinical_apply', weight: 0.8, description: '50-80% 犬異位性皮膚炎合併外耳炎，需常規耳鏡檢查評估', bidirectional: false, unlock_condition: null },

  // DERM-L5-001 (過敏管理) → L5-003 (免疫調節)：治療升階路徑
  { id: 'DERM-E-051', source_node_id: 'DERM-L5-001', target_node_id: 'DERM-L5-003', relation_type: 'builds_on', weight: 0.7, description: '一線抗搔癢治療無效時需升階至免疫調節治療（cyclosporine、ASIT）', bidirectional: false, unlock_condition: null },

  // ─── Phase 3: DERM-L3-014 (MCT) & DERM-L4-005 (Dermatohistopathology) ───

  // DERM-L2-001 (過敏/肥大細胞機轉) → MCT
  { id: 'DERM-E-052', source_node_id: 'DERM-L2-001', target_node_id: 'DERM-L3-014', relation_type: 'prerequisite', weight: 0.9, description: '肥大細胞生物學與脫顆粒機轉是理解 MCT 的基礎', bidirectional: false, unlock_condition: null },

  // MCT → FNA 細胞學
  { id: 'DERM-E-053', source_node_id: 'DERM-L3-014', target_node_id: 'DERM-L4-003', relation_type: 'clinical_apply', weight: 1.0, description: 'MCT 初步診斷依賴 FNA 細胞學（典型紫色顆粒）', bidirectional: false, unlock_condition: null },

  // MCT → 組織病理
  { id: 'DERM-E-054', source_node_id: 'DERM-L3-014', target_node_id: 'DERM-L4-005', relation_type: 'clinical_apply', weight: 1.0, description: 'MCT 分級（Patnaik/Kiupel）需組織病理確診', bidirectional: false, unlock_condition: null },

  // 天疱瘡 → 組織病理
  { id: 'DERM-E-055', source_node_id: 'DERM-L3-010', target_node_id: 'DERM-L4-005', relation_type: 'clinical_apply', weight: 1.0, description: '天疱瘡需組織病理確診（棘層鬆解、嗜酸球膿疱）', bidirectional: false, unlock_condition: null },

  // 藥物不良反應 → 組織病理
  { id: 'DERM-E-056', source_node_id: 'DERM-L3-011', target_node_id: 'DERM-L4-005', relation_type: 'clinical_apply', weight: 0.9, description: '藥物不良反應需組織病理確診（界面皮膚炎、角質細胞壞死）', bidirectional: false, unlock_condition: null },

  // CTCL → 組織病理
  { id: 'DERM-E-057', source_node_id: 'DERM-L3-013', target_node_id: 'DERM-L4-005', relation_type: 'clinical_apply', weight: 1.0, description: 'CTCL 確診依賴組織病理（嗜表皮淋巴球、Pautrier microabscess）', bidirectional: false, unlock_condition: null },

  // 角化異常 → 膿皮症（審計補齊缺失邊）
  { id: 'DERM-E-058', source_node_id: 'DERM-L2-002', target_node_id: 'DERM-L3-005', relation_type: 'clinical_apply', weight: 0.8, description: '角化異常導致皮膚屏障破壞，為細菌性膿皮症的誘因', bidirectional: false, unlock_condition: null },

  // ─── Phase 4: DERM-L3-015 (EGC) / DERM-L3-016 (SA) / DERM-L3-017 (DLE) ───

  // DERM-L3-015 (貓嗜酸性肉芽腫複合症) — prerequisite / clinical_apply
  { id: 'DERM-E-059', source_node_id: 'DERM-L2-001', target_node_id: 'DERM-L3-015', relation_type: 'prerequisite', weight: 0.9, description: '80%+ EGC 有過敏基礎，過敏反應機轉為核心前置知識', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-060', source_node_id: 'DERM-L1-002', target_node_id: 'DERM-L3-015', relation_type: 'prerequisite', weight: 0.8, description: '嗜酸球與肥大細胞在皮膚免疫中的角色是理解 EGC 的基礎', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-061', source_node_id: 'DERM-L3-015', target_node_id: 'DERM-L4-003', relation_type: 'clinical_apply', weight: 1.0, description: 'EGC 細胞學可見嗜酸球為主的炎症，輔助區分三型', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-062', source_node_id: 'DERM-L3-015', target_node_id: 'DERM-L4-005', relation_type: 'clinical_apply', weight: 0.9, description: 'EGC 組織病理確診（嗜酸球浸潤、膠原退化）', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-063', source_node_id: 'DERM-L3-015', target_node_id: 'DERM-L5-003', relation_type: 'clinical_apply', weight: 1.0, description: 'EGC 治療核心為免疫調節（糖皮質激素/cyclosporine）', bidirectional: false, unlock_condition: null },

  // DERM-L3-016 (脂腺炎) — prerequisite / clinical_apply
  { id: 'DERM-E-064', source_node_id: 'DERM-L1-001', target_node_id: 'DERM-L3-016', relation_type: 'prerequisite', weight: 0.9, description: '皮膚解剖（皮脂腺結構與功能）是理解脂腺炎的基礎', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-065', source_node_id: 'DERM-L2-002', target_node_id: 'DERM-L3-016', relation_type: 'prerequisite', weight: 0.8, description: '角化異常機轉與脂腺炎導致的繼發角化異常相關', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-066', source_node_id: 'DERM-L3-016', target_node_id: 'DERM-L4-005', relation_type: 'clinical_apply', weight: 1.0, description: '脂腺炎確診必須依賴組織病理（皮脂腺肉芽腫性破壞）', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-067', source_node_id: 'DERM-L3-016', target_node_id: 'DERM-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: '脂腺炎需病史與身體檢查評估毛囊鑄型與脫毛分布', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-068', source_node_id: 'DERM-L3-016', target_node_id: 'DERM-L5-003', relation_type: 'clinical_apply', weight: 0.9, description: '脂腺炎治療包含 cyclosporine 免疫調節', bidirectional: false, unlock_condition: null },

  // DERM-L3-017 (盤狀紅斑性狼瘡 DLE) — prerequisite / clinical_apply
  { id: 'DERM-E-069', source_node_id: 'DERM-L2-003', target_node_id: 'DERM-L3-017', relation_type: 'prerequisite', weight: 1.0, description: '自體免疫皮膚病機轉是理解 DLE 界面皮膚炎的基礎', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-070', source_node_id: 'DERM-L3-017', target_node_id: 'DERM-L4-005', relation_type: 'clinical_apply', weight: 1.0, description: 'DLE 確診依賴組織病理（界面皮膚炎、基底膜帶免疫複合物沉積）', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-071', source_node_id: 'DERM-L3-017', target_node_id: 'DERM-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: 'DLE 需詳細鼻部檢查與紫外線暴露史', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-072', source_node_id: 'DERM-L3-017', target_node_id: 'DERM-L5-003', relation_type: 'clinical_apply', weight: 1.0, description: 'DLE 治療核心為免疫調節（tacrolimus/doxycycline-niacinamide）', bidirectional: false, unlock_condition: null },

  // Differential edges
  { id: 'DERM-E-073', source_node_id: 'DERM-L3-017', target_node_id: 'DERM-L3-010', relation_type: 'differential', weight: 0.9, description: 'DLE 與天疱瘡鑑別：皆好發鼻面部但組織病理截然不同（interface vs acantholysis）', bidirectional: true, unlock_condition: null },
  { id: 'DERM-E-074', source_node_id: 'DERM-L3-015', target_node_id: 'DERM-L3-014', relation_type: 'differential', weight: 0.7, description: 'EGC 嗜酸性斑塊需與 MCT 鑑別（兩者皆含嗜酸球）', bidirectional: true, unlock_condition: null },
  { id: 'DERM-E-075', source_node_id: 'DERM-L3-016', target_node_id: 'DERM-L3-012', relation_type: 'differential', weight: 0.7, description: '脂腺炎與脫毛症 X 鑑別：皆為非瘙癢性脫毛但脂腺炎有毛囊鑄型', bidirectional: true, unlock_condition: null },

  // ─── 審計補齊：L3 缺失 prerequisite 邊（每個 L3 須至少 1 條 L1/L2 prerequisite）───

  // DERM-L3-001 (犬異位性皮膚炎 CAD)：IgE 介導的 Type I 過敏反應，需皮膚免疫學基礎
  { id: 'DERM-E-076', source_node_id: 'DERM-L1-002', target_node_id: 'DERM-L3-001', relation_type: 'prerequisite', weight: 3, description: '皮膚免疫學（IgE/肥大細胞/Th2 pathway）是理解 CAD 發病機轉的前置知識', bidirectional: false, unlock_condition: null },

  // DERM-L3-002 (食物不良反應)：需理解過敏反應機轉（Type I & Type IV）
  { id: 'DERM-E-077', source_node_id: 'DERM-L2-001', target_node_id: 'DERM-L3-002', relation_type: 'prerequisite', weight: 3, description: '過敏反應機轉（IgE 介導與非 IgE 介導）是理解食物不良反應的基礎', bidirectional: false, unlock_condition: null },

  // DERM-L3-003 (跳蚤過敏性皮膚炎 FAD)：Type I 過敏性超敏反應
  { id: 'DERM-E-078', source_node_id: 'DERM-L2-001', target_node_id: 'DERM-L3-003', relation_type: 'prerequisite', weight: 3, description: '過敏反應機轉（跳蚤唾液蛋白引發的 Type I 超敏反應）是 FAD 的核心病理基礎', bidirectional: false, unlock_condition: null },

  // DERM-L3-006 (馬拉色菌皮膚炎)：需理解角化異常與皮膚屏障
  { id: 'DERM-E-079', source_node_id: 'DERM-L2-002', target_node_id: 'DERM-L3-006', relation_type: 'prerequisite', weight: 3, description: '角化異常導致皮脂過度分泌，為馬拉色菌過度增殖的前提條件', bidirectional: false, unlock_condition: null },

  // DERM-L3-010 (天疱瘡)：自體免疫機轉攻擊橋粒蛋白
  { id: 'DERM-E-080', source_node_id: 'DERM-L2-003', target_node_id: 'DERM-L3-010', relation_type: 'prerequisite', weight: 3, description: '自體免疫皮膚病機轉（抗橋粒蛋白抗體導致棘層鬆解）是天疱瘡的核心前置知識', bidirectional: false, unlock_condition: null },

  // DERM-L3-013 (皮膚淋巴瘤 CTCL)：需免疫學基礎理解 T 細胞腫瘤行為
  { id: 'DERM-E-081', source_node_id: 'DERM-L1-002', target_node_id: 'DERM-L3-013', relation_type: 'prerequisite', weight: 3, description: '皮膚免疫學（T 細胞亞群與嗜皮性）是理解 CTCL 嗜表皮行為的基礎', bidirectional: false, unlock_condition: null },
];
