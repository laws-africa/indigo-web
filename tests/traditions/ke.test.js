const {toMatchImageSnapshot} = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

const config = {
  comparisonMethod: 'ssim',
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
};

test('judgment tables', async function () {
  await page.goto(`file://${__dirname}/ke-judgment-tables.html`, { waitUntil: 'networkidle0' });
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot(config);
});

test('judgment header', async function () {
  await page.goto(`file://${__dirname}/ke-judgment-header.html`, { waitUntil: 'networkidle0' });
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot(config);
});
