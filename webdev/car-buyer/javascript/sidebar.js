let isNavOpen = false;

function openNav() {
    if (isNavOpen == false) {
        document.getElementById("mySidebar").style.width = "80px";
        document.getElementById("header").style.borderBottomLeftRadius = "0";
        document.getElementById("button-wrapper-left").style.borderBottomLeftRadius = "5px";
        document.getElementById("button-wrapper-left").style.flexBasis = "80px"

        isNavOpen = true;
    } else {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("header").style.borderBottomLeftRadius = "15px";
        document.getElementById("button-wrapper-left").style.borderBottomLeftRadius = "15px";
        document.getElementById("button-wrapper-left").style.flexBasis = "0";
        isNavOpen = false;
    }
}