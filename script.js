//Vars
let toggleBtn = document.querySelector('.toggleSwitch');
let bacisPlan = document.querySelector('.pricing-basicPlanPrice');
let monthlyPlan1 =document.querySelector('.pm1');
let yearlyPlan1 =document.querySelector('.py1');
let monthlyPlan2 =document.querySelector('.pm2');
let yearlyPlan2 =document.querySelector('.py2');
let monthlyPlan3 =document.querySelector('.pm3');
let yearlyPlan3 =document.querySelector('.py3');
// console.log(toggleBtn)
// console.log(bacisPlan)


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

function toggle(button) {
    if (button.value == "OFF"){
        button.value="ON";
        monthlyPlan1.style.display = "none";
        yearlyPlan1.style.display = "initial";
        monthlyPlan2.style.display = "none";
        yearlyPlan2.style.display = "initial";
        monthlyPlan3.style.display = "none";
        yearlyPlan3.style.display = "initial";
        // console.log("Now on");

    } else if (button.value == "ON" )  {
        button.value="OFF"
        monthlyPlan1.style.display = "initial";
        yearlyPlan1.style.display = "none";
        monthlyPlan2.style.display = "initial";
        yearlyPlan2.style.display = "none";
        monthlyPlan3.style.display = "initial";
        yearlyPlan3.style.display = "none";
        // console.log("Now off")
    }


}

// toggleBtn.addEventListener('click', toggle);

