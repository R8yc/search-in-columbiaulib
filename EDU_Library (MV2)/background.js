chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "EDU_Library") {
        var selectedText = info.selectionText;
        var encodedText = encodeURIComponent(selectedText);
        var searchUrl = "https://julac-eduhk.primo.exlibrisgroup.com/discovery/search?vid=852JULAC_EDUHK:EDUHK&bulkSize=20&mode=&query=any,contains," + encodedText + "&search_scope=MyInst_and_CI";
        chrome.tabs.create({ url: searchUrl });
    }
});

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "id": "EDU_Library",
        "title": "EDU_Library",
        "contexts": ["selection"]
    });
});
