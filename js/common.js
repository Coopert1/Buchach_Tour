$(document).ready(function() {	
    // burger buttons and menu
    $('.bars').click(function(){
    	$(this).toggleClass('active');
    	$('.mobile-nav>ul>li').toggleClass('active');
    	$('.mobile-nav').toggleClass('active')
        $('body').toggleClass('no-scroll')
        if($('.search').hasClass('active')){
            console.log(1);
            $('.icon_search').removeClass('active')
            $('.search-form').removeClass('active')
        }
    })
    
    //search
    $('.search').click(function(){
        $(this).toggleClass('active')
        $('.search-form').toggleClass('active')
        $('.search-form>form').toggleClass('active')
        $('body').toggleClass('no-scroll')
        if($('.bars').hasClass('active')){
            console.log(1);
            $('.bars').removeClass('active')
            $('.mobile-nav').removeClass('active')
        }
    })

    //slider
    $('.main-slider').lightSlider({
        adaptiveHeight:false,
        item:1,
        slideMargin:0,
        speed: 1000,
        auto:true,
        pause: 6000,
        loop:true,
        controls: false
    });
    //show-hide more text

    $('.short-history').showMore({
          minheight: 175,
          animationspeed: 500,
          buttontxtmore:"Історія міста",
          buttontxtless:"Сховати",
    });

    $('.location-description').showMore({
        minheight: 265,
        animationspeed: 500,
        buttontxtmore:"Показати більше інформації",
        buttontxtless:"Сховати",
  });

  $('.submenu').hide();
    $('.has-submenu').click(function() {
        event.preventDefault()
        $(this).siblings('.icon_arrow').toggleClass('active')
        var $more = $(this).siblings('.submenu');
            if ($more.is(':hidden')) {
                $more.slideDown();
            } else {
                $more.slideUp();
            }
    });

    //
    $('.location-list').hide();
    $('.btn_view-all').click(function() {
        event.preventDefault()
       $(this).toggleClass('active');
        var $currentLocation = $('.current-location');
        var $list = $('.location-list');
        if ($list.is(':hidden')) {
            $list.slideDown();
            $currentLocation.slideUp()
        } else {
            $list.slideUp();
            $currentLocation.slideDown()
        }
    
    });
})