function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



  $(document).ready(function () {
      $('.product-column').slick({
          autoplay: true,
          autoplaySpeed: 2500,
          centerMode: true,
          centerPadding: '0px', // Set centerPadding to 0
          slidesToShow: 3, // Show 3 slides at a time
          focusOnSelect: true, // Enable focus on select
          arrows:false,
          dots:true

      });
  });



