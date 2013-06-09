/**
 * Create a context menu which will only show up for images.
 */
chrome.contextMenus.create({
	"title" : "Get Content",
	"type" : "normal",
	"contexts" : ["all"],
	"id" : "main"
});

chrome.contextMenus.create({
	"title" : "Selected", 
	"parentId" : "main",
	"contexts" : ["all"],
	"id" : "selected"
});

chrome.contextMenus.create({
	"title" : "Pure Text", 
	"parentId" : "selected",
	"contexts" : ["all"],
	"onclick" : getClickHandler(1)
});

chrome.contextMenus.create({
	"title" : "HTML Text", 
	"parentId" : "selected",
	"contexts" : ["all"],
	"onclick" : getClickHandler(2)
});

chrome.contextMenus.create({
	"title" : "URL", 
	"parentId" : "main",
	"contexts" : ["all"],
	"onclick" : getClickHandler(3)
});
/*
chrome.contextMenus.create({
	"title" : "All", 
	"parentId" : "main",
	"contexts" : ["all"],
	"onclick" : getClickHandler()
});
*/

/**
 * Returns a handler which will open a new window when activated.
 */
function getClickHandler(type) {
	return function(info, tab) {
		//alert(info.menuItemId+":"+info.parentMenuItemId+":"+info.mediaType+":"+info.linkUrl+":"+info.srcUrl+":"+info.pageUrl+":"+info.frameUrl+":"+info.selectionText);
		chrome.tabs.sendRequest(tab.id, {name: "COPY_MESSAGE", type: type});
	};
};