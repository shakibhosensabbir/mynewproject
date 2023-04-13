/*----------------------------------------------
 Menu Responsive
----------------------------------------------*/

jQuery(function ($) {
    'use strict';
    function navResponsive() {
        let navbar = $('.navbar .items');
        let menu = $('#menu .items');
        menu.html('');
        navbar.clone().appendTo(menu);
        $('.menu .icon-arrow-right').removeClass('icon-arrow-right').addClass('icon-arrow-down');
    }

    navResponsive();
    $(window).on('resize', function () {
        navResponsive();
    })

    $('.menu .dropdown-menu').each(function() {
        var children = $(this).children('.dropdown').length;
        $(this).addClass('children-'+children);
    })
    
    $('.menu .nav-item.dropdown').each(function() {
        var children = $(this).children('.nav-link');
        children.addClass('prevent');
    })

    $(document).on('click', '#menu .nav-item .nav-link', function (event) {
        if($(this).hasClass('prevent')) {
            event.preventDefault();
        }
        var nav_link = $(this);
        nav_link.next().toggleClass('show');
        if(nav_link.hasClass('smooth-anchor')) {
            $('#menu').modal('hide');
        }
    })
})

/*----------------------------------------------
 Navigation
----------------------------------------------*/

jQuery(function ($) {
    'use strict';
    var position = $(window).scrollTop();
    var toTop = $('#scroll-to-top');
    toTop.hide();
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        let navbar = $('.navbar');
        if (!navbar.hasClass('relative')) {
            if (scroll > position) {
                if (window.screen.width >= 767) {
                    navbar.fadeOut('fast');
                } else {
                    navbar.addClass('navbar-sticky');
                }
                toTop.fadeOut('fast');
            } else {
                if (position < 76) {
                    navbar.slideDown('fast').removeClass('navbar-sticky');
                } else {
                    navbar.slideDown('fast').addClass('navbar-sticky');
                }

                if (position > 1023) {
                    if (window.screen.width >= 767) {
                        toTop.fadeIn('fast');
                    }
                } else {
                    toTop.fadeOut('fast');
                }
            }
            position = scroll;
        }
    })

    $(document).on('click', '.smooth-anchor', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    })

    $('.dropdown-menu').each(function () {
        let dropdown = $(this);
        dropdown.hover(function () {
            dropdown.parent().find('.nav-link').first().addClass('active');
        }, function () {
            //dropdown.parent().find('.nav-link').first().removeClass('active');
        })
    })
})

/*----------------------------------------------
 Slides
----------------------------------------------*/

jQuery(function ($) {
    'use strict';
    setTimeout(() => {
        $('.no-slider .left').addClass('init');
    }, 1200)

    var animation = (slider) => {
        let image = $(slider + ' .swiper-slide-active img');
        let title = $(slider + ' .title');
        let description = $(slider + ' .description');
        let btn = $(slider + ' .btn');
        let nav = $(slider + ' nav');
        image.toggleClass('aos-animate');
        title.toggleClass('aos-animate');
        description.toggleClass('aos-animate');
        btn.toggleClass('aos-animate');
        nav.toggleClass('aos-animate');
        setTimeout(() => {
            image.toggleClass('aos-animate');
            title.toggleClass('aos-animate');
            description.toggleClass('aos-animate');
            btn.toggleClass('aos-animate');
            nav.toggleClass('aos-animate');
            AOS.refresh();
        }, 100)

        if ($('.full-slider').hasClass('animation')) {
            $('.full-slider .left').addClass('off');
            $('.full-slider .left').removeClass('init');
            setTimeout(() => {
                $('.full-slider .left').removeClass('off');
            }, 200)

            setTimeout(() => {
                $('.full-slider .left').addClass('init');
            }, 1000)

        } else {
            $('.full-slider .left').addClass('init');
        }
    }

    var fullSlider = new Swiper('.full-slider', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false
        },
        on: {
            init: () => {
                animation('.full-slider')
                let pagination = $('.full-slider .swiper-pagination');
                pagination.hide();
                setTimeout(() => {
                    pagination.show();
                }, 2000)
            },
            slideChange: () => {
                animation('.full-slider')
            }
        }
    })

    var midSlider = new Swiper('.slider-mid', {
        autoplay: false,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1023: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })

    var minSlider = new Swiper('.slider-min', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
        breakpoints: {
            424: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1023: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            1199: {
                slidesPerView: 5,
                spaceBetween: 15
            }
        },
        pagination: false,
    })

    var sliderDisabled = new Swiper('.no-slider', {
        autoplay: false,
        loop: false,
        keyboard: false,
        grabCursor: false,
        allowTouchMove: false,
        on: {
            init: () => {
                animation('.no-slider')
            }
        }
    })
})

/*----------------------------------------------
 form submit
----------------------------------------------*/
/*----------------------------------------------
 Menu Responsive
----------------------------------------------*/

jQuery(function ($) {
    'use strict';
    function navResponsive() {
        let navbar = $('.navbar .items');
        let menu = $('#menu .items');
        menu.html('');
        navbar.clone().appendTo(menu);
        $('.menu .icon-arrow-right').removeClass('icon-arrow-right').addClass('icon-arrow-down');
    }

    navResponsive();
    $(window).on('resize', function () {
        navResponsive();
    })

    $('.menu .dropdown-menu').each(function() {
        var children = $(this).children('.dropdown').length;
        $(this).addClass('children-'+children);
    })
    
    $('.menu .nav-item.dropdown').each(function() {
        var children = $(this).children('.nav-link');
        children.addClass('prevent');
    })

    $(document).on('click', '#menu .nav-item .nav-link', function (event) {
        if($(this).hasClass('prevent')) {
            event.preventDefault();
        }
        var nav_link = $(this);
        nav_link.next().toggleClass('show');
        if(nav_link.hasClass('smooth-anchor')) {
            $('#menu').modal('hide');
        }
    })
})

/*----------------------------------------------
 Navigation
----------------------------------------------*/

jQuery(function ($) {
    'use strict';
    var position = $(window).scrollTop();
    var toTop = $('#scroll-to-top');
    toTop.hide();
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        let navbar = $('.navbar');
        if (!navbar.hasClass('relative')) {
            if (scroll > position) {
                if (window.screen.width >= 767) {
                    navbar.fadeOut('fast');
                } else {
                    navbar.addClass('navbar-sticky');
                }
                toTop.fadeOut('fast');
            } else {
                if (position < 76) {
                    navbar.slideDown('fast').removeClass('navbar-sticky');
                } else {
                    navbar.slideDown('fast').addClass('navbar-sticky');
                }

                if (position > 1023) {
                    if (window.screen.width >= 767) {
                        toTop.fadeIn('fast');
                    }
                } else {
                    toTop.fadeOut('fast');
                }
            }
            position = scroll;
        }
    })

    $(document).on('click', '.smooth-anchor', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    })

    $('.dropdown-menu').each(function () {
        let dropdown = $(this);
        dropdown.hover(function () {
            dropdown.parent().find('.nav-link').first().addClass('active');
        }, function () {
            //dropdown.parent().find('.nav-link').first().removeClass('active');
        })
    })
})

/*----------------------------------------------
 Slides
----------------------------------------------*/

jQuery(function ($) {
    'use strict';
    setTimeout(() => {
        $('.no-slider .left').addClass('init');
    }, 1200)

    var animation = (slider) => {
        let image = $(slider + ' .swiper-slide-active img');
        let title = $(slider + ' .title');
        let description = $(slider + ' .description');
        let btn = $(slider + ' .btn');
        let nav = $(slider + ' nav');
        image.toggleClass('aos-animate');
        title.toggleClass('aos-animate');
        description.toggleClass('aos-animate');
        btn.toggleClass('aos-animate');
        nav.toggleClass('aos-animate');
        setTimeout(() => {
            image.toggleClass('aos-animate');
            title.toggleClass('aos-animate');
            description.toggleClass('aos-animate');
            btn.toggleClass('aos-animate');
            nav.toggleClass('aos-animate');
            AOS.refresh();
        }, 100)

        if ($('.full-slider').hasClass('animation')) {
            $('.full-slider .left').addClass('off');
            $('.full-slider .left').removeClass('init');
            setTimeout(() => {
                $('.full-slider .left').removeClass('off');
            }, 200)

            setTimeout(() => {
                $('.full-slider .left').addClass('init');
            }, 1000)

        } else {
            $('.full-slider .left').addClass('init');
        }
    }

    var fullSlider = new Swiper('.full-slider', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false
        },
        on: {
            init: () => {
                animation('.full-slider')
                let pagination = $('.full-slider .swiper-pagination');
                pagination.hide();
                setTimeout(() => {
                    pagination.show();
                }, 2000)
            },
            slideChange: () => {
                animation('.full-slider')
            }
        }
    })

    var midSlider = new Swiper('.slider-mid', {
        autoplay: false,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1023: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })

    var minSlider = new Swiper('.slider-min', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
        breakpoints: {
            424: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1023: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            1199: {
                slidesPerView: 5,
                spaceBetween: 15
            }
        },
        pagination: false,
    })

    var sliderDisabled = new Swiper('.no-slider', {
        autoplay: false,
        loop: false,
        keyboard: false,
        grabCursor: false,
        allowTouchMove: false,
        on: {
            init: () => {
                animation('.no-slider')
            }
        }
    })
})

/*----------------------------------------------
 form submit
----------------------------------------------*/
jQuery(".contact_form #send_message").on('click', function(){
		
    var name 		= jQuery(".contact_form #name").val();
    var email 		= jQuery(".contact_form #email").val();
    var message 	= jQuery(".contact_form #message").val();
    var number 	= jQuery(".contact_form #number").val();
    var success     = jQuery(".contact_form .returnmessage").data('success');

    jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
    //checking for blank fields	
    if(name===''||email===''||message===''||hisabbir===''||number===''){
        
        jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
    }
    else{
        // Returns successful data submission message when the entered information is stored in database.
        jQuery.post("contact.php",{ ajax_name: name, ajax_email: email, ajax_number: number, ajax_message:message}, function(data) {
            
            jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
            
            
            if(jQuery(".contact_form .returnmessage span.contact_error").length){
                jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
            }else{
                jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
                jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
            }
            
            if(data===""){
                jQuery("#contact_form")[0].reset();//To reset form fields on success
            }
            
        });
    }
    return false; 
});
/*----------------------------------------------
 vfx loader
----------------------------------------------*/

$(window).on('load', function() {
	$('.vfx-loader').delay(400).fadeOut(500);
});

/*----------------------------------------------
 typed words
----------------------------------------------*/

var typed = new Typed('.typed-words', {
	strings: ["WEB DEVELOPER.","WEB DESIGNER."," UI/UX DESIGNER."," CONTENT WRITER."],
	typeSpeed: 80,
	backSpeed: 80,
	backDelay: 4000,
	startDelay: 1000,
	loop: true,
	showCursor: true
});

/*----------------------------------------------
 counter
----------------------------------------------*/

$('.count').each(function () {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
		duration: 4000,
		easing: 'swing',
		step: function (now) {
			$(this).text(Math.ceil(now));
		}
	});
});
/*----------------------------------------------
 vfx loader
----------------------------------------------*/

$(window).on('load', function() {
	$('.vfx-loader').delay(400).fadeOut(500);
});

/*----------------------------------------------
 typed words
----------------------------------------------*/

var typed = new Typed('.typed-words', {
	strings: ["WEB DEVELOPER.","WEB DESIGNER."," UI/UX DESIGNER."," CONTENT WRITER."],
	typeSpeed: 80,
	backSpeed: 80,
	backDelay: 4000,
	startDelay: 1000,
	loop: true,
	showCursor: true
});

/*----------------------------------------------
 counter
----------------------------------------------*/

$('.count').each(function () {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
		duration: 4000,
		easing: 'swing',
		step: function (now) {
			$(this).text(Math.ceil(now));
		}
	});
});