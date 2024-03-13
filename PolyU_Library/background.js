chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "librarySearch",
    title: "Search in PolyU Library",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "librarySearch" && info.selectionText) {
    const searchTerm = encodeURIComponent(info.selectionText);
    // 更新此处的URL为香港理工大学图书馆的搜索URL
    const searchUrl = `https://julac-hkpu.primo.exlibrisgroup.com/discovery/search?vid=852JULAC_HKPU:HKPU&query=any,contains,${searchTerm}&offset=0&tab=All&search_scope=MyInst_and_CI&hkpu_query=${searchTerm}`;
    chrome.tabs.create({ url: searchUrl });
  }
});
