(function($){
  $(function(){

    $('.parallax').parallax();
    $('.slider').slider();
    $(".button-collapse").sideNav(
      {
        menuWidth: 300,
        edge: 'left',
        closeOnClick: true,
        draggable: true
      }
    );
    $('.scrollspy').scrollSpy();

    $('.close-card').click(function(e) {
      e.preventDefault();
      $(this).parent().slideUp();
    });

    /**
     * CONTACT FORM SUBMISSION.
     */
    var $contactForm = $("#contactForm");

    $contactForm.submit(function(e) {
      e.preventDefault();

      $.ajax({
        method: "POST",
        url: "sendmail.php",
        data: $contactForm.serialize()
      })
      .done(function(data) {
        if (data.status === 'OK') {
          $("#mail-success").slideDown();
          $contactForm.trigger("reset");
        } else {
          $("#mail-failure").slideDown();
        }
      });

    });

  });
})(jQuery);
