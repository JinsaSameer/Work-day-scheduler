var hour9 = document.querySelector("#hour9");
var hour10 = document.querySelector("#hour10");
var hour11 = document.querySelector("#hour11");
var hour12 = document.querySelector("#hour12");
var hour1 = document.querySelector("#hour13");
var hour2 = document.querySelector("#hour14");
var hour3 = document.querySelector("#hour15");
var hour4 = document.querySelector("#hour16");

var hour5 = document.querySelector("#hour17");

var txtInput = document.querySelector("#txt1");
var txtInput2 = document.querySelector("#txt2");
var txtInput3 = document.querySelector("#txt3");
var txtInput4 = document.querySelector("#txt4");
var txtInput5 = document.querySelector("#txt5");
var txtInput6 = document.querySelector("#txt6");
var txtInput7 = document.querySelector("#txt7");
var txtInput8 = document.querySelector("#txt8");
var txtInput9 = document.querySelector("#txt9");



var currentTime = moment().hours();
console.log(currentTime,hour9.value);
if (9==currentTime)
{
  txtInput.setAttribute('class','present');
}
else if (9<currentTime)
{
  txtInput.setAttribute('class','past');
}
else if(9>currentTime)
{
  txtInput.setAttribute('class','future');
}

if (10==currentTime)
{
  txtInput2.setAttribute('class','present');
}
else if (10<currentTime)
{
  txtInput2.setAttribute('class','past');
}
else if(10>currentTime)
{
  txtInput2.setAttribute('class','future');
}

if (11==currentTime)
{
  txtInput3.setAttribute('class','present');
}
else if (11<currentTime)
{
  txtInput3.setAttribute('class','past');
}
else if(11>currentTime)
{
  txtInput3.setAttribute('class','future');
}

if (12==currentTime)
{
  txtInput4.setAttribute('class','present');
}
else if (12<currentTime)
{
  txtInput4.setAttribute('class','past');
}
else if(12>currentTime)
{
  txtInput4.setAttribute('class','future');
}

if (13==currentTime)
{
  txtInput5.setAttribute('class','present');
}
else if (13<currentTime)
{
  txtInput5.setAttribute('class','past');
}
else if(13>currentTime)
{
  txtInput5.setAttribute('class','future');
}

if (14==currentTime)
{
  txtInput6.setAttribute('class','present');
}
else if (14<currentTime)
{
  txtInput6.setAttribute('class','past');
}
else if(14>currentTime)
{
  txtInput6.setAttribute('class','future');
}

if (15==currentTime)
{
  txtInput7.setAttribute('class','present');
}
else if (15<currentTime)
{
  txtInput7.setAttribute('class','past');
}
else if(15>currentTime)
{
  txtInput7.setAttribute('class','future');
}

if (16==currentTime)
{
  txtInput8.setAttribute('class','present');
}
else if (16<currentTime)
{
  txtInput8.setAttribute('class','past');
}
else if(16>currentTime)
{
  txtInput8.setAttribute('class','future');
}

if (17==currentTime)
{
  txtInput9.setAttribute('class','present');
}
else if (18<currentTime)
{
  txtInput9.setAttribute('class','past');
}
else if(17>currentTime)
{
  txtInput9.setAttribute('class','future');
}

   //local storage for time 9
  var saveButton = document.getElementById("saveBtn1");
  saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create task object from submission
  var task = {
   txt1: txtInput.value
     
  };
  console.log(task);
  // set new submission to local storage 
  localStorage.setItem("task", JSON.stringify(task));
  console.log(task);
});

var storage = JSON.parse(localStorage.getItem("task"));
console.log(storage.txt1);
document.querySelector("#txt1").textContent = storage.txt1;

//Local storage for time 10

var saveButton = document.getElementById("saveBtn2");
saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create task object from submission
  var task2 = {
   txt2: txtInput2.value
  
    
  };
  console.log(task2);
  // set new submission to local storage 
  localStorage.setItem("task2", JSON.stringify(task2));
  console.log(task2);
});

var storage = JSON.parse(localStorage.getItem("task2"));
console.log(storage.txt2);
document.querySelector("#txt2").textContent = storage.txt2;

//local storage for time 11

var saveButton = document.getElementById("saveBtn3");
saveButton.addEventListener("click", function(event) {
event.preventDefault();

// create task object from submission
var task3 = {
 txt3: txtInput3.value
   
};
console.log(task3);
// set new submission to local storage 
localStorage.setItem("task3", JSON.stringify(task3));
console.log(task3);
});

var storage = JSON.parse(localStorage.getItem("task3"));
console.log(storage.txt3);
document.querySelector("#txt3").textContent = storage.txt3;

//local storage for hour 12
var saveButton = document.getElementById("saveBtn4");
    saveButton.addEventListener("click", function(event) {
    event.preventDefault();
  
  // create task object from submission
  var task4 = {
   txt4: txtInput4.value
     
  };
  console.log(task4);
  // set new submission to local storage 
  localStorage.setItem("task4", JSON.stringify(task4));
  console.log(task4);
});

var storage = JSON.parse(localStorage.getItem("task4"));
console.log(storage.txt4);
document.querySelector("#txt4").textContent = storage.txt4;

//localstorage for 1 pm

  saveButton = document.getElementById("saveBtn5");
  saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create task object from submission
  var task5 = {
   txt5: txtInput5.value
     
  };
  console.log(task5);
  // set new submission to local storage 
  localStorage.setItem("task5", JSON.stringify(task5));
  console.log(task5);
});

var storage = JSON.parse(localStorage.getItem("task5"));
console.log(storage.txt5);
document.querySelector("#txt5").textContent = storage.txt5;

//localstorage for time2
var saveButton = document.getElementById("saveBtn6");
  saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create task object from submission
  var task6 = {
   txt6: txtInput6.value
     
  };
  console.log(task6);
  // set new submission to local storage 
  localStorage.setItem("task6", JSON.stringify(task6));
  console.log(task6);
});

var storage = JSON.parse(localStorage.getItem("task6"));
console.log(storage.txt6);
document.querySelector("#txt6").textContent = storage.txt6;
//localstorage for time 3


  var saveButton = document.getElementById("saveBtn7");
  saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create task object from submission
  var task7 = {
   txt7: txtInput7.value
     
  };
  console.log(task7);
  // set new submission to local storage 
  localStorage.setItem("task7", JSON.stringify(task7));
  console.log(task7);
});

var storage = JSON.parse(localStorage.getItem("task7"));
console.log(storage.txt7);
document.querySelector("#txt7").textContent = storage.txt7;

//localstorage time for 4
 saveButton = document.getElementById("saveBtn8");
  saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create task object from submission
  var task8 = {
   txt8: txtInput8.value
     
  };
  console.log(task8);
  // set new submission to local storage 
  localStorage.setItem("task8", JSON.stringify(task8));
  console.log(task8);
});

var storage = JSON.parse(localStorage.getItem("task8"));
console.log(storage.txt8);
document.querySelector("#txt8").textContent = storage.txt8;
//localstorage for time 5

saveButton = document.getElementById("saveBtn9");
  saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create task object from submission
  var task9 = {
   txt9: txtInput9.value
     
  };
  console.log(task9);
  // set new submission to local storage 
  localStorage.setItem("task9", JSON.stringify(task9));
  console.log(task9);
});

var storage = JSON.parse(localStorage.getItem("task9"));
console.log(storage.txt9);
document.querySelector("#txt9").textContent = storage.txt9;


//current time
var today = moment().format("MMMM  Do  YYYY");
$("#currentDay").text(today);
console.log(today);


//Time interval


