function spawn_script() {
  chrome.tabs.executeScript({
    code: `var script = document.createElement('script');
    script.src = 'https://happydm09.github.io/Page/test/drag.js';
    document.body.appendChild(script);`
  });
}

chrome.browserAction.onClicked.addListener(spawn_script);
