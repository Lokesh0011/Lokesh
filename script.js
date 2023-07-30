 <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" integrity="sha512-Ic9xkERjyZ1xgJ5svx3y0u3xrvfT/uPkV99LBwe68xjy/mGtO+4eURHZBW2xW4SZbFrF1Tf090XqB+EVgXnVjw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init({
        offset:300,
        duretion:1000,
      });
    </script>
    <script>
     var typed = new Typed(".aouto-type", {
        strings: ['Web Developer', 'UI/UX Designer'],
        typeSpeed:150,
        backSpeed:150,
        loop:true,
     });
     var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,},
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
       
     });

     gsap.from(".containers",{
      duration:1,
      delay:0,
      x:420,
      opacity:0,
     });
     gsap.from(".home-1",{
      duration:1,
      opacity:0,
      delay:0,
      y:40,
      stagger:1,
     });
   
     gsap.from(".icon",{
      duration:1,
      opacity:0,
      delay:0,
      y:-35,
      stagger:1,
     })
       </script>
