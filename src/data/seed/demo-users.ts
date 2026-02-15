/**
 * Demo 測試身分
 */

export interface DemoUser {
  id: string;
  email: string;
  role: 'user' | 'admin';
}

export const DEMO_STUDENT: DemoUser = {
  id: 'demo-student-001',
  email: 'student@vetknowledge.demo',
  role: 'user',
};

export const DEMO_ADMIN: DemoUser = {
  id: 'demo-admin-001',
  email: 'admin@vetknowledge.demo',
  role: 'admin',
};
