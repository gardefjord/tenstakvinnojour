$(window).scroll(function(){

  var scrollTop = $(window).scrollTop();

  if(scrollTop < 200){
    maxHeight = 90;

  }else if(scrollTop > 400){
    maxHeight = 50;
  }

  $('.section--nav').stop().animate({'max-height': maxHeight+"px"}, 100);
  console.log(scrollTop);

})
