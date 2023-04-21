browser.webNavigation.onCompleted.addListener(function(details) {
    browser.tabs.executeScript(details.tabId, {
        code: `var script = document.createElement('script'); script.src = 'https://happydm09.github.io/Page/test/dark.js';document.body.appendChild(script);`
    });
});
