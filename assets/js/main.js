(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

	$('.info-bar').on('click', function () {
		$('.extra-info').addClass('info-open');
	})

	$('.close-icon').on('click', function () {
		$('.extra-info').removeClass('info-open');
	})


	// sticky
	var wind = $(window);
	var sticky = $('#sticky-header');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 100) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});


// mainSlider

function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function(e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: true,
		fade: true,
		arrows:false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function() {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function() {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


/* brand-active */
$('.brand-active').owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	autoplay: true,
	navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
	responsive: {
		0: {
			items: 2
		},
		576: {
			items: 3
		},
		768: {
			items: 3
		},
		992: {
			items: 4
		},
		1200: {
			items: 4
		}
	}
})

/* instagram-active */
$('.instagram-active').owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	autoplay: false,
	navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
	margin:0,
	responsive: {
		0: {
			items: 2
		},
		576: {
			items: 3
		},
		768: {
			items: 3
		},
		992: {
			items: 5
		},
		1200: {
			items: 6
		}
	}
})


/* product-active */
$('.product-active').owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	autoplay: true,
	navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
	responsive: {
		0: {
			items: 1
		},
		576: {
			items: 1
		},
		768: {
			items: 3
		},
		992: {
			items: 4
		},
		1200: {
			items: 4
		}
	}
})
/* testimonial-active */
$('.testimonial-active').owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	autoplay: true,
	navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
	responsive: {
		0: {
			items: 1
		},
		576: {
			items: 1
		},
		768: {
			items: 2
		},
		992: {
			items: 3
		},
		1200: {
			items: 3
		}
	}
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

// tooltip
$('[data-toggle="tooltip"]').tooltip()

// countdown
$('[data-countdown]').each(function () {
	var $this = $(this), finalDate = $(this).data('countdown');
	$this.countdown(finalDate, function (event) {
		$this.html(event.strftime('<div class="time-count">%D <span>days</span></div><div class="time-count">%H <span>hour</span></div><div class="time-count">%M <span>minute</span></div><div class="time-count">%S <span>Second</span></div>'));
	});
});

/* Price filter active */
if ($("#slider-range").length) {
	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 500,
		values: [75, 300],
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	$("#amount").val("$" + $("#slider-range").slider("values", 0) +
		" - $" + $("#slider-range").slider("values", 1));


	$('#filter-btn').on('click', function () {
		$('.filter-widget').slideToggle(1000);
	});

}

/*-------------------------
	showlogin toggle function
--------------------------*/
$('#showlogin').on('click', function () {
	$('#checkout-login').slideToggle(900);
});

/*-------------------------
	showcoupon toggle function
--------------------------*/
$('#showcoupon').on('click', function () {
	$('#checkout_coupon').slideToggle(900);
});

/*-------------------------
	Create an account toggle function
--------------------------*/
$('#cbox').on('click', function () {
	$('#cbox_info').slideToggle(900);
});

/*-------------------------
	Create an account toggle function
--------------------------*/
$('#ship-box').on('click', function () {
	$('#ship-box-info').slideToggle(1000);
});

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);