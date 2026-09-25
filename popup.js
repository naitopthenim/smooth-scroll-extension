const DEFAULTS = { enabled: true, smoothScroll: true };

const enabledEl = document.getElementById("enabled");
const scrollEl = document.getElementById("smoothScroll");
const scrollRow = document.getElementById("scroll-row");
const scrollSub = document.getElementById("scroll-sub");
const statusDot = document.getElementById("status-dot");
const statusText = document.getElementById("status-text");

document.getElementById("version").textContent = "v" + chrome.runtime.getManifest().version;

let siteInfo = null; // { host, supported, hasScroll } once the content script answers

function paint(settings) {
  enabledEl.checked = settings.enabled;
  scrollEl.checked = settings.smoothScroll;
  scrollRow.classList.toggle("disabled", !settings.enabled);
  paintStatus(settings);
}

function paintStatus(settings) {
  if (!settings.enabled) {
    statusDot.className = "dot off";
    statusText.textContent = "Extension is off on every site";
    return;
  }
  if (!siteInfo) {
    statusDot.className = "dot";
    statusText.textContent = "This site is not in the supported list";
    return;
  }
  if (!siteInfo.supported) {
    statusDot.className = "dot";
    statusText.textContent = siteInfo.host + " — not supported";
    return;
  }
  statusDot.className = "dot on";
  statusText.textContent = "Active on " + siteInfo.host;
  if (!siteInfo.hasScroll) {
    scrollSub.textContent = "This site doesn't use smooth scroll";
  }
}

chrome.storage.sync.get(DEFAULTS, paint);

// Ask the content script what it's doing on the current tab.
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];
  if (!tab?.id) return;
  chrome.tabs.sendMessage(tab.id, { type: "getSiteInfo" }, (res) => {
    // No listener on this page (chrome:// pages, unsupported sites) — ignore.
    if (chrome.runtime.lastError || !res) return;
    siteInfo = res;
    chrome.storage.sync.get(DEFAULTS, paintStatus);
  });
});

enabledEl.addEventListener("change", () => {
  const enabled = enabledEl.checked;
  chrome.storage.sync.set({ enabled }, () => {
    scrollRow.classList.toggle("disabled", !enabled);
    chrome.storage.sync.get(DEFAULTS, paintStatus);
    // Site fixes remove elements, which can't be undone in place — reload.
    chrome.tabs.reload();
  });
});

scrollEl.addEventListener("change", () => {
  chrome.storage.sync.set({ smoothScroll: scrollEl.checked });
});
