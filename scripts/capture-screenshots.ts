/**
 * Capture screenshots of the Ship Right WMS app for the marketing site.
 * 
 * Prerequisites:
 *   1. Ship Right frontend running at http://localhost:3000
 *   2. Logged in session (script will login first)
 * 
 * Usage:
 *   cd marketing-site
 *   npx playwright install chromium
 *   npx tsx scripts/capture-screenshots.ts
 */

import { chromium } from 'playwright';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'screenshots');

// Login credentials — update these
const LOGIN_EMAIL = 'admin';
const LOGIN_PASSWORD = 'admin123';

interface Screenshot {
  name: string;
  path: string;
  waitFor?: string; // CSS selector to wait for before capturing
  delay?: number;   // Extra delay in ms after page load
  viewport?: { width: number; height: number };
}

const screenshots: Screenshot[] = [
  {
    name: 'dashboard',
    path: '/dashboard',
    waitFor: 'main',
    delay: 2000,
    viewport: { width: 1440, height: 900 },
  },
  {
    name: 'orders',
    path: '/orders/manage',
    waitFor: 'table, [class*="DataTable"]',
    delay: 2000,
    viewport: { width: 1440, height: 900 },
  },
  {
    name: 'order-detail',
    path: '/orders/manage', // Will navigate to first order
    waitFor: 'main',
    delay: 2000,
    viewport: { width: 1440, height: 900 },
  },
  {
    name: 'skus',
    path: '/warehouse/skus',
    waitFor: 'table, [class*="DataTable"]',
    delay: 2000,
    viewport: { width: 1440, height: 900 },
  },
  {
    name: 'picking',
    path: '/picking',
    waitFor: 'main',
    delay: 2000,
    viewport: { width: 1440, height: 900 },
  },
  {
    name: 'packing',
    path: '/packing',
    waitFor: 'main',
    delay: 2000,
    viewport: { width: 1440, height: 900 },
  },
  {
    name: 'warehouse-locations',
    path: '/warehouse/locations',
    waitFor: 'main',
    delay: 2000,
    viewport: { width: 1440, height: 900 },
  },
  {
    name: 'settings',
    path: '/settings',
    waitFor: 'main',
    delay: 1500,
    viewport: { width: 1440, height: 900 },
  },
];

async function main() {
  console.log('🚀 Starting screenshot capture...\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2, // Retina quality
  });
  const page = await context.newPage();

  // Login
  console.log('🔐 Logging in...');
  await page.goto(`${BASE_URL}/login`);
  await page.waitForLoadState('domcontentloaded');

  // Try to find login form fields
  const usernameInput = page.locator('input[name="username"], input[name="email"], input[type="text"]').first();
  const passwordInput = page.locator('input[name="password"], input[type="password"]').first();

  if (await usernameInput.isVisible()) {
    await usernameInput.fill(LOGIN_EMAIL);
    await passwordInput.fill(LOGIN_PASSWORD);
    
    const submitBtn = page.locator('button[type="submit"], button:has-text("Login"), button:has-text("Sign in")').first();
    await submitBtn.click();
    
    // Wait for redirect after login
    await page.waitForURL((url) => !url.pathname.includes('login'), { timeout: 10000 });
    console.log('✅ Logged in successfully\n');
  } else {
    console.log('⚠️  Could not find login form — continuing without login\n');
  }

  // Capture each screenshot
  for (const shot of screenshots) {
    try {
      console.log(`📸 Capturing: ${shot.name} (${shot.path})`);

      if (shot.viewport) {
        await page.setViewportSize(shot.viewport);
      }

      await page.goto(`${BASE_URL}${shot.path}`, { waitUntil: 'domcontentloaded', timeout: 15000 });

      if (shot.waitFor) {
        try {
          await page.waitForSelector(shot.waitFor, { timeout: 5000 });
        } catch {
          console.log(`   ⚠️  Selector "${shot.waitFor}" not found, continuing anyway`);
        }
      }

      if (shot.delay) {
        await page.waitForTimeout(shot.delay);
      }

      const outputPath = path.join(OUTPUT_DIR, `${shot.name}.png`);
      await page.screenshot({
        path: outputPath,
        fullPage: false,
      });

      console.log(`   ✅ Saved: public/screenshots/${shot.name}.png`);
    } catch (error) {
      console.error(`   ❌ Failed: ${error}`);
    }
  }

  await browser.close();
  console.log('\n🎉 Done! Screenshots saved to public/screenshots/');
}

main().catch(console.error);
