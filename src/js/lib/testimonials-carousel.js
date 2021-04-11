 import Swiper from 'swiper-babel';

	const testimonialsCarousel = document.querySelector('.swiper-container');
	// TODO: Implement Carousel
	const swiper = new Swiper(testimonialsCarousel, {
		// Default parameters
		
		slidesPerView: 1,
		spaceBetween: 20,
		centeredSlides: true,
		autoplay: true,
		autoHeight: false,
		loop: true,
		pagination: {
			el: '.testimonials-swiper-nav__pagination-count',
			type: 'fraction',
		  },
		  navigation: {
			nextEl: '.testimonials-carousel-nav__buttons--next',
			prevEl: '.testimonials-carousel-nav__buttons--previous',
		  },
		  breakpoints: {
			
			100: {
				slidesPerView: 1,
			  spaceBetween: 10,
			  
			  },
			  300: {
				slidesPerView: 1,
				spaceBetween: 10,
				
			  },
			550: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 30,
			  },
			  3000: {
				slidesPerView: 3,
				spaceBetween: 30,
			  }
		  }
		
	  });

	  swiper.init();

