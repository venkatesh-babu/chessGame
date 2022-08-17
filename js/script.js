$(document).ready(function(){
    $("#play").mouseover(function(){
        $(".Play").css("display","block");
        $(".Puzzles").css("display","none");
        $(".Rules").css("display","none");
    });
    $("#puzzle").mouseover(function(){
        $(".Play").css("display","none");
        $(".Puzzles").css("display","block");
        $(".Rules").css("display","none");
    });
    $("#rules").mouseover(function(){
        $(".Play").css("display","none");
        $(".Puzzles").css("display","none");
        $(".Rules").css("display","block");
    });
    $(".menu2").mouseleave(function(){
        $(".menu2").css("display","none");
    });
    $(".educators").mouseover(function(){
        $(".menu2").css("display","none");
    });
    $(".align").mouseover(function(){
        $(".menu2").css("display","none");
    });
    $(".exit-in").click(function(){
        $(".option-box").css("display","none");
        $(".content").css({"opacity":"100%","pointer-events":"auto"});
    });
    $(".popup").click(function(){
        $(".option-box").css("display","block");
        $(".content").css({"opacity":"12%","pointer-events":"none"});
    });
    var blink = 
            document.getElementById('blink');
  
        setInterval(function () {
            blink.style.opacity = 
            (blink.style.opacity == 0 ? 1 : 0);
        }, 400); 
});