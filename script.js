
$(document).ready(function () {
    $("h2").hover(function () {
        // over
        $("h2").css("color", "#9615DB");
    }, function () {
        // 
        $("h2").css("color", "#7D7F80");
    }
    );
    var windowWidth = $(this).width();
    $(window).resize(function () {
        windowWidth = $(this).width();
        console.log(windowWidth);
        if (windowWidth >= 715) {
            $("h2").css("font-size", "16px");
        }
    });

});

$("h3").hover(function () {
        // over
        $("h3").css("color", "#9615DB");
    }, function () {
        // 
        $("h3").css("color", "#7D7F80");
    }
    );
    var windowWidth = $(this).width();
    $(window).resize(function () {
        windowWidth = $(this).width();
        console.log(windowWidth);
        if (windowWidth >= 715) {
            $("h3").css("font-size", "16px");
        }
    });

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$("hobbies").hover(function () {
        // over
        $("hobbies").css("color", "#9615DB");
    }, function () {
        // 
        $("hobbies").css("color", "#000000");
    }
    );
    var windowWidth = $(this).width();
    $(window).resize(function () {
        windowWidth = $(this).width();
        console.log(windowWidth);
        if (windowWidth >= 715) {
            $("hobbies").css("font-size", "16px");
        }
    });



function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h = checkTime(h);
    var time = h + ":" + m + ":" + s;
    $(".time").text(time);
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } 
    return i;
}

