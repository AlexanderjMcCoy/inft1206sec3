console.log("Hello World");

function ShowGreeting() {   
    let name = window.prompt("Please Enter Your Name Here: ");
    window.alert("Hey " + name);
}

// ShowGreeting(); 

// document.querySelector("#btn").addEventListener("click", ShowGreeting);
// let b = document.querySelector("#btn");
// console.log(b);
document.querySelector("#btn").addEventListener('click', ShowGreeting);
console.log("Hello World");
