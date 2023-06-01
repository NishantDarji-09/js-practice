const colorChangeButton = document.querySelector(".changeColor");
const resetButton = document.querySelector(".resetColor");
const body = document.body;
const currentColor = document.querySelector(".current-color");

function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}

colorChangeButton.addEventListener('click', ()=>{
    const randomColor = randomColorGenerator();
    body.style.background = randomColor;
    currentColor.textContent = randomColor;
});
resetButton.addEventListener('click',()=>{
    body.style.background = "rgb(255, 255, 255)";
    currentColor.textContent = "rgb(255, 255, 255)"
})