
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

// const puppeteer = require("puppeteer");

// async function run() {

//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

    // await page.goto("https://www.scrapethissite.com/pages/forms/");

    // const name = await page.evaluate( () => Array.from( document.querySelectorAll("tbody tr.team"), (e) => ({
    //     name: e.querySelector("td.name").textContent,
    //     wins: e.querySelector("td.wins").textContent,
    // }) ) )

//     await page.goto("https://www.imdb.com/chart/tvmeter/?ref_=nv_tvv_mptv");

//     let movies = await page.evaluate(() => Array.from(document.querySelectorAll("tbody.lister-list tr"), (e) => ({
//         movieName: e.querySelector(".titleColumn a").innerHTML,
//         movieRating: e.querySelector("td.ratingColumn Strong").innerHTML,
//     })));

//     movies.forEach( (name, index) => console.log(`${index}: ${name.movieName} | Rating: ${name.movieRating}`));


//     await browser.close();
// };

// run();

// const puppeteer = require("puppeteer");

// async function run() {

//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     await page.goto("https://www.scrapethissite.com/pages/simple/");

//     const titles = await page.evaluate(() => Array.from(document.querySelectorAll(".country"), (e) => ({
//         countryName: e.querySelector("h3.country-name").textContent,
//         countryCapital: e.querySelector(".country-info .country-capital").textContent,
//     })))
    
    
//     titles.forEach(e => {
//         console.log(`The capital of ${e.countryName.trim()} is ${e.countryCapital.trim()}`);
//     })

//     await browser.close();

// };

// run();

// const puppeteer = require("puppeteer");

// async function run() {

//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto("https://www.scrapethissite.com/pages/forms/");

//     const teams = await page.evaluate(() => Array.from(document.querySelectorAll(".team"), (e) => ({
//         name: e.querySelector(".name").textContent,
//         wins: e.querySelector(".wins").textContent,
//     })))

//     teams.forEach( e => console.log(`${e.name.trim()} had ${e.wins.trim()} wins`) )

//     await browser.close();

// };

// run();

// const puppeteer = require("puppeteer");

// async function run() {

//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto("https://www.scrapethissite.com/pages/forms/");

//     await page.type("#q", "New York Rangers");
//     await page.click(".btn.btn-primary");
//     await page.waitForNavigation();


//     let name = await page.evaluate(() => Array.from(document.querySelectorAll(".team"), e => ({
//         clubName: e.querySelector(".name").textContent,
//         clubWins: e.querySelector(".wins").textContent,
//         clubYear: e.querySelector(".year").textContent,
//     })))

//     name.forEach(n => console.log(`${n.clubName.trim()}: ${n.clubWins.trim()} in ${n.clubYear.trim()}`));
//     await browser.close();

// };

// run();

const puppeteer = require("puppeteer");

async function run() {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.scrapethissite.com/pages/forms/");

    let  pageNum = 2;

    while (pageNum < 5) {
        let years = await page.evaluate( () => Array.from(document.querySelectorAll(".team"), e => ({
            year: e.querySelector(".year").textContent,
        }))  )
    
        years.forEach( year => console.log(year.year.trim()));
        await page.goto(`https://www.scrapethissite.com/pages/forms/page_num=${pageNum}`);
        pageNum++;
    }

    await browser.close();

};

run();


