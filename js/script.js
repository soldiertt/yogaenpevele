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

  });
})(jQuery);
