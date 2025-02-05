"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
  
    try {
      await registerSW();
    } catch (err) {
      error.textContent = "Failed to register service worker.";
      errorCode.textContent = err.toString();
      throw err;
    }
    const url = search(address.value, searchEngine.value);
    const encodedUrl = __uv$config.prefix + __uv$config.encodeUrl(url);
    sessionStorage.setItem("searchUrl", encodedUrl);
    window.location.href = "output.html";
  });
  
  

const datetimeSpan = document.querySelector('.datetime');
async function updateDateTimeAndBattery() {
    const now = new Date();
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };
    const date = now.toLocaleDateString('en-US', options);
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    try {
        const battery = await navigator.getBattery();
        const level = (battery.level * 100).toFixed(0);
        const charging = battery.charging ? "Charging" : "Not Charging";
        datetimeSpan.textContent = `${date} ${time} | Battery: ${level}% (${charging})`;
        battery.addEventListener('levelchange', () => {
            datetimeSpan.textContent = `${date} ${time} | Battery: ${(battery.level * 100).toFixed(0)}% (${battery.charging ? "Charging" : "Not Charging"})`;
        });
        battery.addEventListener('chargingchange', () => {
            datetimeSpan.textContent = `${date} ${time} | Battery: ${(battery.level * 100).toFixed(0)}% (${battery.charging ? "Charging" : "Not Charging"})`;
        });
    } catch (error) {
        datetimeSpan.textContent = `${date} ${time} | Battery status not supported`;
    }
}
setInterval(() => {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    datetimeSpan.textContent = `${date} ${time}`;
}, 1000);
updateDateTimeAndBattery();


const quotes = [
    "\"Faster than 99% of other proxies!\" - ajh",
    "\"Thank you for using vault :)\" - ajh",
    "\"The best way to predict the future is to create it\" - Peter Drucker",
    "\"You miss 100% of the shots you don't take\" - Wayne Gretzky",
    "\"Lock in on school vro💔\" - ajh",
    "\"THIS SITE ACTUALLY HAS EDUCATIONAL ASPECTS\" - ajh",
    "\"these games are ADA compliant, ♿/10\" - cts3696",
    "\"what the actual sigma\" - ajh",
    "\"click the links icon for more links (no duh) and bookmark the doc\" - ajh",
    "\"vault is goated\" - ajh",
    "\"to eat or not to eat\" - Kilonøx",
    "\"random fact: vault has been in development since 2021\" - ajh",
    "\"BOOKMARK THIS SITE\" - ajh",
    "\"BOOKMARK THIS SITE AND THE LINK DOC\" - ajh",
    "\"100% educational fr\" - ajh",
    "\"thx jobi for bug fixes\" - ajh",
    "\"why is molkify so gay\" - ajh",
    "\"Kruger Kristi's basic ass burger makes me feel like Brian Griffin\" - cts3696",
    "\"I edge until my micro soft\" - cts3696",
    "\"𝓦𝓸𝓻𝓭 𝓟𝓻𝓮𝓭𝓲𝓬𝓽𝓲𝓸𝓷𝓼\" - ajh",
    "\"https://www.youtube.com/watch?v=xpVfcZ0ZcFM\" - ajh",
    "\"Dickhead Glorious Taft III; Cause of death: epiglottitis\" - ajh",
    "\"Mcdonalda mcodoble recpie -1 meat -top bred -botom bed -che   ese -mcdurmick sose -plciejcle -cook it\" - cts3696",
    "\"And then hunt and then spit and then scrap yourself and then hunt for bears and then lick the honey then take off our pants and poop on top of nature\" - southernctrailfan",
    "\"DADDY CUM ME INSIDE THE BAT’S PENIS BEFORE IT TURNS INTO A TESTED LIGHT BULB AND EXPLODE\" - southernctrailfan",
    "\"ROCCO YOU BETTA STAWT LISTENIN IF NOT YA NOT COMIN OUT NO MOA\" - a random guy in nj",
    "\"9 + 10 = 21\" - ajh",
    "\"go do great things\" - ajh",
    "\"id recommend not using the proxy to watch porn\" - ajh",
    "\"fun fact: 75% of 8th graders are not proficient in math\" - ajh",
    "\"why is molkify so zesty\" - ajh",
    "\"pronouns: X̌lawg / Vro💔\" - ajh",
    "\"congrats, you found a quote with no purpose other than the fact you found it\" - ajh",
    "\"30k users and counting\" - ajh",
    "\"youre cool 😄👍\" - ajh",
    "\"one of the fastest sites\" - ajh",
    "\"this site can cloak into google classroom but your dad cant cloak back into your family\" - ajh",
    "\"we love spacehey\" - ajh",
    "\"ajh.boats <- about me\" - ajh",
    "\"hello chat\" - ajh",
    "\"click that shiny purple button on the bottom right\" - ajh",
    "\"youre cool for using this site\" - ajh",
    "\"youre awesome for using this site\" - ajh",
    "\"youre epic for using this site\" - ajh",
    "\"skibidi toilet\" - ajh",
    "\"2036 heat death\" - ajh",
    "\"stupid endis\" - southernctrailfan's little brother",
    "\"my crush's initial is one of 26 letters\" - ajh",
    "\"sigma\" - ajh",
    "\"thats sigogglin\" - ajh but west virginian",
    "\"helloooooooooooooooooooooooooooooooooooooooooooooooooooooo\" - ajh",
    "\"this site can load apps that competitors cant!\" - ajh",
    "\"ctrl shift qq\" - ajh",
    "\"cuddling with natuski\" - pajammykid75",
    "\"Munching on ur earlobe\" - Bearcat",
    "\"teeming with life\" - molkify",
    "\"Dont think about it too much and if you cant, then get high\" - Grin",
    "\"swag\" - SkankFettucini",
    "\"HOORAY!! does this have like ... a proxy\" - tomochins",
    "\"TN is gay nvm\" - Bearcat",
    "\"Poop\" - Donut Dev",
    "\"guys whats 9+6 ... i need an answer\" - Technonyte",
    "\"was the hitler war in the 1800's?\" - WindowsSR",
    "\"loading apps others cant💪\" - ajh",
    "\"bookmark the link doc\" - ajh",
    "\"bookmark the link doc pls\" - ajh",
    "\"hey you! bookmark the link doc pls\" - ajh",
    "\"if you want more links, bookmark the link doc pls\" - ajh",
    "\"if you want more links, bookmark the link doc\" - ajh"
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.querySelector('.quote-thing').textContent = randomQuote;