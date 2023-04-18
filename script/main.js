const upper = document.querySelector(".upper")

window.addEventListener("scroll",  e =>{
    console.log(window.scrollY);
    if(window.scrollY >= 1200){
        upper.classList.add("show")
    }else if(window.scrollY < 1100){
        upper.classList.remove("show")
    }
})
upper.addEventListener("click", evt =>{
    scrollTo(0,0)
})
