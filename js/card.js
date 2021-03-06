$( document ).ready(function() {
	//polyhedron dimensions
	var pw = 200;
	var ph = 216;

	//triangle dimensions
	var tw = 145;
	var th = 166;
	
	var insertion = '';
	var repeater = $('.repeat').parent().html();

	function getRandomInt (min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function drawShape(shape, margin, width){
		return '<p id="'+shape+'" style="margin-left: '+margin+'%;"> <img src="img/'+shape+'.png" width="'+width+'" /> </p>';
	}

	function insertShapes(number){
		for(i = 0; i<number; i++){
			if(getRandomInt(0,1) == 1){
				insertion += drawShape('polyhedron', getRandomInt(0,100), getRandomInt(0,100)/100*pw);
			} else{
				insertion += drawShape('triangle', getRandomInt(0,100), getRandomInt(0,100)/100*tw);
			}
		}
		$('.shapes:last div').html(insertion);

		//resets insertion string
		insertion = '';
	}

	//initial randomness
	//insertShapes(8);


	//parallax scrolling
		
		//only if touch events are NOT detected
		if (!Modernizr.touch) {  
			// Init Skrollr
			var s = skrollr.init({
				forceHeight: false
			});
		 
			// Refresh Skrollr after resizing our sections
			s.refresh($('.homeSlide'));
		}

		

	$(window).scroll(function() {
   		if($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
			//add repeated section
			$('.repeat:last-of-type').parent().append(repeater);

			//record Google Analytics Event
			ga('send', 'event', 'end', 'scroll', 'infinity', 1);

			//insertShapes(8);
       		
       		//only if touch events are NOT detected
			if (!Modernizr.touch) {  
	       		// Refresh Skrollr after resizing our sections
				s.refresh($('.homeSlide'));
			}
	   }
	});

	$('a#hand-link').click(function(){
		ga('send', 'event', 'link', 'click', 'hand', 1);
	});

//end document ready	
});