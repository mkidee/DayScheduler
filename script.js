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
  


// the following variables and functions on repeat are individual to each time slot
// ensuring that they each do their job- changing color depending the hour- comparing
// their respective number value to the real time hour value

  var text9 = document.querySelector('#hour-9');
  var nm9 = '09';

  function timeCheck9() {
    if (nm9 < dayjs().format('H')) {
      text9.classList.add('past')
      return
    }
    else if (nm9 === dayjs().format('H')) {
      text9.classList.add('present')
      return   
    }
    else if (nm9 > dayjs().format('H')){
      text9.classList.add('future')
      return
    }
  }

  var text10 = document.querySelector('#hour-10');
  var nm10 = '10';

  function timeCheck10() {
    if (nm10 < dayjs().format('H')) {
      text10.classList.add('past')
      return
    }
    else if (nm10 === dayjs().format('H')) {
      text10.classList.add('present')
      return   
    }
    else if (nm10 > dayjs().format('H')){
      text10.classList.add('future')
      return
    }
  }

  var text11 = document.querySelector('#hour-11');
  var nm11 = '11';

  function timeCheck11() {
    if (nm11 < dayjs().format('H')) {
      text11.classList.add('past')
      // document.getElementById('#hour-12').className = 'past row time-block';
      // document.getElementById('#hour-12').setAttribute('class', '.future');
      return
    }
    else if (nm11 === dayjs().format('H')) {
      text11.classList.add('present')
      // document.getElementById('#hour-12').className = 'present row time-block';   
      return   
    }
    else if (nm11 > dayjs().format('H')){
      text11.classList.add('future')
      // document.querySelector('#hour-12').className = 'future row time-block';
      return
    }
  }

  var text12 = document.querySelector('#hour-12');
  var nm12 = '12';

  function timeCheck12() {
    if (nm12 < dayjs().format('H')) {
      text12.classList.add('past')
      // document.getElementById('#hour-12').className = 'past row time-block';
      // document.getElementById('#hour-12').setAttribute('class', '.future');
      return
    }
    else if (nm12 === dayjs().format('H')) {
      text12.classList.add('present')
      // document.getElementById('#hour-12').className = 'present row time-block';   
      return   
    }
    else if (nm12 > dayjs().format('H')){
      text12.classList.add('future')
      // document.querySelector('#hour-12').className = 'future row time-block';
      return
    }
  }

  var text13 = document.querySelector('#hour-1');
  var nm13 = '13';

  function timeCheck13() {
    if (nm13 < dayjs().format('H')) {
      text13.classList.add('past')
      // document.getElementById('#hour-12').className = 'past row time-block';
      // document.getElementById('#hour-12').setAttribute('class', '.future');
      return
    }
    else if (nm13 === dayjs().format('H')) {
      text13.classList.add('present')
      // document.getElementById('#hour-12').className = 'present row time-block';   
      return   
    }
    else if (nm13 > dayjs().format('H')){
      text13.classList.add('future')
      // document.querySelector('#hour-12').className = 'future row time-block';
      return
    }
  }

  var text14 = document.querySelector('#hour-2');
  var nm14 = '14';

  function timeCheck14() {
    if (nm14 < dayjs().format('H')) {
      text14.classList.add('past')
      // document.getElementById('#hour-12').className = 'past row time-block';
      // document.getElementById('#hour-12').setAttribute('class', '.future');
      return
    }
    else if (nm14 === dayjs().format('H')) {
      text14.classList.add('present')
      // document.getElementById('#hour-12').className = 'present row time-block';   
      return   
    }
    else if (nm14 > dayjs().format('H')){
      text14.classList.add('future')
      // document.querySelector('#hour-12').className = 'future row time-block';
      return
    }
  }

  var text15 = document.querySelector('#hour-3');
  var nm15 = '15';

  function timeCheck15() {
    if (nm15 < dayjs().format('H')) {
      text15.classList.add('past')
      // document.getElementById('#hour-12').className = 'past row time-block';
      // document.getElementById('#hour-12').setAttribute('class', '.future');
      return
    }
    else if (nm15 === dayjs().format('H')) {
      text15.classList.add('present')
      // document.getElementById('#hour-12').className = 'present row time-block';   
      return   
    }
    else if (nm15 > dayjs().format('H')){
      text15.classList.add('future')
      // document.querySelector('#hour-12').className = 'future row time-block';
      return
    }
  }

  var text16 = document.querySelector('#hour-4');
  var nm16 = '16';

  function timeCheck16() {
    if (nm16 < dayjs().format('H')) {
      text16.classList.add('past')
      // document.getElementById('#hour-12').className = 'past row time-block';
      // document.getElementById('#hour-12').setAttribute('class', '.future');
      return
    }
    else if (nm16 === dayjs().format('H')) {
      text16.classList.add('present')
      // document.getElementById('#hour-12').className = 'present row time-block';   
      return   
    }
    else if (nm16 > dayjs().format('H')){
      text16.classList.add('future')
      // document.querySelector('#hour-12').className = 'future row time-block';
      return
    }
  }

  var text17 = document.querySelector('#hour-5');
  var nm17 = '17';

  function timeCheck17() {
    if (nm17 < dayjs().format('H')) {
      text17.classList.add('past')
      // document.getElementById('#hour-12').className = 'past row time-block';
      // document.getElementById('#hour-12').setAttribute('class', '.future');
      return
    }
    else if (nm17 === dayjs().format('H')) {
      text17.classList.add('present')
      // document.getElementById('#hour-12').className = 'present row time-block';   
      return   
    }
    else if (nm17 > dayjs().format('H')){
      text17.classList.add('future')
      // document.querySelector('#hour-12').className = 'future row time-block';
      return
    }
  }

  timeCheck9();
  timeCheck10();
  timeCheck11();
  timeCheck12();
  timeCheck13();
  timeCheck14();
  timeCheck15();
  timeCheck16();
  timeCheck17();



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

  //this variable is used for the date display
  var today = document.querySelector('#currentDay');

  today.textContent = dayjs().format('MMMM D, YYYY');
});

// use - window.localStorage.clear(); to clear all the local for testing.