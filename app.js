var exp = "";
var len = 0;
function but(val) {
    var text = document.getElementById("screen");
    len++;
    if(val != '+' && val != '*' && val != '-' && val != '/' ){
        if (len <= 8) {
            exp += val;
            if (val != 'c') {
                text.value += val;
            } else {
                text.value = "";
                exp = "";
            }
        }
    }else{
        exp += val;
        text.value += val;
        len=0;
    }
}

function del() {
    exp = exp.slice(0, -1);
    var text = document.getElementById("screen");
    text.value = exp;

}
function cal() {
    console.log(eval(exp));
    if (eval(exp) != "infinity") {
        exp = eval(exp);
        exp = Math.round(exp * 100 + Number.EPSILON) / 100;
        var text = document.getElementById("screen");
        text.value = exp;
        exp = text.value;
        len = 0;
    } else {
        alert("Invalid input");
    }
}