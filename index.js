const nav = document.querySelector('nav')
const search = document.querySelector('nav li i')
const input = document.querySelector('nav li input')
const menu = document.querySelector('.menu')
const Btndown = document.querySelectorAll('.btn-down')


   menu.addEventListener('click', () => {
     document.querySelector('ul').classList.toggle('active')
   })

 Btndown.forEach(down => {
    down.addEventListener('click', function() {
       down.parentElement.classList.toggle('active')
    })
 })
  search.addEventListener('click', () => {
    input.classList.toggle('active')
    search.classList.toggle('active')
  })


   
window.addEventListener('scroll', function(){
    let view = window.scrollY;
    if(view > 100 ) {
        nav.classList.add('active')
    }  else {
        nav.classList.remove('active')
    }
    console.log(view);
})

// //  scrollReveal Effect
    ScrollReveal({
    reset : false,
    distance: '100px',
    duration: 2500
    });
 
    ScrollReveal().reveal('.herocontent ,.col2', {delay: 100 , origin: 'left' });
    ScrollReveal().reveal('.col1', {delay: 100 , origin: 'right' });  
    ScrollReveal().reveal('.d1', {delay: 100 , origin: 'top' , distance: '100px', duration: 1000});  
    ScrollReveal().reveal('.d2', {delay: 10 , origin: 'top' , distance: '200px' , duration: 1500});    
    ScrollReveal().reveal('.d3', {delay: 100 , origin: 'top' , distance: '300px', duration: 2000});    
    ScrollReveal().reveal('.img1, .img4, .img5', {delay: 100 , origin: 'left' , distance: '100px', duration: 2000});    
    ScrollReveal().reveal('.img2, .img3', {delay: 100 , origin: 'right' , distance: '100px', duration: 2000});    
    ScrollReveal().reveal('.cr1', {delay: 100 , origin: 'left' , distance: '100px', duration: 2000});    
    ScrollReveal().reveal('.cr2', {delay: 200 , origin: 'left' , distance: '200px', duration: 2000});    
    ScrollReveal().reveal('.cr3', {delay: 300 , origin: 'left' , distance: '300px', duration: 2000});    