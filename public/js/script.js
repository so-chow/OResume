 $(document).ready(function() {


    var count = $(".slide > img").length;
    var current = 1;
    var sliderNext = 2;

    $("img[id^='slide_']").fadeOut();
    $("#slide_" + current).fadeIn();
    highlightActiveCircle(current);

    var loop = setInterval(function() {
        $("#slide_" + current).hide();
        $("#slide_" + sliderNext).fadeIn();
        highlightActiveCircle(sliderNext);


        (sliderNext >= count) ? sliderNext = 1 : sliderNext++;
        (current >= count) ? current = 1 : current++;
    }, 3000)


$('ol li').click(function(){
		var index = $(this).index() + 1;
        highlightActiveCircle(index);
        $("#slide_" + current).hide();
        $("#slide_" + index).fadeIn();
        window.clearInterval(loop);
        current=index;
});

function highlightActiveCircle(index) {
    $("ol li.circle_active").removeClass("circle_active");
    $("#circle" + index).addClass("circle_active").fadeIn('slow');
}



});


function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



