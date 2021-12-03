const {toMatchImageSnapshot} = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

test('primary styling', async function () {
  await page.goto(`file://${__dirname}/primary-styling.html`);
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot({
    comparisonMethod: 'ssim',
    failureThreshold: 0.01,
    failureThresholdType: 'percent',
  })
});
