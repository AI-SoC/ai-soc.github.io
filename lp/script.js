var swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    centeredSlides: true,
    freeMode: true,
    slidesPerView: 'auto',
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
    }
});