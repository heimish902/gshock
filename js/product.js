$(document).ready(function(){
    
    // slider
      $slick_slider = $('.slide_pro');
      settings_slider = {
        arrows: true,
        dots: false,
        autoplay: true,
        slideToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>'
      }
    
      slick_on_mobile( $slick_slider, settings_slider);

    // slick on mobile
      function slick_on_mobile(slider, settings){
        $(window).on('load resize', function() {
          if ($(window).width() > 1023) {
            if (slider.hasClass('slick-initialized')) {
              slider.slick('unslick');
            }
            return
          }
          if (!slider.hasClass('slick-initialized')) {
            return slider.slick(settings);
          }
        });
      };

                 
    /* animation */
    function startani(ws,cl){
        var wscroll = $(this).scrollTop();

        if(wscroll >= $(ws).offset().top - $(this).height()/1.1){
            $(ws).find(cl).addClass('ani');
        }else{
            $(ws).find(cl).removeClass('ani');
        }
    }
    
    function startVivus(a,b){
        var wscroll = $(this).scrollTop();

        if(wscroll > $(a).offset().top - ($(this).height()/1.3)){
            b.play();
        }else{
            b.reset();
        }
    }
    $(window).scroll(function(){
        startani('#collection','.col_pro');
        startani('#master', '.master_pro');
        startani('#selection', '.selbox');
        startVivus('#pro_nav',svg1);
        startVivus('#pro_nav',svg2);
        startVivus('#pro_nav',svg3);
        startVivus('#pro_nav',svg4);
    })
    
    /* vivus */
    var svg1 = new Vivus('Layer_1', {type: 'delayed', duration: 100,});
    var svg2 = new Vivus('Layer_2', {type: 'delayed', duration: 100,});
    var svg3 = new Vivus('Layer_3', {type: 'delayed', duration: 100,});
    var svg4 = new Vivus('Layer_4', {type: 'delayed', duration: 100,});
});

