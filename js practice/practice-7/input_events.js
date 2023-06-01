const inputBox = document.getElementById("input-event");

function debounce(func, delay){
    let timeoutId;
    return function(...args){
        if(timeoutId){
            clearTimeout(timeoutId); 
        }
        timeoutId = setTimeout(()=>{
            func.call(this, ...args);
        }, delay)
    };
}

function findSuggestion(e){
    console.log("suggestion for ",e.target.value);
}
const decoratedFindSuggestion = debounce(findSuggestion, 400);
inputBox.addEventListener("input", decoratedFindSuggestion);