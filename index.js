//navbar ,menu-button calculation here

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');

    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');

    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');

    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    
}


window.onscroll = () => {
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    
}

/**window.onscroll = () => {
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');

    note: aita use kore jokhon ami searchbtn,meny.searchform e click korar por onno gula hide hoy na ...tai ektar por onnota hide korar jonno ai method ude kora hoice sobgula te
}
*/



// theme btn design start here

let themeBtn = document.querySelector('#theme-btn')

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}




// swipper.js theke aita use kora hoice
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay: 5500,
        dasableOnInteraction:false,

    },

    pagination: {
      el: ".swiper-pagination",
    },
  });

  

  