const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage()
    await page.goto("https://en.wikipedia.org/wiki/Main_Page")
    
    const grapParagraph = await page.evaluate(() => {
        const listDT = document.querySelector(".mp-box h1")
        return listDT.innerHTML;
    })
    console.log(grapParagraph);
    await browser.close();
})();