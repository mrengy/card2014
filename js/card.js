// Init Skrollr
var s = skrollr.init({
	forceHeight: false
});
 
// Refresh Skrollr after resizing our sections
s.refresh($('.homeSlide'));

$( document ).ready(function() {
	//polyhedron dimensions
	var pw = 200;
	var ph = 216;

	//triangle dimensions
	var tw = 145;
	var th = 166;
	
	var insertion = '';

	function getRandomInt (min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function drawShape(shape, margin, width){
		return '<p id="'+shape+'" style="margin-left: '+margin+'%;"> <img src="img/'+shape+'.png" width="'+width+'" /> </p>';
	}

	function insertShapes(){
		if(getRandomInt(0,1) == 1){
		insertion += drawShape('polyhedron', getRandomInt(0,100), getRandomInt(0,100)/100*pw);
	}
	if(getRandomInt(0,1) == 1){
		insertion += drawShape('triangle', getRandomInt(0,100), getRandomInt(0,100)/100*tw);
	}

	if(getRandomInt(0,1) == 1){
		insertion += drawShape('polyhedron', getRandomInt(0,100), getRandomInt(0,100)/100*pw);
	}
	if(getRandomInt(0,1) == 1){
		insertion += drawShape('triangle', getRandomInt(0,100), getRandomInt(0,100)/100*tw);
	}
	
	if(getRandomInt(0,1) == 1){
		insertion += drawShape('polyhedron', getRandomInt(0,100), getRandomInt(0,100)/100*pw);
	}
	if(getRandomInt(0,1) == 1){
		insertion += drawShape('triangle', getRandomInt(0,100), getRandomInt(0,100)/100*tw);
	}
	
	if(getRandomInt(0,1) == 1){
		insertion += drawShape('polyhedron', getRandomInt(0,100), getRandomInt(0,100)/100*pw);
	}
	if(getRandomInt(0,1) == 1){
		insertion += drawShape('triangle', getRandomInt(0,100), getRandomInt(0,100)/100*tw);
	}

	if(getRandomInt(0,1) == 1){
		insertion += drawShape('polyhedron', getRandomInt(0,100), getRandomInt(0,100)/100*pw);
	}
	if(getRandomInt(0,1) == 1){
		insertion += drawShape('triangle', getRandomInt(0,100), getRandomInt(0,100)/100*tw);
	}

	if(getRandomInt(0,1) == 1){
		insertion += drawShape('polyhedron', getRandomInt(0,100), getRandomInt(0,100)/100*pw);
	}
	if(getRandomInt(0,1) == 1){
		insertion += drawShape('triangle', getRandomInt(0,100), getRandomInt(0,100)/100*tw);
	}

	if(getRandomInt(0,1) == 1){
		insertion += drawShape('polyhedron', getRandomInt(0,100), getRandomInt(0,100)/100*pw);
	}
	if(getRandomInt(0,1) == 1){
		insertion += drawShape('triangle', getRandomInt(0,100), getRandomInt(0,100)/100*tw);
	}

	if(getRandomInt(0,1) == 1){
		insertion += drawShape('polyhedron', getRandomInt(0,100), getRandomInt(0,100)/100*pw);
	}
	if(getRandomInt(0,1) == 1){
		insertion += drawShape('triangle', getRandomInt(0,100), getRandomInt(0,100)/100*tw);
	}

	$('#shapes div').html(insertion);

	insertion = '';
	}

	insertShapes();
	
/*
  <p id="polyhedron" style="margin-left: 20%;">
    <img src="img/polyhedron.png" />
  </p>
  <p id="triangle">
    <img src="img/triangle.png" />
  </p>
  <p id="credit">
    inspired by 
    <a href="http://en.wikipedia.org/wiki/M._C._Escher">
      <img src="img/head.png" />
    </a>
  </p>
 */
//end document ready	
});