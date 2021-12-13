let increaseCount = document.querySelector(".counter");
let changeText = document.querySelector(".person-text");
let newText = "people";
let oldText = "person";

let count = 0;

function increment() {
    count += 1;
    increaseCount.textContent = count;

    if(count >= 3) {
        changeText.textContent = newText;
    } else if (count === 2) {
        changeText.textContent = newText;
    } else {
        changeText.innerText = oldText;
    }
}

function decrement() {
    if(count > 0) {
    count -= 1
    increaseCount.textContent = count;
    }

    if(count === 2) {
        changeText.textContent = newText;
    } else if(count <= 1) {
        changeText.textContent = oldText; 
    } 
}

function submit() {
    let name = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    if (name.length <3) {
        let validate = document.querySelector(".valid");
        alert("name has a length less than 3");
        return;
    }
    console.log("name", name);
}

let btn = document.querySelector("#submit");
console.log(btn);
btn.addEventListener("click", submit);
// incrementBtn.addEventListener("click", increment)
// decrementBtn.addEventListener("click", decrement)
