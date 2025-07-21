$(window).scroll(function(){
    if($(this).scrollTop()>150){
        $('#dynamic').addClass('dark-bg');
    }
    else{ $('#dynamic').removeClass('dark-bg');}
});