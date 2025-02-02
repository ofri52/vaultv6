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
    "\"vault is goated\" - ajh"
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.querySelector('.quote-thing').textContent = randomQuote;


const uvPrefix = '/home/'
const ls = window.top.location.search;
const urlParams = new URLSearchParams(ls );
    
let urlToProxy = urlParams.get('url');
    
    
const xorEncode = {
        encode(str) {
            if (!str) return str;
            return encodeURIComponent(
                str
                    .toString()
                    .split('')
                    .map((char, ind) =>
                        ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char
                     )
                    .join('')
            );
        }
    };
    
let proxiedUrl = uvPrefix + ${xorEncode.encode(urlToProxy)};
document.getElementById('iframe').src = proxiedUrl;