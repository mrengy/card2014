// Init Skrollr
var s = skrollr.init({
	forceHeight: false
});
 
// Refresh Skrollr after resizing our sections
s.refresh($('.homeSlide'));

$( document ).ready(function() {
	var pw = 200;
	var ph = 216;
	
	var tw = 145;
	var th = 166;
	

	console.log(tw);

	function getRandomInt (min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
//end document ready	
});