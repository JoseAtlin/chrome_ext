chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	if (message.txt === 'run') {
		var selectedText = ""
		if (window.getSelection)
			selectedText = window.getSelection().toString()
			
		if (selectedText.length > 0) {
			console.log(selectedText)
			document.execCommand("copy");
		}
	}
}