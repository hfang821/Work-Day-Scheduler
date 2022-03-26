//1. get the current hour from moment.js, get it in 24hour format (easier to compare)
//2. compare every block to the current hour (loop through every block)
//if the hour block is:
//current (equal to): red
//future (greater than current): green
//past (less than current): grey

var currentTime = moment().format('MMMM Do YYYY, h:mm a');
var currentTimeEl = document.getElementById('currentDay');
var currentHour = moment().hours();
var hourBlockEl = document.querySelectorAll(".description");
var saveBtnEl = document.querySelectorAll(".saveBtn");



currentTimeEl.innerHTML=currentTime;


for(let i=0; i<hourBlockEl.length; i++){

    var blockHour = Number(hourBlockEl[i].id);

    if(blockHour===currentHour) {
        hourBlockEl[i].classList.add('present')
    } else if (blockHour>currentHour) {
        hourBlockEl[i].classList.add('future');
    } else {
        hourBlockEl[i].classList.add('past');
    } 

    
   var getValue = localStorage.getItem(hourBlockEl[i].id);

   hourBlockEl[i].value = getValue;

}

var saveFunction = function (event) {
    // this is value of the textarea.
   var userText = event.target.previousElementSibling.value;
   //this is targeting the id of the textarea element (because it is the sibling element to the button element, which is event.target in this function)
   var currentTextId = event.target.previousElementSibling.id;

   localStorage.setItem(currentTextId, userText);
}

for (let i=0; i<saveBtnEl.length; i++){
    saveBtnEl[i].addEventListener('click', saveFunction)
}


