/* Steps for this project (JavaScript):
1. get the current hour from moment.js, get it in 24hour format (easier to compare)
2. compare every block to the current hour using moment.js (loop through every block)
if the hour block is:
current (equal to): red
future (greater than current): green
past (less than current): grey
3. adding event listeners to every button on page, then extract the value of the textarea entered by the user, thus saving in the localStorage
4. adding localStorage.getItem in the hourBlockEl and link to the id of the textarea to input what's saved in it.
*/

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
    //storing the data into the local storage.
   localStorage.setItem(currentTextId, userText);
}

//adding event listener for every save button by calling the saveFunction
for (let i=0; i<saveBtnEl.length; i++){
    saveBtnEl[i].addEventListener('click', saveFunction)
}


