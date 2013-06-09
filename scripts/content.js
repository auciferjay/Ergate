// communication with the background page
chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		if( request.name == "COPY_MESSAGE" ) {
			switch( request.type ){
				case 1:
					contextMenuElementXPath.innerText;
					break;
				case 2:
					contextMenuElementXPath.innerHTML;
					break;
				case 3:
					document.location;
					break;
			}
			//var contextMenuElement = getElementsByXPath(document, contextMenuElementXPath)[0];
			
			
		}
	}
);

var contextMenuElementXPath = null;

var onContextMenu = function(event)
{
    contextMenuElementXPath = event.target;//getElementXPath(event.target);
};

var loadListeners = function()
{
    window.addEventListener("contextmenu", onContextMenu);
};

var getElementXPath = function(element)
{
    if (element && element.id)
        return '//*[@id="' + element.id + '"]';
    else
        return this.getElementTreeXPath(element);
};

var getElementTreeXPath = function(element)
{
    var paths = [];

    for (; element && element.nodeType == 1; element = element.parentNode)
    {
        var index = 0;
        var nodeName = element.nodeName;

        for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling)
        {
            if (sibling.nodeType != 1) continue;

            if (sibling.nodeName == nodeName)
                ++index;
        }

        var tagName = element.nodeName.toLowerCase();
        var pathIndex = (index ? "[" + (index+1) + "]" : "");
        paths.splice(0, 0, tagName + pathIndex);
    }

    return paths.length ? "/" + paths.join("/") : null;
};

var getElementsByXPath = function(doc, xpath)
{
    var nodes = [];

    try {
        var result = doc.evaluate(xpath, doc, null, XPathResult.ANY_TYPE, null);
        for (var item = result.iterateNext(); item; item = result.iterateNext())
            nodes.push(item);
    }
    catch (exc)
    {
        // Invalid xpath expressions make their way here sometimes.  If that happens,
        // we still want to return an empty set without an exception.
    }

    return nodes;
};

loadListeners();