async function f() {
	// Wait 15 sec, click the "All In" button, then click the "Red" button.
	await new Promise(r => setTimeout(r, 15000));
	document.getElementById("interval10").click();
	document.getElementById("player1").click();
}
oldup = updateState; // need to keep the old func around
updateState = function() {
	f();
	return oldup();
}
