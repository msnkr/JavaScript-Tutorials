
// Crawl hackernews
// const puppeteer = require("puppeteer");

// async function run() {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     await page.goto("https://news.ycombinator.com/");

//     posts = await page.evaluate(() => Array.from( document.querySelectorAll(".titleline"), (e) => ({

//         title: e.querySelector("a").textContent,
//         link: e.querySelector("a").href,
//     })))

//     console.log(posts);

//     await browser.close();
// };

// run();

const puppeteer = require("puppeteer");

async function run() {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://en.wikipedia.org/wiki/Machine_learning");

    const para = await page.evaluate(() => document.body.innerHTML;);
    console.log(para);
    


    await browser.close();
};

run();