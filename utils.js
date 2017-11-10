// utils library

console.log("utils.js loaded")

window.utils = {}
window.utils.randomInt = function (min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

window.utils.randomColor = function () {
	return `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`
	// return new THREE.Color(`rgb(${randint(0,255)}, ${randint(0,255)}, ${randint(0,255)})`)
}

Array.prototype.choose = function () {
	return this[Math.floor(Math.random()*this.length)]
}

window.utils.chooseColor = function () {
	var colors = [
		// "rgb(46, 0, 20)",
		"rgb(68, 34, 32)",
		"rgb(128, 152, 72)",
		"rgb(176, 202, 135)",
		"rgb(181, 222, 173)",
	]
	return colors.choose()
}
