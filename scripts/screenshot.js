import { chromium, devices } from 'playwright';
import fs from 'fs';

try {
  if (!fs.existsSync('screenshots')) fs.mkdirSync('screenshots');

  const run = async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({ ...devices['Pixel 5'] });
    const page = await context.newPage();
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'screenshots/mobile.png', fullPage: true });
    await browser.close();
    console.log('Screenshot saved to screenshots/mobile.png');
  };

  await run();
} catch (err) {
  console.error('Error capturing screenshot:', err);
  process.exit(1);
}
