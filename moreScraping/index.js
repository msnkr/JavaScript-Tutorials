const puppeteer = require("puppeteer");

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.theweathernetwork.com/za/weather/gauteng/johannesburg");

    // const weather = await page.evaluate(() => Array.from(document.querySelectorAll("tr"), (e) => ({
    //     date: e.querySelector(".small").textContent,

    // })))

    // console.log(weather);

    const title = await page.evaluate(document.title);
    console.log(title);

    await browser.close();
};

run();