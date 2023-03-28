const puppeteer = require("puppeteer");

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://freemeteo.co.za/weather/johannesburg/7-days/list/?gid=993800&language=english");

    // const weather = await page.evaluate(() => Array.from(document.querySelectorAll("tr"), (e) => ({
    //     date: e.querySelector(".small").textContent,

    // })))

    // console.log(weather);

    const title = await page.content();
    console.log(title);

    await browser.close();
};

run();