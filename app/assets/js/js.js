jQuery(document).ready(function ($) {
  $('.coolbg').stellar({
    responsive: true,
    scrollProperty: 'transform'
  });
  var links = $('.navigation').find('li');
  slide = $('.slide');
  button = $('.button');
  logo = $('#logo > a');
  mywindow = $(window);
  htmlbody = $('html,body');
  var food = $('.menu_nav').find('li');
  
 /*$('#content-slider-1').royalSlider({
      autoHeight: false,
      arrowsNav: false,
      fadeinLoadedSlide: true,
      controlNavigationSpacing: 0,
      controlNavigation: 'tabs',
      imageScaleMode: 'none',
      imageAlignCenter:false,
      loop: true,
      loopRewind: true,
      keyboardNavEnabled: true,
      usePreloader: false,
      deeplinking: {
          		// deep linking options go gere
          		enabled: true,
          		prefix: 'menu-'
          	},
      startSlideId: 2

    var slider = $('#content-slider-1');
        slider.prepend(slider.find('.rsNav'));

    var inner = $('.inner'),
        ht = inner.height();

    inner.css({'position':'relative','top':'50%','margin':-ht/2+'px 0 0 0'});*/
	

   /* Food Menu */
  if (mywindow.scrollTop() > 1) {
    $(".menu_nav").removeClass("hidden");
    $(".menu_nav").addClass("animated fadeInUp");
  }
  /* Nav Menu */
	if (mywindow.scrollTop() < 1) {
		$('.navigation li[data-slide="1"]').removeClass('active');
	}

  slide.waypoint(function (event, direction) {
      dataslide = $(this).attr('data-slide');
      if (direction === 'down') {
          $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
		
		$('.navigation li[data-slide="1"]').removeClass('active');
      }
      else {
          $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
      }
  });

  mywindow.scroll(function () {
      if (mywindow.scrollTop() == 0) {
          $('.navigation li[data-slide="1"]').removeClass('active');
          $('.navigation li[data-slide="2"]').removeClass('active');
      }
  });

  function goToByScroll(dataslide) {
      htmlbody.animate({
          scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top + 4
      }, 2000, 'easeInOutQuint');
  }
	
	function goToByScroll(dataslide) {
		var goal = $('.slide[data-slide="' + dataslide + '"]').offset().top;
		if (mywindow.scrollTop()<goal) {
		 var goalPx = goal + 1;
		} else {
			var goalPx = goal - 1;
		}
        htmlbody.animate({
            scrollTop: goalPx
        }, 2000, 'easeInOutQuint');
    }

    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
    logo.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
	
    food.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
	//prettyPhoto
	$("a[rel^='prettyPhoto']").prettyPhoto();

// Sticky Navigation	
	$(".menu").sticky({topSpacing:0});
  $(".menu_nav").sticky({topSpacing:76});
  $("#slide1, #slide3, #slide5, #slide7").each(function () {
    var slide_h = $(this).height();
  	$(this).css('background-size', '100% '+slide_h+'px');
  });
    // Please note that autoHeight option has some conflicts with options like imageScaleMode, imageAlignCenter and autoScaleSlider
    // it's recommended to disable them when using autoHeight module

});















