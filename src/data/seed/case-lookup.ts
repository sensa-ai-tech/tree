/**
 * Case lookup module — provides ALL_CASES for client-side case detail pages.
 * Separated from index.ts to avoid importing store-dependent code on client components.
 */
import type { CaseChallenge } from '@/types/case';

import { CARDIO_CASES } from './cardio/cases';
import { IM_CASES } from './im/cases';
import { DERM_CASES } from './derm/cases';
import { SURG_CASES } from './surg/cases';
import { NEURO_CASES } from './neuro/cases';
import { ONCO_CASES } from './onco/cases';
import { ECC_CASES } from './ecc/cases';

/** All case challenges merged across all specialties */
export const ALL_CASES: CaseChallenge[] = [
  ...CARDIO_CASES,
  ...IM_CASES,
  ...DERM_CASES,
  ...SURG_CASES,
  ...NEURO_CASES,
  ...ONCO_CASES,
  ...ECC_CASES,
];
