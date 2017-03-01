function messageSend() {
    var c = new Date();
    var h = c.getHours();
    var m = c.getMinutes();
    m = checkTime(m);
    var s = c.getSeconds();
    s = checkTime(s);
    var n = document.getElementById("nameInputBox").value;
    var msg = document.getElementById("messageOutputBox").innerHTML; 
    var value_msg = document.getElementById("messageInputBox").value;
    
    if (value_msg != "") document.getElementById("messageOutputBox").innerHTML  =
    msg+"["+h+":"+m+":"+s+"] "+" ["+n+"]"+value_msg+"<br />"+"<hr/>";
       
}

function chatBoxTime() {
    var c2 = new Date();
    var h2 = c2.getHours();
    var m2 = c2.getMinutes();
    m2 = checkTime(m2);
    var s2 = c2.getSeconds();
    s2 = checkTime(s2);
    
    document.getElementById("clockDisplay").innerHTML = 
    "Mchat v1.0 By: Manley.C"+"\xa0\xa0\xa0\xa0"
    +"["+h2+":"+m2+":"+s2+"]";
}

setInterval(chatBoxTime, 1000);

function checkTime(v) {
    if (v < 10) {v = "0" +v}
    return v;
}