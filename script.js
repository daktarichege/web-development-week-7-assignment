
// global variable example
let count = 0;

// function with parameter + return value
function square(num) {
    return num * num;
}

// function showing global vs local scope
function addToCount(x) {
    count = count + x; // changes global variable
    return count;
}

// function to toggle css animation class
function toggleBox(id) {
    let box = document.getElementById(id);
    box.classList.toggle("active");
}

// Combine JS + CSS

let btn = document.getElementById("clickBtn");

btn.addEventListener("click", function() {
    console.log("Square of 4 is:", square(4));
    console.log("Global count is now:", addToCount(1));

    toggleBox("jsBox");
});
