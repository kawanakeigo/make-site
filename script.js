
$(document).ready(function () {
    $('#hamburger').click(function () {
        $('#nav-menu').slideToggle();
    });
});


$(document).ready(function () {
    const $track = $('.slide-track');
    const $slides = $('.slide');
    const slideWidth = $('.slide').outerWidth(true);
    const slidesToShow = 1; // ← ここを「1」に！
    let currentIndex = 0;
    const totalSlides = $slides.length;

    function moveSlide(index) {
        const offset = slideWidth * index;
        $track.css('transform', `translateX(-${offset}px)`);
    }

    $('.next').click(function () {
        currentIndex += slidesToShow;
        if (currentIndex > totalSlides - 2) { // 2枚表示なので-2でストップ
            currentIndex = 0;
        }
        moveSlide(currentIndex);
    });

    $('.prev').click(function () {
        currentIndex -= slidesToShow;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 2;
        }
        moveSlide(currentIndex);
    });

    setInterval(function () {
        $('.next').click();
    }, 3000);

    moveSlide(currentIndex);
});

$(document).ready(function () {
    $('#clickable1').click(function () {
        $('#toggle-text1').slideToggle(); // ゆっくり表示/非表示切替
    });
});

$(document).ready(function () {
    $('#clickable2').click(function () {
        $('#toggle-text2').slideToggle(); // ゆっくり表示/非表示切替
    });
});
$(document).ready(function () {
    $('#clickable3').click(function () {
        $('#toggle-text3').slideToggle(); // ゆっくり表示/非表示切替
    });
});

$(document).ready(function () {
    $(window).on('scroll', function () {
        $('.box1, .box2, .box3, .box4').each(function () {
            const boxTop = $(this).offset().top;
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();

            if (scrollTop + windowHeight > boxTop + 50) {
                $(this).addClass('show');
            }
        });
    });
});


$(document).ready(function () {
    $(window).on('scroll', function () {
        $('.branches').each(function () {
            const boxTop = $(this).offset().top;
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();

            if (scrollTop + windowHeight > boxTop + 200) {
                $(this).addClass('show');
            }
        });
    });
});





