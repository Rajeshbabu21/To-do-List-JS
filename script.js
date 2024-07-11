
// this is obj becoz group of value to store
// from the local sstorage or default
let arr = JSON.parse(localStorage.getItem("todos")) || [{
  name:"rajesh",
  date:"12-08-2004"
},
{
  name : "ramesh",
  date : "12-08-2004"
}];


// initial content ot dispaly
to();



function to()
{

let todos = "";   // accumulator pattern
for(let i = 0;i<arr.length;i++)
{
  const uobj = arr[i]; // whole array
  const name = uobj.name;
  const date = uobj.date


  const html = 
  `<div>${name}</div>
   <div>${date} </div> 

  <button 
  onclick = "

  arr.splice(${i},1)
  to();
  updateLocalStorage();

  
  
  ">delete</button>`;

   // used to combine the html
  todos += html;
  
}
// console.log(todos)

// to dispaly
document.querySelector(".rajesh").innerHTML = todos;

// console.log(localStorage.getItem("message"))
}

// to get the value and store in the array
function todo()
{
  

// getting the input element
  const inp = document.querySelector(".input-name")
  
  // getting the date input
  const inp1 = document.querySelector(".ram");
  
  
  // initial value is null button dsiable
  if(inp.value === "" && inp1.value === "")
  {
    button.disable();
}

// date
  const p1 = inp1.value

  // name
  const p = inp.value;
  
  // pushing the elemnt to the last
  arr.push({
    name:p,
    date:p1
  });
  
  
  
  // after pushing the value becomes null
  inp.value = ""
  inp1.value = ""

  // after the event is happened to disaply
  to();

  // after the local storage
  updateLocalStorage();
  



  
  
  
  

}



// Update localStorage with the current state of the array
function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(arr)); // <-- This function is added
}

