$(document).ready(function () {
	$('.topics-carousel').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3200,
		mobileFirst: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 2500,
				settings: {
					slidesToShow: 5,
				},
			},
		],
	})
})
