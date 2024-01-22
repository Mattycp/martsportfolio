/* ====================================== ativar a troca de teme ==================================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switche on scroll
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/* ====================================== cores do tema ==================================*/
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}

/* ====================================== tema claro e escuro ==================================*/
const dayNight = document.querySelector(".day-night");

// Ativar dark mode (Função)
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}// Salvar dark mode
function saveDarkMode(){
    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }else{
        localStorage.removeItem("dark");
    }
}

// Evento de Click no icone do dark mode
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    toggleDarkMode();
    saveDarkMode();
})



  loadTheme();

window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

function loadTheme() {
    const darkMode = localStorage.getItem("dark");
  
    if (darkMode) {
      toggleDarkMode();
    }
  }

  