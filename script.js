function copyCode() {
	const codeBox = document.getElementById('codeBox');
	const codeToCopy = codeBox.querySelector('code');

	const textarea = document.createElement('textarea');
	textarea.value = codeToCopy.innerText;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);

	const notificationContainer = document.getElementById('notificationContainer');
	const notification = document.createElement('div');
	notification.classList.add('notification');
	notification.textContent = 'Code copied to clipboard!';
	notificationContainer.appendChild(notification);
	setTimeout(function() {
		notificationContainer.removeChild(notification);
	}, 3000);
}

var columnToDisplay = "content";

function jsonColumnToParagraph(jsonData, columnToDisplay) {
	var htmlContent = jsonData[columnToDisplay];
	return htmlContent;
}

function escapeHtml(str) {
	var div = document.createElement('div');
	div.appendChild(document.createTextNode(str));
	return div.innerHTML;
}

fetch('lib.json')
	.then(response => response.json())
		.then(data => {
			var paragraphElement = document.getElementById("scriptcontent");
			paragraphElement.innerHTML = escapeHtml(jsonColumnToParagraph(data, columnToDisplay));
		})
		.catch(error => console.error('Error fetching JSON:', error));