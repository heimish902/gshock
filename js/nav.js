$(document).ready(function(){

    /* menu show */
    var navButton = $('#header button');
    
    $(navButton).click(function(){
        if($(navButton).hasClass('on')){
            $(navButton).removeClass('on');
            $('#nav').slideUp(400);
        } else {
            $(navButton).addClass('on');
            $('#nav').slideDown(400);
        }
    });
    
    /* header */
        function on(){
        var wscroll = $(this).scrollTop();
        var $header = $('#header')
        if(wscroll > 100) {
            $header.addClass('on');
        } else {
            $header.removeClass('on');
        }
    }
    
    $(window).scroll(function(){
        on();
    })
});