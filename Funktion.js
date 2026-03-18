
// Parallax Hero
/*
window.addEventListener('scroll', function(){
  const scrolled = window.pageYOffset;
  const heroImg = document.querySelector('.hero-parallax img');
  heroImg.style.transform = `translateY(${scrolled * 0.3}px)`;
});
*/

// Scrollytelling Portfolio Image Swap
const projects = document.querySelectorAll(".project");
const image = document.getElementById("projectImage");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      image.src = entry.target.dataset.image;
    }
  });
},{threshold:0.6});
projects.forEach(p => observer.observe(p));