function redirectPage() {
    window.location = linkLocation;
}

$(window).on('load', function () {
    setTimeout(function () {
        $(".loader").fadeOut("fast");
    }, 600);
});

$(document).ready(function () {
    AOS.init();

    $(".news-slider").slick({
        arrow: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
      });

});
