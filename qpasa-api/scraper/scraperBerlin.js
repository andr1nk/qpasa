const puppeteer = require("puppeteer");
const moment = require("moment")


const scrapeResidentAdvisorBerlin = async (day_residentAdvisorFormat, day_qpasaFormat) => {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    await page.goto(`https://www.residentadvisor.net/events/de/berlin/day/${day_residentAdvisorFormat}`,
        {
            waitUntil: "load"
        });
    const scrapedData = await page.evaluate(() =>
        Array.from(document.querySelectorAll("div.bbox")).map( link =>  ({
            city: "Berlin",
            eventName: link.querySelector("h1 a") && link.querySelector("h1 a").innerText,
            locationName: link.querySelector("h1 span a") && link.querySelector("h1 span a").innerText,
            description: `Lineup: ${link.querySelector(".event-lineup") && link.querySelector(".event-lineup").innerText}`,
            url: `https://www.residentadvisor.net${link.querySelector("h1 a") && link.querySelector("h1 a").getAttribute("href")}`,
        }))
    );

    await browser.close();
    const scrapedDataFiltered = scrapedData.filter( el => el.locationName)
    scrapedDataFiltered.map( el => el.date = day_qpasaFormat)
    scrapedDataFiltered.map( el => console.log(`${day_qpasaFormat}: ${el.eventName} ¦ ${el.locationName} | ${el.url}` ))
    return scrapedDataFiltered;
};

const day1_residentAdvisorFormat = moment(new Date()).format('YYYY-MM-DD')                  // Today
const day1_qpasaFormat = moment(new Date()).format('DD.MM.YYYY')

const day2_residentAdvisorFormat = moment(new Date()).add(1, 'day').format('YYYY-MM-DD')    // Tomorrow
const day2_qpasaFormat = moment(new Date()).add(1, 'day').format('DD.MM.YYYY') 

const day3_residentAdvisorFormat = moment(new Date()).add(2, 'day').format('YYYY-MM-DD')    // ...
const day3_qpasaFormat = moment(new Date()).add(2, 'day').format('DD.MM.YYYY') 

const day4_residentAdvisorFormat = moment(new Date()).add(3, 'day').format('YYYY-MM-DD')    // ...
const day4_qpasaFormat = moment(new Date()).add(3, 'day').format('DD.MM.YYYY') 

const day5_residentAdvisorFormat = moment(new Date()).add(4, 'day').format('YYYY-MM-DD')    // ...
const day5_qpasaFormat = moment(new Date()).add(4, 'day').format('DD.MM.YYYY') 

const day6_residentAdvisorFormat = moment(new Date()).add(5, 'day').format('YYYY-MM-DD')    // ...
const day6_qpasaFormat = moment(new Date()).add(5, 'day').format('DD.MM.YYYY') 

const day7_residentAdvisorFormat = moment(new Date()).add(6, 'day').format('YYYY-MM-DD')    // ...
const day7_qpasaFormat = moment(new Date()).add(6, 'day').format('DD.MM.YYYY') 

const scrapeBerlinDay1 = scrapeResidentAdvisorBerlin(day1_residentAdvisorFormat, day1_qpasaFormat)
const scrapeBerlinDay2 = scrapeResidentAdvisorBerlin(day2_residentAdvisorFormat, day2_qpasaFormat)
const scrapeBerlinDay3 = scrapeResidentAdvisorBerlin(day3_residentAdvisorFormat, day3_qpasaFormat)
const scrapeBerlinDay4 = scrapeResidentAdvisorBerlin(day4_residentAdvisorFormat, day4_qpasaFormat)
const scrapeBerlinDay5 = scrapeResidentAdvisorBerlin(day5_residentAdvisorFormat, day5_qpasaFormat)
const scrapeBerlinDay6 = scrapeResidentAdvisorBerlin(day6_residentAdvisorFormat, day6_qpasaFormat)
const scrapeBerlinDay7 = scrapeResidentAdvisorBerlin(day7_residentAdvisorFormat, day7_qpasaFormat)

module.exports = {
    scrapeBerlinDay1,
    scrapeBerlinDay2,
    scrapeBerlinDay3,
    scrapeBerlinDay4,
    scrapeBerlinDay5,
    scrapeBerlinDay6,
    scrapeBerlinDay7
};