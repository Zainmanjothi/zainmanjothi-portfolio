
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAG9cx-dSWZONeGM9Tv3LSc5nzt6TcV9tg",
    authDomain: "zain-manjothi-portfolio.firebaseapp.com",
    projectId: "zain-manjothi-portfolio",
    storageBucket: "zain-manjothi-portfolio.appspot.com",
    messagingSenderId: "312287753292",
    appId: "1:312287753292:web:ecb100453f46cb0b6eb0e9"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


//   const email = document.querySelector(".field-email");
//   const password = document.querySelector(".password");
//   email.value;
//   password.value;

  createUserWithEmailAndPassword(auth, "zainmanjothi@gmail.com" , "1234567")
  .then((res) => {
    // Signed in 
    const user = res.user;
    console.log("user" , user)
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log("errorMessage" , errorMessage)
  });




// $(document).ready(function(){
//     $(window).scroll(function(){
//         // sticky navbar on scroll script
//         if(this.scrollY > 20){
//             $('.navbar').addClass("sticky");
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
        
//         // scroll-up button show/hide script
//         if(this.scrollY > 500){
//             $('.scroll-up-btn').addClass("show");
//         }else{
//             $('.scroll-up-btn').removeClass("show");
//         }
//     });

//     // slide-up script
//     $('.scroll-up-btn').click(function(){
//         $('html').animate({scrollTop: 0});
//         // removing smooth scroll on slide-up button click
//         $('html').css("scrollBehavior", "auto");
//     });

//     $('.navbar .menu li a').click(function(){
//         // applying again smooth scroll on menu items click
//         $('html').css("scrollBehavior", "smooth");
//     });

//     // toggle menu/navbar script
//     $('.menu-btn').click(function(){
//         $('.navbar .menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");
//     });

//     // typing text animation script
//     var typed = new Typed(".typing", {
//         strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     var typed = new Typed(".typing-2", {
//         strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     // owl carousel script
//     $('.carousel').owlCarousel({
//         margin: 20,
//         loop: true,
//         autoplay: true,
//         autoplayTimeOut: 2000,
//         autoplayHoverPause: true,
//         responsive: {
//             0:{
//                 items: 1,
//                 nav: false
//             },
//             600:{
//                 items: 2,
//                 nav: false
//             },
//             1000:{
//                 items: 3,
//                 nav: false
//             }
//         }
//     });
// });