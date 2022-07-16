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
    var url = `https://hulu.com/welcome`
    await page.goto(url);
    
    //login sequence
    await page.click('.navigation__login-button.navigation__logged-out-button');
    await page.type('#email_id', uname)
    await page.type('#password_id', pwd)
    await page.click('.login-button')
    await page.waitForNavigation();

    // todo: param headers to specify movies, tv shows, genre (movies & TV shows), kid friendly, ratings, etc
    // Navigate to TV Shows or movies, depending on what is selected (for now only tv shows)
    const tvshow = true; //temp
    var tvshowurl = "https://hulu.com/hub/tv";
    var otherurl = "https://hulu.com/hub/movies";
    var selectedstr = tvshow ? tvshowurl : otherurl;
    console.log(selectedstr)
    await page.goto(selectedstr)



    var listoftv = [];
    var listofmovies = [];

    

}

getMovies()