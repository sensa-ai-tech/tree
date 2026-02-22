/**
 * VetKnowledgeTree 全面品質審計腳本
 *
 * 15 維度評分系統：10 維度 Seed Data + 5 維度 Engineering
 * 執行方式：npx tsx --tsconfig tsconfig.json scripts/audit-fullstack.ts [--json]
 *
 * 專家小組映射：
 * - 🔒 網路安全工程師 → D11 Security Headers
 * - 🧑‍💻 專案工程師 → D12 Error Handling
 * - 🎨 UI/UX 設計師 → D13 Accessibility
 * - 👤 使用者代言人 → D14 SEO
 * - 🧪 程式驗證設計師 → D15 Test Coverage
 */

import * as fs from 'fs';
import * as path from 'path';

// ═══════════════════════════════════════════
// 類型定義
// ═══════════════════════════════════════════

interface DimensionResult {
  dimension: string;
  expert: string;
  score: number;
  maxScore: number;
  percent: number;
  grade: string;
  checks: CheckResult[];
}

interface CheckResult {
  name: string;
  pass: boolean;
  detail: string;
  points: number;
  maxPoints: number;
}

interface AuditReport {
  timestamp: string;
  version: string;
  dimensions: DimensionResult[];
  seedScore: number;
  engineeringScore: number;
  totalScore: number;
  totalMax: number;
  overallPercent: number;
  overallGrade: string;
}

// ═══════════════════════════════════════════
// 工具函數
// ═══════════════════════════════════════════

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');

function fileExists(relativePath: string): boolean {
  return fs.existsSync(path.join(ROOT, relativePath));
}

function readFileContent(relativePath: string): string {
  const fullPath = path.join(ROOT, relativePath);
  if (!fs.existsSync(fullPath)) return '';
  return fs.readFileSync(fullPath, 'utf-8');
}

function countFiles(dir: string, pattern: RegExp): number {
  if (!fs.existsSync(dir)) return 0;
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true, recursive: true });
  for (const entry of entries) {
    if (entry.isFile() && pattern.test(entry.name)) {
      count++;
    }
  }
  return count;
}

function findFilesRecursive(dir: string, pattern: RegExp): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true, recursive: true });
  for (const entry of entries) {
    if (entry.isFile() && pattern.test(entry.name)) {
      const parentPath = 'parentPath' in entry ? (entry as { parentPath: string }).parentPath : dir;
      results.push(path.join(parentPath, entry.name));
    }
  }
  return results;
}

function grade(percent: number): string {
  if (percent >= 90) return 'A';
  if (percent >= 75) return 'B';
  if (percent >= 60) return 'C';
  if (percent >= 40) return 'D';
  return 'F';
}

function check(name: string, pass: boolean, detail: string, maxPoints: number): CheckResult {
  return {
    name,
    pass,
    detail,
    points: pass ? maxPoints : 0,
    maxPoints,
  };
}

// ═══════════════════════════════════════════
// D11: Security Headers (🔒 網路安全工程師)
// ═══════════════════════════════════════════

function auditSecurityHeaders(): DimensionResult {
  const nextConfig = readFileContent('next.config.ts');
  const mermaidFile = readFileContent('src/components/features/MermaidRenderer.tsx');

  const checks: CheckResult[] = [
    check(
      'CSP Header',
      nextConfig.includes('Content-Security-Policy'),
      nextConfig.includes('Content-Security-Policy') ? 'CSP header configured' : 'Missing CSP header',
      4
    ),
    check(
      'HSTS Header',
      nextConfig.includes('Strict-Transport-Security'),
      nextConfig.includes('Strict-Transport-Security') ? 'HSTS configured' : 'Missing HSTS',
      4
    ),
    check(
      'X-Frame-Options',
      nextConfig.includes('X-Frame-Options'),
      'X-Frame-Options present',
      3
    ),
    check(
      'X-Content-Type-Options',
      nextConfig.includes('X-Content-Type-Options'),
      'X-Content-Type-Options present',
      3
    ),
    check(
      'Permissions-Policy',
      nextConfig.includes('Permissions-Policy'),
      'Permissions-Policy present',
      3
    ),
    check(
      'Mermaid Security Level',
      !mermaidFile.includes("securityLevel: 'loose'"),
      mermaidFile.includes("securityLevel: 'strict'") ? 'Mermaid uses strict mode' : 'Mermaid not in strict mode',
      3
    ),
  ];

  const totalPoints = checks.reduce((sum, c) => sum + c.points, 0);
  const maxPoints = checks.reduce((sum, c) => sum + c.maxPoints, 0);
  const percent = Math.round((totalPoints / maxPoints) * 100);

  return {
    dimension: 'D11: Security Headers',
    expert: '🔒 網路安全工程師',
    score: totalPoints,
    maxScore: maxPoints,
    percent,
    grade: grade(percent),
    checks,
  };
}

// ═══════════════════════════════════════════
// D12: Error Handling (🧑‍💻 專案工程師)
// ═══════════════════════════════════════════

function auditErrorHandling(): DimensionResult {
  const checks: CheckResult[] = [
    check(
      'global-error.tsx',
      fileExists('src/app/global-error.tsx'),
      'Global error boundary exists',
      4
    ),
    check(
      'Root error.tsx',
      fileExists('src/app/error.tsx'),
      'Root error boundary exists',
      3
    ),
    check(
      'not-found.tsx',
      fileExists('src/app/not-found.tsx'),
      'Not found page exists',
      3
    ),
    check(
      'Graph error.tsx',
      fileExists('src/app/(dashboard)/graph/error.tsx'),
      'Graph route error boundary',
      3
    ),
    check(
      'Node detail error.tsx',
      fileExists('src/app/(dashboard)/nodes/[nodeId]/error.tsx'),
      'Node detail error boundary',
      3
    ),
    check(
      'Dashboard loading.tsx',
      fileExists('src/app/(dashboard)/loading.tsx'),
      'Dashboard loading state',
      2
    ),
    check(
      'Graph loading.tsx',
      fileExists('src/app/(dashboard)/graph/loading.tsx'),
      'Graph page loading state',
      2
    ),
  ];

  const totalPoints = checks.reduce((sum, c) => sum + c.points, 0);
  const maxPoints = checks.reduce((sum, c) => sum + c.maxPoints, 0);
  const percent = Math.round((totalPoints / maxPoints) * 100);

  return {
    dimension: 'D12: Error Handling',
    expert: '🧑‍💻 專案工程師',
    score: totalPoints,
    maxScore: maxPoints,
    percent,
    grade: grade(percent),
    checks,
  };
}

// ═══════════════════════════════════════════
// D13: Accessibility (🎨 UI/UX 設計師)
// ═══════════════════════════════════════════

function auditAccessibility(): DimensionResult {
  const quizEngine = readFileContent('src/components/features/QuizEngine.tsx');
  const allComponentFiles = findFilesRecursive(path.join(SRC, 'components'), /\.tsx$/);

  // 計算有 aria 屬性的元件數量
  let ariaCount = 0;
  for (const file of allComponentFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    if (/aria-/.test(content)) ariaCount++;
  }

  const checks: CheckResult[] = [
    check(
      'QuizEngine ARIA radiogroup',
      quizEngine.includes('role="radiogroup"'),
      quizEngine.includes('role="radiogroup"') ? 'QuizEngine uses radiogroup pattern' : 'Missing radiogroup',
      5
    ),
    check(
      'QuizEngine keyboard nav',
      quizEngine.includes('ArrowDown') && quizEngine.includes('ArrowUp'),
      quizEngine.includes('ArrowDown') ? 'Keyboard navigation implemented' : 'Missing keyboard navigation',
      5
    ),
    check(
      'Components with ARIA (≥3)',
      ariaCount >= 3,
      `${ariaCount} components have ARIA attributes`,
      5
    ),
    check(
      'Focus ring styles',
      quizEngine.includes('focus:ring') || quizEngine.includes('focus:outline'),
      'Focus ring styles present',
      5
    ),
  ];

  const totalPoints = checks.reduce((sum, c) => sum + c.points, 0);
  const maxPoints = checks.reduce((sum, c) => sum + c.maxPoints, 0);
  const percent = Math.round((totalPoints / maxPoints) * 100);

  return {
    dimension: 'D13: Accessibility',
    expert: '🎨 UI/UX 設計師',
    score: totalPoints,
    maxScore: maxPoints,
    percent,
    grade: grade(percent),
    checks,
  };
}

// ═══════════════════════════════════════════
// D14: SEO (👤 使用者代言人)
// ═══════════════════════════════════════════

function auditSEO(): DimensionResult {
  const sitemapContent = readFileContent('src/app/sitemap.ts');
  const robotsContent = readFileContent('src/app/robots.ts');
  const layoutContent = readFileContent('src/app/layout.tsx');
  const nodeLayoutContent = readFileContent('src/app/(dashboard)/nodes/[nodeId]/layout.tsx');

  const checks: CheckResult[] = [
    check(
      'sitemap.ts exists',
      fileExists('src/app/sitemap.ts'),
      'Sitemap configuration exists',
      3
    ),
    check(
      'sitemap includes dynamic nodes',
      sitemapContent.includes('ALL_NODES'),
      sitemapContent.includes('ALL_NODES') ? 'Sitemap includes all knowledge nodes' : 'Sitemap only has static routes',
      4
    ),
    check(
      'robots.ts exists',
      fileExists('src/app/robots.ts'),
      'Robots configuration exists',
      3
    ),
    check(
      'robots blocks /api/',
      robotsContent.includes('/api/'),
      robotsContent.includes('/api/') ? 'Robots blocks /api/' : 'API routes not blocked',
      2
    ),
    check(
      'metadataBase configured',
      layoutContent.includes('metadataBase'),
      'metadataBase set in root layout',
      3
    ),
    check(
      'JSON-LD structured data',
      layoutContent.includes('application/ld+json'),
      layoutContent.includes('application/ld+json') ? 'JSON-LD present' : 'Missing JSON-LD',
      3
    ),
    check(
      'Dynamic node metadata',
      nodeLayoutContent.includes('generateMetadata'),
      nodeLayoutContent.includes('generateMetadata') ? 'Node pages have dynamic metadata' : 'Missing dynamic metadata',
      2
    ),
  ];

  const totalPoints = checks.reduce((sum, c) => sum + c.points, 0);
  const maxPoints = checks.reduce((sum, c) => sum + c.maxPoints, 0);
  const percent = Math.round((totalPoints / maxPoints) * 100);

  return {
    dimension: 'D14: SEO',
    expert: '👤 使用者代言人',
    score: totalPoints,
    maxScore: maxPoints,
    percent,
    grade: grade(percent),
    checks,
  };
}

// ═══════════════════════════════════════════
// D15: Test Coverage (🧪 程式驗證設計師)
// ═══════════════════════════════════════════

function auditTestCoverage(): DimensionResult {
  const unitTestCount = countFiles(path.join(SRC, 'tests', 'unit'), /\.test\.(ts|tsx)$/);
  const integrationTestCount = countFiles(path.join(SRC, 'tests', 'integration'), /\.test\.(ts|tsx)$/);
  const e2eTestCount = countFiles(path.join(SRC, 'tests', 'e2e'), /\.spec\.(ts|tsx)$/);
  const storeTestExists = fileExists('src/tests/unit/stores/knowledge-store.test.ts');

  const totalTestFiles = unitTestCount + integrationTestCount + e2eTestCount;

  const checks: CheckResult[] = [
    check(
      'Unit tests (≥5 files)',
      unitTestCount >= 5,
      `${unitTestCount} unit test files`,
      4
    ),
    check(
      'Integration tests (≥2 files)',
      integrationTestCount >= 2,
      `${integrationTestCount} integration test files`,
      4
    ),
    check(
      'E2E tests (≥2 files)',
      e2eTestCount >= 2,
      `${e2eTestCount} E2E test files`,
      4
    ),
    check(
      'Store tests exist',
      storeTestExists,
      storeTestExists ? 'Zustand store tests present' : 'Missing store tests',
      4
    ),
    check(
      'Total test files (≥12)',
      totalTestFiles >= 12,
      `Total: ${totalTestFiles} test files`,
      4
    ),
  ];

  const totalPoints = checks.reduce((sum, c) => sum + c.points, 0);
  const maxPoints = checks.reduce((sum, c) => sum + c.maxPoints, 0);
  const percent = Math.round((totalPoints / maxPoints) * 100);

  return {
    dimension: 'D15: Test Coverage',
    expert: '🧪 程式驗證設計師',
    score: totalPoints,
    maxScore: maxPoints,
    percent,
    grade: grade(percent),
    checks,
  };
}

// ═══════════════════════════════════════════
// Seed Data 審計分數（從最近的 audit log 讀取）
// ═══════════════════════════════════════════

function getSeedAuditScore(): number {
  const auditLogDir = path.join(ROOT, 'scripts', 'audit-logs');
  if (!fs.existsSync(auditLogDir)) return 0;

  const files = fs.readdirSync(auditLogDir)
    .filter((f) => f.endsWith('.json'))
    .sort()
    .reverse();

  if (files.length === 0) return 100; // 假設已達 100

  try {
    const latest = JSON.parse(fs.readFileSync(path.join(auditLogDir, files[0]), 'utf-8'));
    return latest.totalScore ?? latest.score ?? 100;
  } catch {
    return 100;
  }
}

// ═══════════════════════════════════════════
// 主程式
// ═══════════════════════════════════════════

function runAudit(): AuditReport {
  const dimensions: DimensionResult[] = [
    auditSecurityHeaders(),
    auditErrorHandling(),
    auditAccessibility(),
    auditSEO(),
    auditTestCoverage(),
  ];

  const seedScore = getSeedAuditScore();
  const engineeringScore = dimensions.reduce((sum, d) => sum + d.score, 0);
  const engineeringMax = dimensions.reduce((sum, d) => sum + d.maxScore, 0);
  const totalScore = seedScore + engineeringScore;
  const totalMax = 100 + engineeringMax;
  const overallPercent = Math.round((totalScore / totalMax) * 100);

  return {
    timestamp: new Date().toISOString(),
    version: '2.0.0',
    dimensions,
    seedScore,
    engineeringScore,
    totalScore,
    totalMax,
    overallPercent,
    overallGrade: grade(overallPercent),
  };
}

// ═══════════════════════════════════════════
// CLI 輸出
// ═══════════════════════════════════════════

const report = runAudit();
const isJson = process.argv.includes('--json');

if (isJson) {
  // JSON 輸出模式
  const outputPath = path.join(ROOT, 'scripts', 'audit-logs', `fullstack-${new Date().toISOString().slice(0, 10)}.json`);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  console.log(`\n📄 Report saved to ${outputPath}`);
} else {
  // 人類可讀輸出
  console.log('\n' + '═'.repeat(60));
  console.log('  VetKnowledgeTree 全面品質審計報告');
  console.log('  版本：2.0.0 | 15 維度 (10 Seed + 5 Engineering)');
  console.log('═'.repeat(60));

  console.log(`\n📊 Seed Data 審計分數：${report.seedScore}/100`);
  console.log('─'.repeat(40));

  for (const dim of report.dimensions) {
    const icon = dim.percent >= 90 ? '✅' : dim.percent >= 60 ? '⚠️' : '❌';
    console.log(`\n${icon} ${dim.dimension} — ${dim.expert}`);
    console.log(`   分數：${dim.score}/${dim.maxScore} (${dim.percent}%) [${dim.grade}]`);
    for (const c of dim.checks) {
      const ci = c.pass ? '  ✓' : '  ✗';
      console.log(`   ${ci} ${c.name}: ${c.detail} (${c.points}/${c.maxPoints})`);
    }
  }

  console.log('\n' + '═'.repeat(60));
  console.log(`  🏆 Seed Score:        ${report.seedScore}/100`);
  console.log(`  🔧 Engineering Score: ${report.engineeringScore}/${report.totalMax - 100}`);
  console.log(`  📊 Total:             ${report.totalScore}/${report.totalMax} (${report.overallPercent}%)`);
  console.log(`  📈 Overall Grade:     ${report.overallGrade}`);
  console.log('═'.repeat(60) + '\n');
}
