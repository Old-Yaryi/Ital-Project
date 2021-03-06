$(document).ready(function(){

  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
});

$(document).ready(function(){

  $('.slider-feedback ul').bxSlider({
		pager: false,
		controls: true,
		auto: false,
		pause: 10000,
		minSlides: 2,
		maxSlides: 3,
		slideMargin: 140,   
		slideWidth: 560
	});
});

$(document).ready(function(){

  $('#aics-autostart').anyImageComparisonSlider({
    initialPosition: 0.5,
    autoAnimation: true,
    autoAnimationSpeed: 5,
    cursor: 'none',
    dividingLine: 'solid 3px rgba(255, 255, 255, 1)'
  });
});
