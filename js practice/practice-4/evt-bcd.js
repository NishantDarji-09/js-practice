const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Event Bubbling
/* child.addEventListener("click",()=>{
    console.log("you clicked child");
})
parent.addEventListener("click",()=>{
    console.log("you clicked parent");
})
grandParent.addEventListener("click",()=>{
    console.log("you clicked grandparent");
}) */

// capture Event
/* parent.addEventListener("click",()=>{
    console.log("Captured parent");
}, true)
grandParent.addEventListener("click",()=>{
    console.log("Captured grandparent");
}, true) */

// Delegation Event
