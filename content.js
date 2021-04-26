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

	// font
	el.style.fontFamily = 'sans-serif';
	el.style.fontSize = '100%';
	el.style.fontStyle = 'normal';
	el.style.fontWeight = 'normal';

	// text
	el.innerHTML = text;
	el.style.boxSizing = 'content-box';
	el.style.border = '1px solid #D9D900';
	el.style.borderRadius = '.25em';
	el.style.textAlign = 'center';
	el.style.color = '#444444';
	el.style.backgroundColor = '#FFFF5C';
	el.style.position = 'fixed';
	
	el.style.display = 'flex';
	el.style.justifyContent = 'center';
	el.style.alignItems = 'center';

    el.style.top = "55%";
    el.style.left = "55%";
    el.style.width = "30em";
    el.style.height = "10em";
	el.style.marginTop = '-9em';
    el.style.marginLeft = '-15em';

	// el.style.padding = '50px';
	// el.style.height = '2em';
	// el.style.lineHeight = '2em';
	// el.style.width = '7em';
	// el.style.margin = '50px';


	document.body.appendChild(el);
	duration = 750;

	setTimeout(function() {
		fade(el, 5);
	}, duration);
}
