$(document).ready(function(){
             $('.rslides').responsiveSlides({
                 speed:500
             }); 
                  });
$(document).ready(function(){
    $("#owl-demo").owlCarousel({
        autoPlay: true
    });
     });
$(document).ready(function(){
    $(".inline").colorbox({
        inline: true,
        width: "450",
    });
     });
$(document).ready(function(){
    $("#scroll").mCustomScrollbar({
        scrollButtons:{
            enable:true
        },
        theme:"dark-2",
    })
     });
$(document).ready(function(){
       var win=$(window),
           nav=$('.masthead'),
           pos=nav.offset().top,
           sticky=function(){
               win.scrollTop() > pos ? nav.addClass('sticky') : nav.removeClass('sticky')
           }
               win.scroll(sticky)
    });
$(document).ready(function(){
    $('.nav-bar').click(function(){
        $('.responsive-nav ul').toggle(200);
    })
});