import { NextResponse } from 'next/server';

/**
 * Health check endpoint for uptime monitoring.
 * GET /api/health → { status: 'ok', timestamp, version }
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version ?? '0.1.0',
  });
}
