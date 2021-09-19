// nav
$(document).ready(function(){
  $("#nav > ul > li").mouseover(function(){
    $(".submenu").stop().slideDown(300);
  });
  $("#nav > ul > li").mouseout(function(){
    $(".submenu").stop().slideUp(300);
  });
});

//slide
const saTriggerMargin = 300;
const saElementList = document.querySelectorAll('.sa');

const saFunc = function() {
  for (const element of saElementList) {
    if (!element.classList.contains('show')) {
    if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
      element.classList.add('show');
      }
    } else if (window.innerHeight < element.getBoundingClientRect().top + saTriggerMargin){
      element.classList.remove('show');
    }
  }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);
