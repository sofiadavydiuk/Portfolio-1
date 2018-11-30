$(function() {

	//header_carousel:
	$(".header_carousel").owlCarousel({
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed:1000,
		loop:true,
		dots:false,
		autoWidth:true,
		margin: 35,
		nav:true,
		navText:[
		"<i class='fa fa-angle-double-left' aria-hidden='true'></i>",
		"<i class='fa fa-angle-double-right' aria-hidden='true'></i>"],
		items:3
	});

	//function for paginator fadeIn/fadeOut:
	function pageFade(parent_selector){
		$(parent_selector + " .article").click(function(event){
			event.preventDefault();
			var check = this.classList.contains("active"); // check whether user has clicked on active article
			if(!check){
				var href = $(this).attr("href");
				href = "." + href.slice(1); // replacing "#" with "." to get correct ClassName
				$(parent_selector + " .article").removeClass('active');
				$(this).addClass('active');
				$(parent_selector + " .inner.active").css({"opacity":0}).removeClass("active").css({'visibility':"hidden"});
				setTimeout(function(){
					$(parent_selector + " " + href).css({'visibility':"visible"}).css({'opacity':1}).addClass("active");
				},500);
			}
		});
	}

	pageFade("header .news_blog");
	pageFade(".s_find");
	pageFade(".poll");
	pageFade(".photos");
	pageFade(".videos");

	//Counters for section s_information:
	var options = {
		  useEasing : true, 
		  useGrouping : true, 
		  separator : ',', 
		  decimal : '.', 
		  prefix : '', 
		  suffix : '' 
	};

	$(".counter").each(function(){

		var that = this;
		var num = $(this).data('num');
		var demo = new CountUp(that, 0, num, 0, 5, options);
		demo.start();

	});

	//Magnific-popup for pop-up images:
	$('.find_car .cars_blog .car_img').magnificPopup({type:'image'});

	//Carousel of section "find":
	var activeSlideNum = 0;
	var activeControl = "", activeSlide = "";
	//Automatically toggle of slides:
	function automaticallySlide(){
		activeSlideNum++;
		if(activeSlideNum>3) activeSlideNum=1;
		activeDot = "dot_" + activeSlideNum;
		activeSlide = "slide_" + activeSlideNum;

		$(".find_carousel .slide").removeClass("active");
		$(".find_carousel ." + activeSlide).addClass("active");

		$(".find_carousel .dot").removeClass("active");
		$(".find_carousel ." + activeDot).addClass("active");
	}
	var sliderInterval = setInterval(automaticallySlide,4000);
	//Clicks on dots and controls of the slider:
	function sliderClick(){
		clearInterval(sliderInterval);
		sliderInterval = setInterval(automaticallySlide,4000);
		var slideNum = $(this).data("slide");
		activeSlideNum = slideNum;

		activeDot = "dot_" + slideNum;
		activeSlide = "slide_" + slideNum;

		$(".find_carousel .slide").removeClass("active");
		$(".find_carousel ." + activeSlide).addClass("active");

		$(".find_carousel .dot").removeClass("active");
		$(".find_carousel ." + activeDot).addClass("active");
	}
	$(".find_carousel .dot").click(sliderClick);
	$(".find_carousel .control").click(sliderClick);

	//gallery of the section s_features:
	$('.gallery-item').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});

	//video of the section s_features:
	$('.s_features .video').magnificPopup({
		items: {
			src: 'https://www.youtube.com/watch?v=aVS4W7GZSq0'
		},
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			'</div>', 
			patterns: {
				youtube: {
					index: 'youtube.com/', 
					id: 'v=', 
					src: '//www.youtube.com/embed/%id%?autoplay=1' 
				}
			},
			srcAction: 'iframe_src', 
		}
	});

	//Click on left squares for changing main color theme:
	$(".blue_square").click(function(){
		$(".red").removeClass("red").addClass("blue");
	});

	$(".red_square").click(function(){
		$(".blue").removeClass("blue").addClass("red");
	});

});

window.addEventListener("load", function(){
	//Preloader:
	$('body').addClass('loaded');
});