const puppeteer = require("puppeteer");

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.setDefaultTimeout(50000)
    await page.goto("https://github.com/msnkr/friendly-system");

    // posts = await page.evaluate(() => Array.from( document.querySelectorAll(".titleline"), (e) => ({

    //     title: e.querySelector("a").textContent,
    //     link: e.querySelector("a").href,
    // })))

    // console.log(posts);
    page.setDefaultTimeout(50000)
    await page.screenshot({ path: "blueRice.png", fullPage: true })

    await browser.close();
};

run();