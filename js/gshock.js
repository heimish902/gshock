$(document).ready(function(){
    /* animation */
   function startani(ws,cl){
        var wscroll = $(this).scrollTop();

        if(wscroll >= $(ws).offset().top - $(this).height()){
            $(ws).find(cl).addClass('ani');
        }else{
            $(ws).find(cl).removeClass('ani');
        }
   }

    
    $(window).scroll(function(){
        startani('#gwg-1000','.imgbox, h2, p, .view_btn');
        startani('#technology','h2, p, .view_btn');
        startani('#material','p, li');
        startani('#carbon','h2, p, .view_btn');
        startani('#features', 'li');
    });
    
    
    /* vivus */
    var svg = new Vivus('motion', {duration: 150, type: 'oneByOne'}, function(){$('#motion').find('.st0').addClass('fill');});
});
