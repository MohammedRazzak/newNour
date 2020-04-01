
function mouseEnter() {
    document.getElementById("content1").style.visibility = "hidden";
    document.getElementById("content2").style.visibility = "visible";
}
function mouseEnterTwo() {
document.getElementById("content12").style.visibility = "hidden";
    document.getElementById("content22").style.visibility = "visible";
}
function mouseEnterThree() {
document.getElementById("content13").style.visibility = "hidden";
    document.getElementById("content23").style.visibility = "visible";
}

function mouseLeave() {
document.getElementById("content2").style.visibility = "hidden";
document.getElementById("content1").style.visibility = "visible";
document.getElementById("content22").style.visibility = "hidden";
document.getElementById("content12").style.visibility = "visible";
document.getElementById("content23").style.visibility = "hidden";
document.getElementById("content13").style.visibility = "visible";

}
