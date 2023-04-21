$(document).ready(function () {
    let position = 0;
    const slidesToShow = 3;
    const slidesToScroll = 1;
    const container = $('.swiper-container');
    const track = $('.swiper-track');
    const slide = $('.swiper-slide');
    const btnPrev = $('.slider-arrow_prev');
    const btnNext = $('.slider-arrow_next');
    const slideCount = slide.length;
    const slideWidth = container.width() / slidesToShow;
    const movePosition = 890;
    let controlDots = document.querySelector('.controls-slider-main__dots');
    const sliderArrows = document.querySelector('.control-slider-main__arrows')

    slide.each(function (index, slide) {
        $(slide).css({
            minWidth: slideWidth,
        });
    });

    btnNext.click(function() {
        position -= movePosition
        setPosition();
        checkBtns();
        
    })

    btnPrev.click(function() {
        position += movePosition
        setPosition();
        checkBtns();
        
    })

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px`
        })
    }

    const checkBtns = () => {
        btnPrev.prop('disabled', position > 0)
        btnNext.prop('disabled', position <= -850
        );
    }
    checkBtns();

    
});

