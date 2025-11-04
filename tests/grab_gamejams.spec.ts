import { test, expect } from '@playwright/test';

test('grab gamejams', {tag: '@scrape'}, async ({ page }) => {
  await page.goto('https://itch.io/jams/starting-this-month/ranked');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/itch.io/);

  let i = 0;
  while (i < 5) {
    
    
    i++;
  }
});