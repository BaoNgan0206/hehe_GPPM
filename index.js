function init(){
    document.getElementById("inputAddress").style.display = "none";
    document.getElementById("outputResult").style.display = "none";
    document.getElementById("book").style.display = "none";
}

function display(){
    document.getElementById("inputAddress").style.display = "block";
}

function confirm(){
    var ttp = document.getElementById("ttp");
    var qh = document.getElementById("qh");
    var px = document.getElementById("px");
    var dcct = document.getElementById("dcct");
    if(ttp.value != "" && qh.ivalue != "" && px.value != "" && dcct.value != "")
    {
        document.getElementById("outputResult").style.display = "block";
    }
}