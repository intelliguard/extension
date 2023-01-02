//listen to any updates in the tab system
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === "complete") {
      if (tab.url && tab.url.includes("twitter.com")) {
        console.log("The tab with ID " + tabId + " was refreshed.");

        //Tweet ID
        const tweetId = tab.url.split("/")[5];
        console.log(`tweetID is: ${tweetId}`);

        chrome.scripting.insertCSS({
          target: {tabId},
          files: ['css/modifyer.css']
        })
        //injectionScript
        chrome.scripting.executeScript({
          target: {tabId},
          files: ['modifyer.js'],

        });
      }
    }
  });

function sendtweetId(data) {
  chrome.runtime.sendMessage({ data: data});
}



