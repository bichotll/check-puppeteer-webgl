const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();

  // Test for webgl support
  // e.g. https://developer.mozilla.org/en-US/docs/Learn/WebGL/By_example/Detect_WebGL
  const webgl = await page.evaluate(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    const expGl = canvas.getContext('experimental-webgl');

    return {
      gl: gl && gl instanceof WebGLRenderingContext,
      expGl: expGl && expGl instanceof WebGLRenderingContext,
    };
  });

  console.log('WebGL Support:', webgl);

  await browser.close();
})();
