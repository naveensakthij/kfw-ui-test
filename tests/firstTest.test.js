const { test, expect } = require('@playwright/test');

test('Login to Amazon Kindle', async ({ page }) => {
  const email = process.env.AMZN_EMAIL;
  const password = process.env.AMZN_PASSWORD;

  if (!email || !password) {
    throw new Error('Credentials not found! Set AMZN_EMAIL and AMZN_PASSWORD environment variables.');
  }
  await page.goto('https://read.amazon.com');
  
  await page.click('#top-sign-in-btn'); 
 
  await page.fill('#ap_email',email);

  await page.click('#continue');

  await page.fill('#ap_password',password);

  await page.click('#signInSubmit');
  
  await page.waitForLoadState('networkidle');

  await expect(page).toHaveURL(/kindle-library/);
  
  console.log('verifed');

});