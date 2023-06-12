// Execute code when the extension is installed or updated
chrome.runtime.onInstalled.addListener(function () {
  // Your installation/update logic goes here
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Your message handling logic goes here
});
