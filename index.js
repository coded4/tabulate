module.exports =function tabulate(tabString) {
	var tableStart = '<tr><td>';
	tabString.replace(/(§)/gm, '</td><td>').replace(/(\n)/gm, '</td></tr><tr><td>');
	return tableStart.concat(tabString)
}