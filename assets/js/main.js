$(window).ready(function(){
  // showing or hide navigate arrow
  $(window).scroll(function(){
      if($(window).scrollTop() > $(".breadcrumb").height()){
          $(".navigate-above").show(500)
      }
      else{
          $(".navigate-above").hide(500)
      }}
  )
// searching button at navbar
  $('.search-button').on('click', '.search-toggle', function(e) {
      var selector = $(this).data('selector');
    
      $(selector).toggleClass('show').find('.search-input').focus();
      $(this).toggleClass('active');
    
      e.preventDefault();
    });
   
  
})



