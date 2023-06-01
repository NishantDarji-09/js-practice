const addButton = document.getElementById("add");
const showButton = document.getElementById("show");
addButton.addEventListener('click', ()=>{
    myLabel = document.getElementById("label");
    myData = document.getElementById("userData");
    
    if(myLabel.value != "" && myData.value != ""){
    var array = [[`${myLabel.value}`, `${myData.value}`]]
    let table = document.getElementById("myTable");

    for(var i = 0; i < array.length; i++)
        {
            var newRow = table.insertRow(table.length);
            for(var j = 0; j < array[i].length; j++)
            {
                var cell = newRow.insertCell(j);
                cell.innerHTML = array[i][j];
            }
        }

    // alert("Your Data is Added Successfully");
    myLabel.value = "";
    myData.value = "";
    console.log("Data Added Successfuly");
    }
    else{
        alert("Empty Fields are Not Accepted!\nPlease Enter Details First.");
    }
});

showButton.addEventListener('click', ()=>{
    var mytable = document.getElementById('myTable');
    if(mytable.style.display == 'block'){
        mytable.style.display = 'none';
        showButton.value="Show";
        console.log("Data is Invisible Now")
    }
    else{
        mytable.style.display = 'block';
        showButton.value="Hide";
        console.log("Data is Visible Now")
    }
});