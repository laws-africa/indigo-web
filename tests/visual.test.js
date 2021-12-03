const {toMatchImageSnapshot} = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

const config = {
  comparisonMethod: 'ssim',
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
};

test('primary styling', async function () {
  await page.goto(`file://${__dirname}/primary-styling.html`, { waitUntil: 'domcontentloaded' });
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot(config);
});

test('attachments', async function () {
  await page.goto(`file://${__dirname}/attachments.html`, { waitUntil: 'domcontentloaded' });
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot(config);
});
