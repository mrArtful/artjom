import { createLogItem } from "./logItem.js";

// ====== LIVE CLOCK ======
const clockEl = document.getElementById("clock");

setInterval(() => {
  clockEl.textContent = moment().format("HH:mm:ss");
}, 1000);


// ====== LOGGING ======
const logBtn = document.getElementById("logTimeBtn");
const clearBtn = document.getElementById("clearLogBtn");
const logList = document.getElementById("logList");

logBtn.addEventListener("click", () => {
  const time = moment().format("HH:mm:ss");
  const date = moment().format("YYYY-MM-DD");

  const li = createLogItem(time, date);
  logList.appendChild(li);
});

clearBtn.addEventListener("click", () => {
  logList.innerHTML = "";
});