chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "librarySearch",
    title: "CU_Library",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "librarySearch" && info.selectionText) {
    const searchTerm = encodeURIComponent(info.selectionText);
    const searchUrl = `https://clio.columbia.edu/quicksearch?q=${searchTerm}&commit=Search#gsc.tab=0&gsc.q=${searchTerm}&gsc.page=1`;
    chrome.tabs.create({ url: searchUrl });
  }
});
