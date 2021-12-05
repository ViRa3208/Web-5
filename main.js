window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("but1");
    b.addEventListener("click", calculate);
});

function calculate() {
    var type, count, result;
    type = document.getElementById('type').value;
    count = document.getElementById('count').value;
    type = parseInt(type);
    count = parseInt(count);
    if (!(Number.isInteger(type) && Number.isInteger(count))) {
        alert("Укажите числа");
    } else if ((count <= 0) || (count > 1000000)) {
        alert("Error");
    } else if (type < 0 || type > 1000000) {
        alert("Error");
    } else {
        result = type * count;
        console.log("type");
        console.log(type);
        console.log("count");
        console.log(count);
        console.log("result");
        console.log(result);
        document.getElementById('sum').innerHTML = "Сумма равна: " + result + " руб.";
    }
}