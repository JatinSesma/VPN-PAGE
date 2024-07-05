let navicon = document.querySelector(".nav-icon");
let lgview = document.querySelector(".lg-view");
navicon.addEventListener("click", () => {
    lgview.classList.toggle("show");
});

$(".sliderbox").slick({
    dots: true,
    infinite: true,
    speed: 300,
    nextArrow: ".next",
    prevArrow: ".prev",
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                dots: true,
            }
        }
    ]
});

// $('.responsive').slick({
//     dots: true,
//     arrows: true,
//     prevArrow: '.prev',
//     nextArrow: '.next',
//     speed: 250,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true,

//             }
//         },
//         {
//             breakpoint: 786,
//             settings: {
//                 slidesToShow: 1.5,
//                 slidesToScroll: 1,
//                 autoplay: true,
//                 autoplaySpeed: 3000,
//                 dots: false
//             }
//         },

//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// });

