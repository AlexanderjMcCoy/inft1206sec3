

function showoutput () {
    console.log("Hello")
    let name = document.querySelector("first-name").ariaValueMax;
    document.querySelector('#output').textContent = "hello" + name;
    document.querySelector('#output').style.color = "blue";
}

document.querySelector("#btn").addEventListener("click", showoutput);