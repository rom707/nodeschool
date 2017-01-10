function getShortMessages(messages) {
	return messages.filter( (el) => {
		return el['message'].length < 50
	}).map( (el) => {
		return el['message'];
	});
}

module.exports = getShortMessages