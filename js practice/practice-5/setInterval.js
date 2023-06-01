const stopChange = document.querySelector(".change");
const body = document.body;

const setIntervalID =  setInterval(()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    body.style.cssText = `background: rgb(${red}, ${green}, ${blue});`;
},1000);

stopChange.addEventListener('click',(change)=>{
    clearInterval(setIntervalID);
    change.target.innerText = body.style.background;
})