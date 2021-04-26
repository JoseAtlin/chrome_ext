chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	if (message.txt === 'run') {
		var selectedText = ""
		if (window.getSelection)
			selectedText = window.getSelection().toString()
			
		if (selectedText.length > 0) {
			console.log(selectedText)
			document.execCommand("copy");
			text = "Generating the Sign Language for the selected text This will take a few seconds";
			sendAlert(text);
		} else {
			text = "Ooops...  You have not selected any text"
			sendAlert(text);
		}
	}
}

function fade(el, speed) {
    var timer;
    if (el.style) {
        el.style.opacity = '1';
    }
    timer = setInterval(function() {
            el.style.opacity = parseFloat(el.style.opacity) - .02;
            if (el.style.opacity <= 0) {
                clearInterval(timer);
                document.body.removeChild(el);
            }
        },
        speed);
}

function sendAlert(text) {
	var el;

	el = document.createElement('div');
	el.style.fontFamily = 'Helvetica, sans-serif';
	el.style.fontStyle = 'normal';
	el.style.fontWeight = 'normal';
	el.style.boxShadow = '0px 0px 16px 0px #CBCBCB';
	el.style.border = '1px solid #D9D900';
	el.style.zIndex = '100000001';
	el.style.textAlign = 'center';
	el.style.color = '#444444';
	el.style.backgroundColor = '#FFFF5C';
	el.style.position = 'fixed';
	el.style.borderRadius = '.25em';
	el.innerHTML = text;
	el.style.boxSizing = 'content-box';
	el.style.height = '2em';
	el.style.lineHeight = '2em';
	el.style.width = '7em';
	el.style.padding = '0px';
	el.style.margin = '0px';

	el.style.top = '25px';
	el.style.left = '25px';

	document.body.appendChild(el);
	duration = 750;

	setTimeout(function() {
		fade(el, 5);
	}, duration);
}
