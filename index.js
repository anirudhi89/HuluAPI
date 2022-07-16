const puppeteer = require('puppeteer');
require('dotenv').config()
var pwd = process.env.PWD; //temp
var uname = process.env.UNAME; //temp

async function getMovies() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    })

    const page = await browser.newPage();
    const url = `https://hulu.com/welcome`
    await page.goto(url);
    
    //login sequence
    await page.click('.navigation__login-button.navigation__logged-out-button');
    await page.type('#email_id', uname)
    await page.type('#password_id', pwd)
    await page.click('jsx-4282396490.login-button')

    // todo: param headers to specify movies, tv shows, genre (movies & TV shows), kid friendly, ratings, etc
    var listoftv = [];
    var listofmovies = [];


}

getMovies()