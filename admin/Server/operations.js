function addtotable() {
    var markid = document.getElementById("markid2").value;
    var name = document.getElementById("markname").value;
    var desc = document.getElementById("markdesc").value;
    var merch = document.getElementById("markmerch").value;
    var url = "http://127.0.0.1:5500" + "/add/" + markid + "/" + name + "/" + desc  + "/" + merch;
    var open = window.open(url, "_blank");
    if (open) {location.reload(); }
    else if (!open) { console.log("window.open failed"); }
}


function deletefrom() {
    var markid = document.getElementById("markid1").value;
    var url = "http://127.0.0.1:5500" + "/delete/" + markid;
    var open = window.open(url, "_blank");
    if (open) { location.reload(); }
    else if (!open) { console.log("window.open failed"); }
}


// function edit() {
//     var regno = document.getElementById("regno2").value
//     var event = document.getElementById("event").value
//     var url = "http://127.0.0.1:5500" + "/update/" + regno + "/" + event;
//     var open = window.open(url, "_blank");
//     if (open) { location.reload(); }
//     else if (!open) { console.log("window.open failed"); }
// }