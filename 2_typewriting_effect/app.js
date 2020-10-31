const texts = ['JavaScript', 'CSS', 'React', 'NodeJS'];
//let count -> looks at each individual index in array
let count = 0;
// index -> keeps track of individual letters
let index = 0;
let currentText = '';
let letter = '';

//we'll use IIFE to run immediately
(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, index++);
  //letter -> n-o-d-e-J-S
  document.querySelector('.typing').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  //here we can change the speed
  setTimeout(type, 400);
})();
