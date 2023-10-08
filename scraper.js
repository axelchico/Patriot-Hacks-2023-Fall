const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: false,
        userDataDir: "./tmp"
    });

    const page = await browser.newPage();
    await page.goto('https://www.gmu.edu/calendar');

    const events = await page.$$eval('a', (el) => el.(link => link.href));

    console.log(events)

    await browser.close()

})();