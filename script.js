function convert() {
	var celsius = parseFloat(document.getElementById("celsius").value);
	var fahrenheit = (celsius * 9/5) + 32;
	document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
}
