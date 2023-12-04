let countDisplay = document.querySelector('#countDisplay');
const count = document.querySelector('#count');
const reset = document.querySelector('#reset');
const automate = document.querySelector('#automate');
const stopAuto = document.querySelector('#stop');

count.addEventListener('click', countFunction);

// Checks the local storage if there's a value

if (localStorage.getItem('counter')) {
    countDisplay.innerText = localStorage.getItem('counter');
}
else {
    localStorage.setItem('counter', 0);
}

///////////////////////////////////////////////////

// Count Function

function countFunction() {
    let counter = localStorage.getItem('counter');
    counter++;
    countDisplay.innerText = counter;
    localStorage.setItem('counter', counter);

    if (counter % 10 == 0) {
        alert(`Count is now ${counter}`);
    }
}
///////////////////////////////////////////////////



reset.addEventListener('click', resetFunction);

// Reset Function

function resetFunction() {
    localStorage.setItem('counter', 0);
    countDisplay.innerText = localStorage.getItem('counter');

}

////////////////////////////////////////////////////

automate.addEventListener('click', automateFunction)

// Automatic Counting Function
let interval;

function automateFunction() {
    interval = setInterval(countFunction, 1000);
}

////////////////////////////////////////////////////

stopAuto.addEventListener('click', stopFunction);

// Stops Automate Function

function stopFunction() {
    clearInterval(interval);
}


//////////////////////////////////////////////////

// NOTES:
// I can still improve this project by increasing the scope of numbers
// By including negative numbers.
// And start counting increase or decrease automatically.
