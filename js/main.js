(function($){

  var menuBtn = $('#menu-btn'),
      menu = $('#menu');

  menuBtn.on('click', function() {
    //menu.toggleClass('hidden');
    menu.slideToggle();
  });

})(jQuery)
