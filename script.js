// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //this variable is used for the date display
  var today = document.querySelector('#currentDay');

  // this is an ex of trying to do all classes at once
  var save = document.querySelector('.saveBtn');
  var toDoText = document.querySelector('.description');
  var toDos = localStorage.getItem("toDos");
  toDoText.textContent = toDos;

// this is an example of using ids for each individual piece
  // var save10 = document.querySelector('#btn10');
  // var textin10 = document.querySelector('#text10');
  // var todo10 = localStorage.getItem("todo10");
  // textin10.textContent = todo10;



  



  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?



  text12 = document.querySelector('#hour-12');
  var nm12 = '12';

  function timeCheck12() {
    if (nm12 < dayjs().format('H')) {
      document.getElementById('#hour-12').className = 'past row time-block';
      // document.getElementById('#hour-12').setAttribute('class', '.future');
      return
    }
    else if (nm12 == dayjs().format('H')) {
      document.getElementById('#hour-12').className = 'present row time-block';   
      return   
    }
    else if (nm12 > dayjs().format('H')){
      document.querySelector('#hour-12').className = 'future row time-block';
      return
    }
  }

  timeCheck12();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  save.addEventListener("click", function() {
    toDoText.textContent = toDos;
    localStorage.setItem("toDos", toDos);
  }); 




  // save10.addEventListener("click", function() {
  //   textin10.textContent = todo10;
  //   localStorage.setItem("todo10", JSON.stringify(todo10));
  //   render10();
  // });

  // function render10() {
  //   var display10 = JSON.parse(localStorage.getItem("todo10"));
  //   textin10.textContent = display10;
  //   // textin10.textContent = JSON.parse(localStorage.getItem("todo10"));
  // }

  // TODO: Add code to display the current date in the header of the page.
  today.textContent = dayjs().format('MMMM D, YYYY');

});

// use - window.localStorage.clear(); to clear all the local for testing.