const upper = document.querySelector(".upper");
const form1 = document.querySelector(".form1-active");
const form1Active = document.querySelector(".form1");
const main = document.querySelector("main");
const closeBtn = document.querySelectorAll(".close-btn");
const signin = document.querySelector(".signin-link");
const formbot = document.querySelector(".form-bot");
const backBtn = document.querySelector("back-btn")
const menu = document.querySelector('.menu')
const burger = document.querySelector('.burger')

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY >= 12) {
    upper.classList.add("show");
  } else if (window.scrollY < 9) {
    upper.classList.remove("show");
  }
});
upper.addEventListener("click", (evt) => {
  scrollTo(0, 0);
});

form1.addEventListener("click", () => {
  form1Active.classList.toggle("show");
  main.classList.toggle("main-blur");
  upper.style.display = "none";
});
closeBtn.forEach((e) => {
  e.addEventListener("click", () => {
    form1Active.classList.remove("show");
    main.classList.remove("main-blur")
  });
});

signin.addEventListener("click", () => {
  formbot.style.display = "none";
});

// backBtn.addEventListener("click", ()=>{
    
// })

burger.addEventListener("click", ()=>{
  menu.classList.toggle("menu-show")
})
