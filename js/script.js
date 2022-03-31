var i = 0;
var img = new Array("/img/1.png", "/img/2.jpg");
function imgsrcnext() {
    i++;
    document.getElementById("picture").src = img[i];
}
function imgsrcprev() {
    i--;
    document.getElementById("picture").src = img[i];
}