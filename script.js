const nav = document.querySelector(".navigation-wrap");

window.onscroll = function (){
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("scroll-on");
  }else{
    nav.classList.remove("scroll-on");
  }
}

const navBar =document.querySelectorAll('.nav-link');
const navbarCollapse =document.querySelector('.navbar-collapse');
navBar.forEach(function(a){
  a.addEventListener("click",function(){
    navbarCollapse.classList.remove("show");
  })
})


document.addEventListener("DOMContentLoaded",() => {
  function counter(id, start, end, duration){
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(()=>{
      current += increment;
      obj.textContent = current;
      if(current == end){
        clearInterval(timer);
      }
    }, step);
  }
  counter("count1", 0, 2000, 3000);
  counter("count2", 100, 3786, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 4110, 3000);
});