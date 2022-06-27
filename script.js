
$(document).ready(function () {
    $("p").hover(function () {
            // over
            $("p").css("color", "#ff0000");
        }, function () {
            // 
            $("p").css("color", "#000000");
        }
    );
var windowWidth = $(this).width();
$(window).resize(function () { 
    windowWidth = $(this).width();
    console.log (windowWidth);   
    if (windowWidth >= 715){
        $("p").css("font-size", "16px");
}
});
});
