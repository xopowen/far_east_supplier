
if(window.screen.availWidth < 375){

    let clientLogo = document.querySelector('#swiper-client-logo')
    if(clientLogo){
        clientLogo.classList.add('swiper')
        let wrapper = clientLogo.children.item(0)
        if (wrapper){
            wrapper.classList.add('swiper-wrapper')

            for (let slide=0;slide< wrapper.children.length;slide++){

                wrapper.children[slide].classList.add("swiper-slide")
            }
        }
    let paginat = document.querySelector('.client-logo .swiper-pagination')
    let swiper = new Swiper('#swiper-client-logo',{
        slidesPerView:2,
        pagination: {
            el:paginat,
            clickable: true,
            dynamicBullets: true,
        },
        watchOverflow:true,
    })

    }

}