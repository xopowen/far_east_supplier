
let paginOurWorc = document.querySelector("#pagination-swiper-one")
let slaiderOurWorc = new Swiper(".sliderOne",{
    pagination:{
        el: paginOurWorc,
        clickable: true,
        dynamicBullets: true,
    },
//указыаем склолько слайдов показывать
    slidesPerView:window.screen.width >=770?3:window.screen.width > 375 ?2:1 ,
    // slidesPerView:window.screen.width <= 770 && window.screen.width > 375 ?2:1 ,
//если сладов меньше нужного убирает отрибуты слдера
    watchOverflow:true,
//размер отступа между слайдми
    spaceBetween:30,
    slidesPerGroup:window.screen.width <= 770 || window.screen.width > 375 ? 2:1,

    /* адаптив под разные экраны
    breakpoints:{
    //если больше 320
    320:{
        slidesPerView:1,
        slidesPerColumn:1,
    }
    //по соотношению сторон
    "@0.75":{}
    }
    */
});





