// 创建右键菜单（安装或浏览器更新/启用时触发）
chrome.runtime.onInstalled.addListener(() => {
  // 先清理同名项，防重复（可选）
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "EDU_Library",
      title: "EDU_Library",
      contexts: ["selection"]
    });
  });
});

// 处理点击
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "EDU_Library" && info.selectionText) {
    const encoded = encodeURIComponent(info.selectionText);
    const url =
      "https://julac-eduhk.primo.exlibrisgroup.com/discovery/search" +
      "?vid=852JULAC_EDUHK:EDUHK&bulkSize=20&mode=" +
      "&query=any,contains," + encoded +
      "&search_scope=MyInst_and_CI";
    chrome.tabs.create({ url });
  }
});
