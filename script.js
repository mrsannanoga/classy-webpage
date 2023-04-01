const burger = document.querySelector('nav svg');

burger.addEventListener("click", () => {
    if (burger.classList.contains("active")){
        gsap.to(".links", {x: "100%"});
        gsap.to(".line", {stroke: "white"})
    } else{
        gsap.to(".links", {x: "0%"});
        gsap.to(".line", {stroke: "black"})

    }
    burger.classList.toggle("active")
})