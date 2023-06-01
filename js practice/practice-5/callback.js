const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

/* setTimeout(()=>{
    heading1.textContent = "One";
    heading1.style.color = "violet";
    setTimeout(() => {
        heading2.textContent = "Two";
        heading2.style.color = "purple";
        setTimeout(() => {
            heading3.textContent = "Three";
            heading3.style.color = "red";
            setTimeout(() => {
                heading4.textContent = "Four";
                heading4.style.color = "pink";
                setTimeout(() => {
                    heading5.textContent = "Five";
                    heading5.style.color = "green";
                    setTimeout(() => {
                        heading6.textContent = "Six";
                        heading6.style.color = "blue";
                        setTimeout(() => {
                            heading7.textContent = "Seven";
                            heading7.style.color = "brown";
                        }, 1000);
                    }, 3000);
                }, 2000);
            }, 1000);
        }, 2000);
    }, 2000);
}, 1000); */

// pyramid of doom

/* function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(() => {
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
            else{
                if(onFailureCallback){
                    onFailureCallback();
                }
            }
        }
    }, time);
}

changeText(heading1, "One", "violet",1000,()=>{
    changeText(heading2,"Two", "purple", 2000, ()=>{
        changeText(heading3,"Three", "red", 2000, ()=>{
            changeText(heading4,"Four", "pink", 1000, ()=>{
                changeText(heading5,"Five", "green", 2000, ()=>{
                    changeText(heading6,"Six", "blue", 3000, ()=>{
                        changeText(heading7,"Seven", "brown", 1000, ()=>{
            
                        }, ()=>{console.log("Heading7 doesn't Exist...");})
                    }, ()=>{console.log("Heading6 doesn't Exist...");})
                }, ()=>{console.log("Heading5 doesn't Exist...");})
            }, ()=>{console.log("Heading4 doesn't Exist...");})
        }, ()=>{console.log("Heading3 doesn't Exist...");})
    }, ()=>{console.log("Heading2 doesn't Exist...");})
}, ()=>{console.log("Heading1 doesn't Exist...");}) */


//  Using Promises

/* function changeText(element, text, color, time){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }
            else{
                reject("element not found");
            }
        }, time);
    })
    
}

changeText(heading1, "One", "violet", 1000)
    .then(()=>{return changeText(heading2, "Two", "purple", 2000)})
    .then(()=>{return changeText(heading3,"Three", "red", 2000)})
    .then(()=>{return changeText(heading4,"Four", "pink", 1000)})
    .then(()=>{return changeText(heading5,"Five", "green", 2000)})
    .then(()=>{return changeText(heading6,"Six", "blue", 3000)})
    .then(()=>{return changeText(heading7,"Seven", "brown", 1000)}) 
    .catch((error)=>{alert(error);}) */