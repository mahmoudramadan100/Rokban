$(document).ready(function () {

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $("nav").css("background" , "rgba(255, 255, 255, 0.5)");
        }
        else{
            $("nav").css("background" , "#fff");  	
        }
    });





    // $(".navbar-light .navbar-nav .nav-link").mouseleave(function(){
    //     $(".navbar-light .navbar-nav .nav-item .active").css({
    //         "color":"#61B746",
    //         "border-bottom":"2px solid #61B746",
    //         "transition": "all 0.4s"
    //     })
    // });
    // $(".navbar-light .navbar-nav .nav-item .active").hover(function(){
    //     $(this).css({
    //         "color":"#61B746",
    //         "border-bottom":"2px solid #61B746",
    //         "transition": "all 0.4s"
    //     })
    // });


    // $('#light-slider').lightSlider({
    //     item: 4,
    //     loop: false,
    //     rtl: true,
    //     slideMove: 1,
    //     slideMargin: 60,
    //     easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    //     speed: 600,
    //     responsive: [{
    //             breakpoint: 800,
    //             settings: {
    //                 item: 2,
    //                 slideMove: 1,
    //                 slideMargin: 20,
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 item: 1,
    //                 slideMove: 1,
    //                 slideMargin: 10,
    //             }
    //         }
    //     ]
    // });

    $('.owl-carousel').owlCarousel({
        loop:true,
        center: true,
        margin:30,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            420:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })


    $(".nav-link,.dropdown-item").click(function() {
        var t = $(this).attr("href");
        $('.active-1').removeClass('active-1');
        $("html, body").animate({
            scrollTop: $(t).offset().top - 50
        }, {
            duration: 1e3,
        });

        $('body').scrollspy({ target: '#navbar-example2',offset: $(t).offset().top });
        $(this).parent().addClass('active-1');





        return false;
    });

    $('.carousel').carousel({
        interval: 4000
      })


    

        $(".details").hide();
    $(".show_hide").on("click", function () {
        var txt = $(".details").is(':visible') ? '▼' : '▲';
        $(".show_hide").text(txt);
        $(this).next('.details').slideToggle(400);
    });
    
  

});