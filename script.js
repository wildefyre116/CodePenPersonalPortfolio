$(document).ready(function(){
  
  var scrolllink=$('.scroll');
  //smooth scrolling
 scrolllink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 )
  })
})
  
  