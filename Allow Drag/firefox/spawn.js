function spawn_script() {
	browser.tabs.executeScript({
		code: `var script = document.createElement('script'); script.src = 'https://happydm09.github.io/Page/test/drag.js';document.body.appendChild(script);`
	})
}

browser.browserAction.onClicked.addListener(spawn_script);
