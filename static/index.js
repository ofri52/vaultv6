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
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});

const datetimeSpan = document.querySelector('.datetime');

// Function to update date, time, and battery
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

        // Listen for battery level or charging status changes
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

// Initialize updates
setInterval(() => {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    datetimeSpan.textContent = `${date} ${time}`;
}, 1000); // Update time every second

updateDateTimeAndBattery(); // Fetch date, time, and battery