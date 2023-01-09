//listen to any updates in the tab system
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    if (tab.url && tab.url.includes("twitter.com")) {
      console.log("The tab with ID " + tabId + " was refreshed.");

      //Tweet ID
      const tweetId = tab.url.split("/")[5];
      console.log(`tweetID is: ${tweetId}`);

      //sender
      let msg ={ txt: tweetId }
      chrome.tabs.sendMessage(tabId, msg);
    }
  }
});

//FastAPI intigration