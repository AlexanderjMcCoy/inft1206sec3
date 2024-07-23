function multiplyNumbers() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let result = num1 * num2;
    document.querySelector('#result').textContent = 'Result: ' + result;

}
document.querySelector('#result').addEventListener("click", multiplyNumbers);