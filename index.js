function init(){
    document.getElementById("inputAddress").style.display = "none";
    document.getElementById("outputResult").style.display = "none";
    document.getElementById("book").style.display = "none";
}

function display(){
    document.querySelector(".containt").style.display = "none";
    var input = document.getElementById("inputAddress");
    input.style.display = "block";
    input.style.animation = "backInUp";
    input.style.animationDuration = "2s";
}

function confirm(){
    var ttp = document.getElementById("ttp");
    var qh = document.getElementById("qh");
    var px = document.getElementById("px");
    var dcct = document.getElementById("dcct");
    if(ttp.value != "" && qh.ivalue != "" && px.value != "" && dcct.value != "")
    {
        document.getElementById("inputAddress").style.display = "none";
        var output = document.getElementById("outputResult");
        output.style.display = "block";
        output.style.animation = "backInUp";
        output.style.animationDuration = "2s";
    }
}