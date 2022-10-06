burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
logoleft = document.querySelector('.logoleft')
navright = document.querySelector('.navright')



burger.addEventListener('click', ()=>{
     navright.classList.toggle('v-class-resp');
     logoleft.classList.toggle('v-class-resp');
     navbar.classList.toggle('h-nav-resp');
})

         