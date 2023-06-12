// Execute code when the extension is installed or updated
chrome.runtime.onInstalled.addListener(function () {
  // Your installation/update logic goes here
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {
  // if (message.action === 'fetch-data') {
  //   const { prUrl } = message.payload;
  //   const apiUrl = 'https://better-pr-be.deno.dev/';
  //   try {
  //     const response = await navigator.serviceWorker.ready.then(async swReg => {
  //       swReg.backgroundFetch.fetch({
  //         url: apiUrl,
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: { prUrl }
  //       });
  //     });
  //     const data = await response.json();
  //     console.log('API Request Success:', data);
  //     chrome.runtime.sendMessage({ action: 'return-data', payload: data });
  //   } catch (error) {
  //     console.error('API Request Failed:', error);
  //   }
  // }
});
