/**
 * Capture sanitized screenshots of the Ship Right WMS app for the marketing site.
 * 
 * IMPORTANT: This does NOT modify any database or API data.
 * It only replaces text in the browser DOM before taking screenshots.
 * The live app and database are completely untouched.
 * 
 * Prerequisites:
 *   1. Ship Right frontend running at http://localhost:3000
 *   2. Logged in session (script will login first)
 * 
 * Usage:
 *   cd marketing-site
 *   npx tsx scripts/capture-screenshots.ts
 */

import { chromium, Page } from 'playwright';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'screenshots');

// Login credentials
const LOGIN_EMAIL = 'admin';
const LOGIN_PASSWORD = 'admin123';

/**
 * Sanitize PII in the browser DOM before taking a screenshot.
 * This runs entirely in the browser — no database or API changes.
 */
async function sanitizePage(page: Page) {
  await page.evaluate(() => {
    const body = document.body;
    if (!body) return;

    // Walk all text nodes and replace PII patterns
    const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null);
    const textNodes: Text[] = [];
    let node: Text | null;
    while ((node = walker.nextNode() as Text)) {
      textNodes.push(node);
    }

    // Also sanitize input values
    document.querySelectorAll('input, textarea').forEach((el) => {
      const input = el as HTMLInputElement;
      if (input.type === 'email' || input.name?.includes('email')) {
        input.value = '[email]@example.com';
      }
      if (input.name?.includes('phone')) {
        input.value = '(555) 000-0000';
      }
    });

    for (const textNode of textNodes) {
      let text = textNode.textContent || '';

      // Email addresses
      text = text.replace(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
        '[email]@example.com'
      );

      // Phone numbers (various formats)
      text = text.replace(
        /(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g,
        '(555) 000-0000'
      );

      // Street addresses (number + street name pattern)
      text = text.replace(
        /\d{1,5}\s+[A-Z][a-zA-Z]+(\s+[A-Z][a-zA-Z]+)*\s+(St|Ave|Blvd|Dr|Ln|Rd|Way|Ct|Pl|Cir|Pkwy|Ter)\b\.?/g,
        '123 Demo Street'
      );

      // Customer names that look like "First Last" near order/customer context
      // (conservative — only replace in elements that likely contain customer data)
      const parent = textNode.parentElement;
      const parentClass = parent?.className || '';
      const parentText = parent?.textContent || '';
      if (
        parentClass.includes('customer') ||
        parentText.includes('Customer') ||
        parentText.includes('Ship to') ||
        parentText.includes('Bill to')
      ) {
        // Replace "First Last" patterns (2-3 capitalized words)
        text = text.replace(
          /\b[A-Z][a-z]+\s+[A-Z][a-z]+(\s+[A-Z][a-z]+)?\b/g,
          'Jane Smith'
        );
      }

      // Shopify order names — keep the format but anonymize
      text = text.replace(/#SVAHA-\d+(-EXC\d+)?/g, (match) => {
        if (match.includes('EXC')) return '#DEMO-10042-EXC1';
        return '#DEMO-' + (10000 + Math.floor(Math.random() * 999));
      });

      // City, State, ZIP patterns
      text = text.replace(
        /[A-Z][a-z]+,?\s+[A-Z]{2}\s+\d{5}(-\d{4})?/g,
        'Anytown, CA 90210'
      );

      if (text !== textNode.textContent) {
        textNode.textContent = text;
      }
    }
  });
}

interface Screenshot {
  name: string;
  path: string;
  waitFor?: string;
  delay?: number;
  viewport?: { width: number; height: number };
  clickFirst?: string; // CSS selector — click first match to navigate to a detail page
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
    path: '/orders/manage',
    waitFor: 'main',
    delay: 2000,
    viewport: { width: 1440, height: 900 },
    clickFirst: 'a[href*="/orders/"]', // Click first order link
  },
  {
    name: 'skus',
    path: '/warehouse/skus',
    waitFor: 'table, [class*="DataTable"]',
    delay: 2000,
    viewport: { width: 1440, height: 900 },
  },
  {
    name: 'sku-detail',
    path: '/warehouse/skus',
    waitFor: 'main',
    delay: 2000,
    viewport: { width: 1440, height: 900 },
    clickFirst: 'a[href*="/warehouse/skus/"]', // Click first SKU link
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
    name: 'warehouse-map',
    path: '/warehouse/map',
    waitFor: 'main',
    delay: 2000,
    viewport: { width: 1440, height: 900 },
  },
  {
    name: 'automation-rules',
    path: '/settings/automation',
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
  {
    name: 'cycle-counts',
    path: '/warehouse/cycle-counts',
    waitFor: 'main',
    delay: 2000,
    viewport: { width: 1440, height: 900 },
  },
  {
    name: 'hospital',
    path: '/warehouse/hospital',
    waitFor: 'main',
    delay: 2000,
    viewport: { width: 1440, height: 900 },
  },
  {
    name: 'help-center',
    path: '/help',
    waitFor: 'main',
    delay: 1500,
    viewport: { width: 1440, height: 900 },
  },
  {
    name: 'sync-log',
    path: '/settings/sync-log',
    waitFor: 'main',
    delay: 2000,
    viewport: { width: 1440, height: 900 },
  },
  {
    name: 'warehouse-analytics',
    path: '/warehouse/analytics',
    waitFor: 'main',
    delay: 2000,
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

      // If clickFirst is set, click the first matching element to navigate to a detail page
      if (shot.clickFirst) {
        try {
          await page.waitForSelector(shot.clickFirst, { timeout: 5000 });
          await page.locator(shot.clickFirst).first().click();
          await page.waitForLoadState('domcontentloaded');
          await page.waitForTimeout(2000); // Wait for detail page to render
        } catch {
          console.log(`   ⚠️  Could not click "${shot.clickFirst}", capturing list page instead`);
        }
      }

      if (shot.delay) {
        await page.waitForTimeout(shot.delay);
      }

      // Sanitize PII in the browser DOM (does NOT touch database or API)
      console.log(`   🔒 Sanitizing PII...`);
      await sanitizePage(page);

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
