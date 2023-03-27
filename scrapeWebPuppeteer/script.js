const puppeteer = require("puppeteer");

async function run() {
    const browser =  await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.traversymedia.com/")

    // await page.screenshot({ path: "example.png", fullPage: true});
    // await page.screenshot({ path: "example.pdf", format: "A4" });

    // const html = await page.content();
    // console.log(html);

    // const title = await page.evaluate(() => document.title);
    // console.log(title);

    // const text = await page.evaluate( () => document.body.innerText );
    // console.log(text);

    // const links = await page.evaluate(() => Array.from(document.querySelectorAll("a"), (e) => e.href));
    // console.log(links);

    // const courses = await page.evaluate(() => Array.from(document.querySelectorAll("#cscourses .card"), (e) => ({
    //     title: e.querySelector(".card-body h3").textContent,
    //     level: e.querySelector(".card-body .level").textContent,
    //     link: e.querySelector(".card-footer a").href,
    //     }))
    // );

    // console.log(courses);


    await browser.close();
} 

run();