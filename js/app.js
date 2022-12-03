$(document).ready(function(){
    $('.slider').slick({
         arrows: false,
         dots: true,
         appendDots:'.slider-dots',
         dotsClass: 'dots',
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let home = document.querySelector('.home')
let about = document.querySelector('.about')
let skill = document.querySelector('.skill')
let project = document.querySelector('.project')
    
hamberger.addEventListener('click', function(){
 mobileNav.classList.add('open');

});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');


});
home.addEventListener('click',function(){
    mobileNav.classList.remove('open')
})
about.addEventListener('click',function(){
    mobileNav.classList.remove('open')
}) 
skill.addEventListener('click',function(){
    mobileNav.classList.remove('open')
}) 
project.addEventListener('click',function(){
    mobileNav.classList.remove('open')
})         
});
// typewriter
var i = 0;
      var txt = 'I m a Web Designer / Python Developer';
      var speed = 100;
      
      function typeWriter() {
        if (i < txt.length) {
          document.getElementById("demo").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
