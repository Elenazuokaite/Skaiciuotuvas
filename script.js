var result = "0";//pradinis
var action = "0";//veiksmo kintamasis
var number = "0";
var operation = "";
var lastResult = "0";

window.onload = function() {
document.getElementById("result").innerHTML = result;
};

function digitLimit() {
    if(action.length > 8) {
        alert("Pasiektas įvesties limitas");
        return true;
    }

        return false;
    
}
function clearResult() {
    result = "0";
    lastResult = "0"
    action = result;
    dots = 0;
    document.getElementById("result").innerHTML = result;
};


function numberInput(number) {
    if(digitLimit()) {
        return false;
    };
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

    lastResult = parseFloat(lastResult);
    if(lastResult != "") {
        result = lastResult;
    }

    if (operation == "plus") {
        lastResult = parseFloat(result) + parseFloat(action);
    } else if (operation == "minus") {
        lastResult = parseFloat(result) - parseFloat(action);
    } else if (operation == "divide") {
        lastResult = parseFloat(result) / parseFloat(action);
    } else if (operation == "multiple") {
        lastResult = parseFloat(result) * parseFloat(action);
    } else if (operation == "percent") {
        lastResult = parseFloat(result) * (parseFloat(action) / 100);
    } else {
        lastResult = "0";
    }
    document.getElementById("result").innerHTML = lastResult;
}
