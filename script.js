$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.botao-scroll-up').addClass("show");
        }else{
            $('.botao-scroll-up').removeClass("show");
        }
    });
     $('.botao-scroll-up').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typeloop", {
         strings:["estudante de desenvolvimento", "development student", "kaihatsu gakusei"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typed = new Typed(".typeloop2", {
        strings:["estudante de desenvolvimento", "development student", "kaihatsu gakusei"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $('.botao-menu').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.botao-menu i').toggleClass("active");
    });
});
