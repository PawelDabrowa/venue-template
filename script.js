
//======== Responsive navigation ======//
const burgerMenu = document.querySelector('.burger');
const activeElement = document.querySelectorAll('.element');
const offButton = document.querySelector('.off');

function addMenu() {
    for (i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle('active');
    }
    offButton.classList.toggle("btn");
    var divElement = document.createElement("Div");
}
burgerMenu.addEventListener('click', addMenu);

//======== End of responsive navigation ======//


//======== Blog hovered ======//

$(document).ready(function () {
    $("button.remove-shadow").hover(function () {
        // $(".img-wrap").addClass("hovered-card");
        jQuery(this).parent(".img-wrap").addClass("hovered-card");
    }, function () {
        $(".img-wrap").removeClass("hovered-card");
    });
});

//========End Blog hovered ======//

//========Blog slider ======//

$(document).ready(function () {
    $('.blog-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 9000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 720,
            settings: {
                slidesToShow: 1
            }
        }]
    });

});

// $('.blog-wrapper').slick({
//     arrows: false
// })
//------ Arrows set up-------//

$('.left').click(function () {
    $('.blog-wrapper').slick('slickPrev');
})

$('.right').click(function () {
    $('.blog-wrapper').slick('slickNext');
})

//========End Blog slider ======//

//======== Scrolling ======//

//-----Menu Scrolling-------//

$('nav a').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

//-----Header Scrolling-------//

$('.arrow').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.square-two').offset().top
    }, 500)
})

//======== End Scrolling ======//