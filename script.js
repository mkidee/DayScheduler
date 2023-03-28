// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

  // this jquery function is going to call each time block from the html, 
  // and then take the 'children' inside each one which will be the text entered,
  // after that, the local storage is going to receive that text entered and turn it 
  // into the variable stored in the local storage
  $(".time-block").each(function(){
    $(this).children(".description").val(localStorage.getItem($(this).attr("id")));
  })

  $(".saveBtn").on("click", function(){
    let timeSlot = $(this).parent().attr("id");
    let timeText = $(this).siblings(".description").val();

    // console.log("Time slot: " + timeSlot + " || Text entered: " + timeText);

    localStorage.setItem(timeSlot, timeText);
  })

// the following variables and functions on repeat are individual to each time slot
// ensuring that they each do their job- changing color depending the hour- comparing
// their respective number value to the real time hour value

  var nm9 = '09';
  var text9 = document.querySelector('#hour-9');

  function timeCheck9() {
    if (nm9 < dayjs().format('HH')) {
      text9.classList.add('past')
      return
    }
    else if (nm9 === dayjs().format('HH')) {
      text9.classList.add('present')
      return   
    }
    else if (nm9 > dayjs().format('HH')){
      text9.classList.add('future')
      return
    }
  }

  var text10 = document.querySelector('#hour-10');
  var nm10 = '10';

  function timeCheck10() {
    if (nm10 < dayjs().format('HH')) {
      text10.classList.add('past')
      return
    }
    else if (nm10 === dayjs().format('HH')) {
      text10.classList.add('present')
      return   
    }
    else if (nm10 > dayjs().format('HH')){
      text10.classList.add('future')
      return
    }
  }

  var text11 = document.querySelector('#hour-11');
  var nm11 = '11';

  function timeCheck11() {
    if (nm11 < dayjs().format('HH')) {
      text11.classList.add('past')
      // document.getElementById('#hour-12').className = 'past row time-block';
      // document.getElementById('#hour-12').setAttribute('class', '.future');
      return
    }
    else if (nm11 === dayjs().format('HH')) {
      text11.classList.add('present')
      // document.getElementById('#hour-12').className = 'present row time-block';   
      return   
    }
    else if (nm11 > dayjs().format('HH')){
      text11.classList.add('future')
      // document.querySelector('#hour-12').className = 'future row time-block';
      return
    }
  }

  var text12 = document.querySelector('#hour-12');
  var nm12 = '12';

  function timeCheck12() {
    if (nm12 < dayjs().format('HH')) {
      text12.classList.add('past')
      // document.getElementById('#hour-12').className = 'past row time-block';
      // document.getElementById('#hour-12').setAttribute('class', '.future');
      return
    }
    else if (nm12 === dayjs().format('HH')) {
      text12.classList.add('present')
      // document.getElementById('#hour-12').className = 'present row time-block';   
      return   
    }
    else if (nm12 > dayjs().format('HH')){
      text12.classList.add('future')
      // document.querySelector('#hour-12').className = 'future row time-block';
      return
    }
  }

  var text13 = document.querySelector('#hour-1');
  var nm13 = '13';

  function timeCheck13() {
    if (nm13 < dayjs().format('HH')) {
      text13.classList.add('past')
      // document.getElementById('#hour-12').className = 'past row time-block';
      // document.getElementById('#hour-12').setAttribute('class', '.future');
      return
    }
    else if (nm13 === dayjs().format('HH')) {
      text13.classList.add('present')
      // document.getElementById('#hour-12').className = 'present row time-block';   
      return   
    }
    else if (nm13 > dayjs().format('HH')){
      text13.classList.add('future')
      // document.querySelector('#hour-12').className = 'future row time-block';
      return
    }
  }

  var text14 = document.querySelector('#hour-2');
  var nm14 = '14';

  function timeCheck14() {
    if (nm14 < dayjs().format('HH')) {
      text14.classList.add('past')
      // document.getElementById('#hour-12').className = 'past row time-block';
      // document.getElementById('#hour-12').setAttribute('class', '.future');
      return
    }
    else if (nm14 === dayjs().format('HH')) {
      text14.classList.add('present')
      // document.getElementById('#hour-12').className = 'present row time-block';   
      return   
    }
    else if (nm14 > dayjs().format('HH')){
      text14.classList.add('future')
      // document.querySelector('#hour-12').className = 'future row time-block';
      return
    }
  }

  var text15 = document.querySelector('#hour-3');
  var nm15 = '15';

  function timeCheck15() {
    if (nm15 < dayjs().format('HH')) {
      text15.classList.add('past')
      // document.getElementById('#hour-12').className = 'past row time-block';
      // document.getElementById('#hour-12').setAttribute('class', '.future');
      return
    }
    else if (nm15 === dayjs().format('HH')) {
      text15.classList.add('present')
      // document.getElementById('#hour-12').className = 'present row time-block';   
      return   
    }
    else if (nm15 > dayjs().format('HH')){
      text15.classList.add('future')
      // document.querySelector('#hour-12').className = 'future row time-block';
      return
    }
  }

  var text16 = document.querySelector('#hour-4');
  var nm16 = '16';

  function timeCheck16() {
    if (nm16 < dayjs().format('HH')) {
      text16.classList.add('past')
      // document.getElementById('#hour-12').className = 'past row time-block';
      // document.getElementById('#hour-12').setAttribute('class', '.future');
      return
    }
    else if (nm16 === dayjs().format('HH')) {
      text16.classList.add('present')
      // document.getElementById('#hour-12').className = 'present row time-block';   
      return   
    }
    else if (nm16 > dayjs().format('HH')){
      text16.classList.add('future')
      // document.querySelector('#hour-12').className = 'future row time-block';
      return
    }
  }

  var text17 = document.querySelector('#hour-5');
  var nm17 = '17';

  function timeCheck17() {
    if (nm17 < dayjs().format('HH')) {
      text17.classList.add('past')
      // document.getElementById('#hour-12').className = 'past row time-block';
      // document.getElementById('#hour-12').setAttribute('class', '.future');
      return
    }
    else if (nm17 === dayjs().format('HH')) {
      text17.classList.add('present')
      // document.getElementById('#hour-12').className = 'present row time-block';   
      return   
    }
    else if (nm17 > dayjs().format('HH')){
      text17.classList.add('future')
      // document.querySelector('#hour-12').className = 'future row time-block';
      return
    }
  }

  // these function calls are just making sure the text areas actually change colors
  // depending on their comparison to the real time

  timeCheck9();
  timeCheck10();
  timeCheck11();
  timeCheck12();
  timeCheck13();
  timeCheck14();
  timeCheck15();
  timeCheck16();
  timeCheck17();

  //this variable is used for the date display
  var today = document.querySelector('#currentDay');

  today.textContent = dayjs().format('MMMM D, YYYY');
});

// use - window.localStorage.clear(); to clear all the local for testing.
