function hamburger() {
    var a = document.getElementById("nav")
    if (a.style.display === "none") {
        a.style.display = "block"
        tog = true
    } else {
        a.style.display = "none"
    }

}




function m() {
    var x = document.getElementById("aw-1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}


function changeRight() {
    var left = document.getElementById("tc-1");
    var right = document.getElementById("tc-2");
    var tab1 = document.getElementById("tab-1");
    var tab2 = document.getElementById("tab-2");

    left.style.display = "none";
    tab1.style.height = "30px";
    tab1.style.borderRadius = "30px"

    right.style.display = "block";
    tab2.style.height = "60px";
    tab2.style.borderRadius = "30px 30px 0px 0px";


}

function changeLeft() {
    var left = document.getElementById("tc-1");
    var right = document.getElementById("tc-2");
    var tab1 = document.getElementById("tab-1");
    var tab2 = document.getElementById("tab-2");

    left.style.display = "block";
    tab1.style.height = "60px";
    tab1.style.borderRadius = "30px 30px 0px 0px"

    right.style.display = "none";
    tab2.style.height = "30px";
    tab2.style.borderRadius = "30px";


}

function onscroll() {
    addEventListener
}