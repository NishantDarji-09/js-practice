/* const changeText = document.getElementById("manageTask");
console.log(changeText.textContent);
console.log(changeText.innerText);
console.log(changeText.innerHTML);
// changeText.innerText = "Your text is changed";
// console.log(changeText.innerText); */

/* const changeStyle = document.getElementById("manageTask");
changeStyle.style.color="red"; */

// Get and Set Attribute
/* const attribute = document.querySelector(".todo");
console.log(attribute.getAttribute("href").slice(1)); */


/* const attribute = document.querySelector("input");
console.log(attribute.getAttribute("placeholder"));
attribute.setAttribute("placeholder", "Todo Added");
console.log(attribute.getAttribute("placeholder")); */

// get multiple elements using getElements by class name
// get multiple elements using querySelectorAll

/* // const element = document.getElementsByClassName("a");
const element = document.getElementsByTagName("a");
for(let i = 0; i < element.length; i++){
    const change = element[i];
    change.style.backgroundColor = "darkgreen";
    change.style.color = "darkorange";
} */

// convert HTMLcollection to Array Use Array.from() method  <------------

// working with NodeLists <---------------------

/* let items = document.querySelectorAll('a');
console.log(items); */


/* const hideButton = document.querySelector(".add-todo");
const hideElement = document.querySelector('.todo-text');
hideButton.addEventListener('click',(pressed)=>{
    if(pressed){
    hideElement.classList.toggle('show');
    }
    else{
        // if(hideElement.classList.contains('show')){
        // hideElement.classList.remove('show');
        console.error("something went wrong");
        // }
    }
}) */

/* innerHTML = You can see all Elements 
innerText = see only visibled content on display
textContent = see also that content which are present but hide */

/* const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
// todoList.innerHTML = todoList.innerHTML + "<li>Todo 2</li>";
const newTodo = document.createElement("li");
newTodo.textContent = "Todo 2";
todoList.prepend(newTodo); */


/* const todo1 = document.querySelector(".todo-list li");
todo1.remove(); */ 

// elem.insertAdjacentHTML (where, html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;

/* const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend", "<li>Todo 2</li>"); */

// clone nodes 
/* const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent="Todo 2";
// const newLi = li.cloneNode(); // <--- clone element without childs
const newLi = li.cloneNode(true); // <--- clone element with childs
ul.append(li);
ul.prepend(newLi); */

// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild
/* const ul = document.querySelector(".todo-list");
// new element
const li = document.createElement("li");
li.textContent = "new todo";
const referenceNode = document.querySelector(".first-todo");
// ul.replaceChild(li, referenceNode);
// ul.removeChild(referenceNode); */


// static list vs live list

// ---> static List give us a NodeList
/* const listItems = document.querySelectorAll(".todo-list li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "Item 6";
const ul = document.querySelector(".todo-list");
ul.append(sixthLi);
console.log(listItems); */

// ---> liver Lst give us a HTMLCollection List
/* const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
ul.append(sixthLi);
console.log(listItems); */

// get the Dimension of Element ---- getBoundingClientRect method
/* const sectionTodo = document.querySelector(".todo-section");
const info = sectionTodo.getBoundingClientRect();
const info = sectionTodo.getBoundingClientRect().height; <-- get only height
console.log(info); */


// Events

// Click Event 
/* const hideButton = document.querySelector(".add-todo");
const hideElement = document.querySelector('.todo-text');
hideButton.addEventListener('click',(pressed)=>{
    if(pressed){
    hideElement.classList.toggle('show');
    }
    else{
        // if(hideElement.classList.contains('show')){
        // hideElement.classList.remove('show');
        console.error("something went wrong");
        // }
    }
}) */

// KeyPress Event 
/* const body = document.body;
body.addEventListener('keypress',(k)=>{
    console.log(k.key);
}) */

// MouseOver Event
/* const mainbutton = document.querySelector(".btn-headline");
mainbutton.addEventListener('mouseover', ()=>{
    console.log("Mouseover event fired");
})
// MouseLeave Event
mainbutton.addEventListener('mouseleave', ()=>{
    console.log("Mouseleave event fired");
}) */

// Todo project Started
const todoForm = document.querySelector(".todo-form");
const todoText = document.querySelector(".todo-form input[type='text']");
const todoList = document.querySelector(".todo-list")

todoForm.addEventListener("submit",(submit)=>{
    submit.preventDefault();
    const newTodoText = todoText.value;
    const newLi = document.createElement("li");
    newLi.innerHTML = `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
    todoList.prepend(newLi);
    todoText.value = "";
})

todoList.addEventListener('click', (clicked)=>{
    // console.log(clicked.target);
    const newClicked = clicked.target;
    if(newClicked.classList.contains("done")){
        const liDone = newClicked.parentNode.previousElementSibling;
        liDone.style.cssText = "color: lightgreen; text-decoration: line-through;"
    }
    else if(newClicked.classList.contains("remove")){
        const liRemove = newClicked.parentNode.parentNode;
        liRemove.remove();
    }
    else{
        return;
    }
})