const upper = document.querySelector(".upper")
const form1 = document.querySelector('.form1-active')
const form1Active = document.querySelector('.form1')
const main = document.querySelector("main")

window.addEventListener("scroll",  e =>{
    console.log(window.scrollY);
    if(window.scrollY >= 12){
        upper.classList.add("show")
    }else if(window.scrollY < 9){
        upper.classList.remove("show")
    }
})
upper.addEventListener("click", evt =>{
    scrollTo(0,0)
})

form1.addEventListener("click", ()=>{
    form1Active.classList.toggle("show")
    main.classList.toggle("main-blur")
    upper.style.display = "none"
})