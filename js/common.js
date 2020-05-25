$(document).ready(function() {	
    $('.bars').click(function(){
    	$(this).toggleClass('active');
    	$('.mobile-nav>ul>li').toggleClass('active');
    	$('.mobile-nav').toggleClass('active')
        $('body').toggleClass('no-scroll')
        if($('.search').hasClass('active')){
            $('body').toggleClass('no-scroll')
            $('.icon_search').removeClass('active')
            $('.search-form').removeClass('active')
        }
    })
    
    //search
    $('.search').click(function(){
        $(this).toggleClass('active')
        $('.search-form').toggleClass('active')
        $('.mobile-nav>ul>li').removeClass('active');
        $('.search-form>form').toggleClass('active')
        if($('.bars').hasClass('active')){
            $('.mobile-nav>ul>li').removeClass('active');
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
        pause: 10000,
        loop:true,
        controls: false
    });
    
    $('.mobile-slider').lightSlider({
        adaptiveHeight:false,
        item:1,
        slideMargin:0,
        speed: 1000,
        auto:true,
        pause: 10000,
        loop:true,
        controls: false
    });

  $('.submenu').hide();
    $('.has-submenu').click(function() {
        event.preventDefault()
        $(this).siblings('.icon_arrow').toggleClass('active')
        $(this).parent('.active').siblings('.active').children('.submenu').slideUp()
        $(this).parent('.active').siblings('.active').children('.icon_arrow').removeClass('active')
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
            $(this).html('Сховати  <div class="icon_arrow icon_arrow active">');
            $list.slideDown();
            $currentLocation.slideUp()
        } else {
            $(this).html('Показати всі <div class="icon_arrow">');
            $list.slideUp();
            $currentLocation.slideDown()
        }
    
    });


    $('.audio').hide();
    $('.location-btn_audio-guide').click(function() {
        event.preventDefault()
        var $audio = $('.audio');
        if ($audio.is(':hidden')) {
            $(this).html('Сховати аудіогід');
            $audio.slideDown();
            $('#audioguide').get(0).play(); 
        } else {
            $audio.slideUp();
            $(this).html('Прослухати аудіогід');
            $('#audioguide').get(0).pause();
        }
    });


    $('.long-history').hide();
    $('.to-history').click(function() {
        event.preventDefault()
        var $history = $('.long-history');
        if ($history.is(':hidden')) {
            $(this).toggleClass('active')
            $(this).html('Сховати історію міста');
            $history.slideDown();
        } else {
            $(this).toggleClass('active')
            $history.slideUp();
            $(this).html('Показати історію міста');

        }
    });


    $('.location-description-more').hide();
    $('.show-more').click(function() {
        event.preventDefault()
        var $description = $('.location-description-more');
        if ($description.is(':hidden')) {
            $(this).toggleClass('active')
            $(this).html('Сховати опис');
            $description.slideDown();
        } else {
            $(this).toggleClass('active')
            $description.slideUp();
            $(this).html('Показати детальний опис');

        }
    
    });
})