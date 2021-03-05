//Vars
let toggleBtn = document.querySelector('.toggleSwitch');
let bacisPlan = document.querySelector('.pricing-basicPlanPrice');
let monthlyPlan =document.querySelectorAll('.pricing-monthly');
let yearlyPlan =document.querySelectorAll('.pricing-yearly');
console.log(toggleBtn)
console.log(bacisPlan)
console.log(monthlyPlan)
console.log(yearlyPlan)

//Nav
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () =>{
        //toggle nav
        nav.classList.toggle('nav-active');
        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation =""
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            // console.log(index /7);
            }
        });
        //burger animation
        burger.classList.toggle('toggle')

});
}
navSlide()

function togglePlans() {
    if (toggleBtn.value == "Off"){
        console.log(toggleBtn)

    }
}

toggleBtn.addEventListener('click', togglePlans);

