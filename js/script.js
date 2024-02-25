const iconMenu = document.querySelector('.burger');
const menuBody = document.querySelector('.header__nav-left');
const menuLinks = document.querySelectorAll('.header__link');
    
iconMenu.addEventListener ("click", function () {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
});

let swiper1 = document.querySelector('.top-slider');
if(swiper1){
    let mySwiperOne = new Swiper(swiper1 ,{
        navigation: {
            nextEl: '.top-slider__button-next',
            prevEl: '.top-slider__button-prev'
        },
        pagination: {
            el: '.top-slider__pagination',
             // Буллеты
             clickable: true,
             renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "0" + (index + 1) + '</span>';
            },
        },
        simulateTouch: false,
        slidesPerView: 1,
        effect: "slide",
    });
    let topTitle = document.querySelectorAll('.top-slider__container');
    var topPagination = document.querySelector('.top-slider-pag__container');
    if(topTitle.length > 0){
        if(document.documentElement.clientHeight <= 950 && document.documentElement.clientHeight > 900){
            topTitle.forEach(function(item){
                item.style.paddingTop = 100 + "px";
            });
        } else if(document.documentElement.clientHeight <= 800 || document.documentElement.clientWidth <= 1024){
            topTitle.forEach(function(item){
                item.style.paddingTop = 50 + "px";
            });
            topPagination.classList.add('none');
        } else{
            topPagination.classList.remove('none');
        }
    }
}

let swiper2 = document.querySelector('.projects__slider');
if(swiper2){
    let mySwiperTwo = new Swiper(swiper2 ,{
        navigation: {
            nextEl: '.projects__slider-button-next',
            prevEl: '.projects__slider-button-prev'
        },
        simulateTouch: false,
        slidesPerView: 3,
        effect: 'slide',
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            850: {
                slidesPerView: 2,
            },
            1250: {
                slidesPerView: 3,
            }
        },
    });
}

let swiper3 = document.querySelector('.feedback__slider');
if(swiper3){
    let mySwiperThree = new Swiper(swiper3 ,{
        navigation: {
            nextEl: '.feedback__slider-button-next',
            prevEl: '.feedback__slider-button-prev'
        },
        simulateTouch: false,
        slidesPerView: 1,
        effect: 'slide',
        loop: true,
    });
}

let btnToTop = document.querySelector('.footer__button-up');
if(btnToTop){
    btnToTop.addEventListener("click", function(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}

// Animation
const animItems = document.querySelectorAll('.anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active');
            } else{
                if(!animItem.classList.contains("anim-no-hide")){
                    animItem.classList.remove('active');
                }
            }
        }
    };
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    };

    setTimeout(() => {
        animOnScroll();
    }, 300);
}

let title = document.querySelectorAll('.offer__sub-title');
let text = document.querySelectorAll('.offer__sub-text');
if(title){
    title.forEach(el => {
        el.addEventListener("click", function(){
            let content = el.nextElementSibling;
            if(content.style.maxHeight){
                title.forEach(w => w.classList.remove('with'));
                text.forEach(e => e.style.maxHeight = null);
            } else{
                title.forEach(w => w.classList.remove('with'));
                el.classList.add('with');
                text.forEach(e => e.style.maxHeight = null);
                content.style.maxHeight = content.scrollHeight + "px";
            }
        })
    });
};

if(document.querySelector('.example')){
    const isReadMoreBtn = document.querySelector('.example__more');

    isReadMoreBtn.addEventListener('click', function(e){
        const current = e.target;
        const currentBlock = document.querySelector('.example__block-more');
        currentBlock.classList.toggle('example__block-more--show');
        current.textContent = current.textContent.includes('Load more') ? 'Load less' : 'Load more';
    });
};

let modernSlider = document.querySelector('.modern__slider');
if(modernSlider){
    var modern = new Swiper(modernSlider ,{
        navigation: {
            nextEl: '.modern__slider-button-next',
            prevEl: '.modern__slider-button-prev'
        },
        slidesPerView: 1,
        effect: 'slide',
        spaceBetween: 20,
        thumbs: {
            swiper: {
                el: '.modern__slider-two',
                slidesPerView: 6,
            }
        },
        breakpoints: {
            300: {
                spaceBetween: 10,
                slidesPerView: 1.07,
            },
            400: {
                slidesPerView: 1.07,
            },
            700: {
                slidesPerView: 1,
            }
        },
    });
};