// run this for ui: npx playwright test --ui
import { test, expect } from '@playwright/test';

test('grab gamejams', {tag: '@scrape'}, async ({ page }) => {
  await page.goto('https://itch.io/jams/starting-this-month/ranked');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/itch.io/);

  const elementLocator = page.locator('css=.jam');
  const allEntries = await elementLocator.allInnerTexts();
  const selectedEntries = allEntries.slice(0, 5);

  console.log(selectedEntries)

  const jsonData = JSON.stringify(selectedEntries, null, 2)

  const fs = require('fs');
  fs.writeFileSync('output.json', jsonData);
});




/*await page
    .getByRole('listitem')
    .filter({ has: page.getByRole('heading', { name: 'Product 2' }) })
    .getByRole('button', { name: 'Add to cart' })
    .click(); */