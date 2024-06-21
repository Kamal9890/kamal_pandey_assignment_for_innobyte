const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click" , moblemmenu);

function moblemmenu()
{
         hamburger.classList.toggle("active")
         navMenu.classList.toggle("active")
}

window.addEventListener("scroll" , function(){
         var header = document.querySelector("header")
         header.classList.toggle("sticky" , this.window.scrollY >0)

})

$('.owl-carousel').owlCarousel({
         loop: true,
         margin: 10,
         nav: true,
         dots: false,
         navText: ["<i class='far fa-long-arrow-alt-left'></i>", "<i class='far fa-long-arrow-alt-right'></i>"],
         responsive: {
           0: {
             items: 1
           },
           768: {
             items: 1
           },
           1000: {
             items: 1
           }
         }
       });


        
// --------Home--------


$('#time').countdown('2024/01/01', function (event) {
         $(this).html(event.strftime(
           '<div class="clock"><span>%d</span> <p>Days</p></div> ' +
           '<div class="clock"><span>%H</span> <p>Hours</p></div> ' +
           '<div class="clock"><span>%M</span> <p>Minutes</p></div> ' +
           '<div class="clock"><span>%S</span> <p>Seconds</p></div> '
         ));
       });




       /// revies 

  





       //gallary


