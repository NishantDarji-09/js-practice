const toggleDark = document.querySelector(".slider");
const body = document.body;

/* function toggleTheme(){
    if(body.classList.contains("darkMode")){
        body.classList.remove("darkMode");
    }
    else{
        body.classList.add("darkMode");
    }
}
toggleDark.addEventListener('click',toggleTheme); */


toggleDark.addEventListener('click', ()=>{
    body.classList.toggle("darkMode")
})