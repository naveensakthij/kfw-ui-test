const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // ... other config options ...

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Chromium'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['WebKit'] },
    },
  ],
});