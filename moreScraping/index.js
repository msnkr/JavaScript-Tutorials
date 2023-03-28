const puppeteer = require("puppeteer");

// function highKarma() {

// }

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://news.ycombinator.com/");
    const titles = await page.evaluate( () => Array.from( document.querySelectorAll(".athing"), (e) => ({
        title: e.querySelector(".titleline a").textContent,
        link: e.querySelector(".titleline a").href,

    }) ));

    const votes = await page.evaluate( () => Array.from(document.querySelectorAll(".subline"), (e) => ({
        vote: e.querySelector(".score").textContent,
    }) ))

    console.log(titles)
    console.log(votes);

    await browser.close();
};

run();