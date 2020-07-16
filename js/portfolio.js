(function($) {
  "use strict"; // Start of use strict


  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("nav-on-scroll");
    } else {
      $("#mainNav").removeClass("nav-on-scroll");
    }
  });

  $(document).ready(function(){
    $("#portfolio1btn").click(function(){
      $("#portfolio1").modal("show");
    });
    $("#portfolio2btn").click(function(){
      $("#portfolio2").modal("show");
    });
    $("#portfolio3btn").click(function(){
      $("#portfolio3").modal("show");
    });
    $("#portfolio4btn").click(function(){
      $("#portfolio4").modal("show");
    });
    $("#portfolio5btn").click(function(){
      $("#portfolio5").modal("show");
    });
    $("#portfolio6btn").click(function(){
      $("#portfolio6").modal("show");
    });
    $("#portfolio7btn").click(function(){
      $("#portfolio7").modal("show");
    });
    $("#portfolio8btn").click(function(){
      $("#portfolio8").modal("show");
    });
   
  });


})(jQuery); // End of use strict





