// Init Skrollr
var s = skrollr.init({
	forceHeight: false
});
 
// Refresh Skrollr after resizing our sections
s.refresh($('.homeSlide'));

$( document ).ready(function() {
	var polyhedron = new Image();
	polyhedron.src = 'img/polyhedron.png';
	var pw;
	var ph;
	//set natural width and natural height once the image is loaded
	if (polyhedron.addEventListener){
		polyhedron.addEventListener('load', function(){
			pw = polyhedron.naturalWidth;
			ph = polyhedron.naturalHeight;
		}, false);
	} else if (polyhedron.attachEvent){
		polyhedron.attachEvent('onload', function(){
			pw = polyhedron.naturalWidth;
			ph = polyhedron.naturalHeight;
		});
	}

	var triangle = new Image();
	triangle.src = 'img/triangle.png';
	var tw;
	var th;
	//set natural width and natural height once the image is loaded
	if (triangle.addEventListener){
		triangle.addEventListener('load', function(){
			tw = triangle.naturalWidth;
			th = triangle.naturalHeight;
		}, false);
	} else if (triangle.attachEvent){
		triangle.attachEvent('onload', function(){
			tw = triangle.naturalWidth;
			th = triangle.naturalHeight;
		});
	}

	console.log(tw);

	function getRandomInt (min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
//end document ready	
});