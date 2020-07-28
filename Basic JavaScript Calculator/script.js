function calc(){
    var value1 = parseInt(document.querySelector("#value1").value);

    var value2 = parseInt(document.querySelector("#value2").value);

    var opert = document.querySelector("#operator").value;

    var calculate;

    if(opert == "add"){
        calculate = value1 + value2;
    }else if(opert == "min"){
        calculate = value1 - value2;
    }else if(opert == "div"){
        calculate = value1 / value2;
    }else{
        calculate = value1 * value2;
    }

    document.querySelector("#results").innerHTML = calculate;
}


