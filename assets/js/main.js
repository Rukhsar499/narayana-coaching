
// slider js
 var $carousel = $('[data-owl-carousel]');
 if ($carousel.length) {
     $carousel.each(function (index, el) {
         $(this).owlCarousel($(this).data('owl-carousel'));
     });
 }





    
  
    



// data aos


  AOS.init();
  AOS.refresh(); // initialize AOS animations
  $(document).ready(function(){
      $("body,html").animate({
          scrollTop: 10
      }, 1000);
      $("body,html").animate({
          scrollTop: 0
      }, 1);
  });


