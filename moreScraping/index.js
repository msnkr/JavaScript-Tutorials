
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

// const puppeteer = require("puppeteer");

// async function run() {

//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     await page.goto("https://www.scrapethissite.com/pages/");

//     const para = await page.evaluate(() => Array.from(document.querySelectorAll(".page"), (e) => ({
//         title: e.querySelector(".page-title").textContent,
//         p: e.querySelector("p").textContent,

//     })));

//     para.forEach(element => {
//         console.log(element["title"].trim());
//         console.log(element["p"].trim());
//     })

//     await browser.close();
// };

// run();

// const puppeteer = require("puppeteer");

// async function run() {

//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     await page.goto("https://www.scrapethissite.com/pages/simple/");

//     let country = await page.evaluate(() => Array.from(document.querySelectorAll(".country"), (e) => ({

//         countryName: e.querySelector(".country-name").textContent,
//         countryInfo: e.querySelector(".country-capital").textContent,
//         population: e.querySelector(".country-population").textContent,

//     })));

//     country.forEach(e => {
//         console.log(e["countryName"].trim());
//         console.log(e["countryInfo"].trim());
//         console.log(e["population"].trim());
//         console.log();
//     })

//     await browser.close();
// };

// run();

const puppeteer = require("puppeteer");

async function run() {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://www.scrapethissite.com/pages/forms/");

    let team = await page.evaluate(() => Array.from(document.querySelectorAll(".table.team"), (e) => ({
        name: e.querySelector("tr.team .name").textContent,
        // wins: e.querySelector("wins").textContent,
    })))

    console.log(team);

    await browser.close();
};

run();