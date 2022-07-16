const puppeteer = require('puppeteer');

await function getMovies() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    })

    const page = await browser.newPage();
    const url = `https://hulu.com`

}