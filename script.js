var result = "0";//pradinis
var action = "";//veiksmo kintamasis
var number = "";
var operation = "";


window.onload = function() {
document.getElementById("result").innerHTML = result;
};

function clearResult() {
    result = "0";
    action = result;
    dots = 0;
    document.getElementById("result").innerHTML = result;
};


function numberInput(number) {
    if (action == "0" || action == "") {
        action = number;
        document.getElementById("result").innerHTML = action;
    } else {
        action = action + "" + number;
    
        document.getElementById("result").innerHTML = action;

    }
}
function plusNumbers() {
    result = action;
    action = "";
    operation = "plus";
    dots = 0;
    document.getElementById("result").innerHTML = "+";
}
function minusNumber() {
    result = action;
    action = "";
    dots = 0;
    operation = "minus";
    document.getElementById("result").innerHTML = "-";
}
function divideNumber() {
    result = action;
    action = "";
    dots = 0;
    operation = "divide";
    document.getElementById("result").innerHTML = "/";
}
function multipleNumber() {
    result = action;
    action = "";
    dots = 0;
    operation = "multiple";
    document.getElementById("result").innerHTML = "*";
}
function percentNumber() {
    result = action;
    action = "";
    dots = 0;
    operation = "percent";
    document.getElementById("result").innerHTML = "%";
}

function backSpace() {
    var numberLength = action.length - 1;
    if (numberLength > -1) {
        action = action.substring(0, numberLength);
    }
    if (action == "") {
        action = 0;
    }
    document.getElementById("result").innerHTML = action;
}

var dots = 0;
function addDot() {
    if(dots == 0) {
        dots += 1;
        action = action + ".";
        document.getElementById("result").innerHTML = action;
    }

}

function showResult() {
    if (operation == "plus") {
        result = parseFloat(result) + parseFloat(action);
    } else if (operation == "minus") {
        result = parseFloat(result) - parseFloat(action);
    } else if (operation == "divide") {
        result = parseFloat(result) / parseFloat(action);
    } else if (operation == "multiple") {
        result = parseFloat(result) * parseFloat(action);
    } else if (operation == "percent") {
        result = parseFloat(result) * (parseFloat(action) / 100);
    }
    document.getElementById("result").innerHTML = result;
}
