$(document).ready(function() {
	"use strict";
	//===============Mobile nav Function============
	var toggle_btn = $('#menu');
	var nav = $('.navigation');
	toggle_btn.on('click', function() {
		if ($(window).width() <= 767) {
			nav.slideToggle('normal');
		}
		return false;
	});
	//===============Mobile Sub nav Function============
	var nav_link = $('.navigation>ul> li >a');
	var subNav = $('.navigation>ul> li> ul');
	nav_link.on('click', function() {
		if ($(window).width() <= 767) {
			subNav.slideToggle('normal');
		}
	});

	// header_fixed
	var headertopoption = $(window);
	var headTop = $('#header');

	headertopoption.on('scroll', function() {
		if (headertopoption.scrollTop() > 10) {
			headTop.addClass('menu-bg');
		} else {
			headTop.removeClass('menu-bg');
		}
	});

	// active_add_class
	var domain_btn = $('.domain-name .domain-host');
	domain_btn.on('click', function() {
		$(this).toggleClass('active');
	});

	//=============Window Height Function=============
	var bodyheight = $(window).height();
	var header_h = $(".header").height();
	var window_hieght = $(".window_hieght");
	window_hieght.height(bodyheight - header_h);
	$(window).on('resize', function() {
		var header_h = $(".header").height();
		var bodyheight = $(window).height();
		window_hieght.height(bodyheight - header_h);
	});

	//=============Tab Function=============
	var btn_year = $('.btn_year')
	var btn_monthly = $('.btn_monthly')
	var second_tab = $('.second-tab')
	var first_tab = $('.first-tab')
	btn_monthly.on('click', function() {
		first_tab.addClass('active');
		second_tab.removeClass('active');
        btn_year.removeClass('active');
		$(this).addClass('active');
	});

	btn_year.on('click', function() {
		first_tab.removeClass('active');
		second_tab.addClass('active');
		btn_monthly.removeClass('active');
		$(this).addClass('active');

	});

	
	//animate wow
	new WOW().init();
	/*----------------------------------------------
	 ----------- Loader Function  --------------------
	 -------------------------------------------------*/
	var preloader = $("#preloader");
	preloader.delay(500).fadeOut();

	// owl_carousel
	//	Releted Project slider
	var servi_carousel = $("#servi-carousel");
	servi_carousel.owlCarousel({
		loop : true,
		nav : true,
		dots : false,
		margin : 30,
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 2
			},
			992 : {
				items : 3
			},
			1200 : {
				items : 3
			}
		},
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"]

	});

	// End
		/*-----------------------------------------------
	 -----------  style-switcher  --------------------
	 -------------------------------------------------*/
	 $("body").append('<div id="style-switcher"></div>');
	 $("#style-switcher").load("theme-option/swicher.html");
});
