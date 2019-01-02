const input = document.getElementById('kw');
window.addEventListener('keypress', function(e){
	console.log(e.keyCode);
	if (e.keyCode === 9) {
		// Ctrl + i
		input.value = '';
		input.focus();
	} else if (e.keyCode === 10) {
		// Ctrl + m
		input.focus();
	}
})