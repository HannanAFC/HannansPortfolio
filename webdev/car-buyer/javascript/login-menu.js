let isLoginMenuOpen = false;
let isAccountCreateMenuopen = false;

function openLoginMenu() {
  if (isLoginMenuOpen == false) {
    document.querySelector('.account-container').classList.toggle('open');
    document.getElementById("header").style.borderBottomRightRadius = "0px";
    document.getElementById("button-wrapper-right").style.borderBottomRightRadius = "5px";
    isLoginMenuOpen = true;
  } else {
    document.querySelector('.account-container').classList.toggle('open');
    document.getElementById("header").style.borderBottomRightRadius = "15px";
    document.getElementById("button-wrapper-right").style.borderBottomRightRadius = "15px";
    if (isAccountCreateMenuopen == true) {
      createAccountMenu();
    }
    document.getElementById('sign-in-form').reset();
    isLoginMenuOpen = false;
  }
}

function createAccountMenu() {
  if (isAccountCreateMenuopen == false) {
    document.querySelector('.create-account-menu').classList.toggle('open');
    isAccountCreateMenuopen = true;
  } else {
    document.querySelector('.create-account-menu').classList.toggle('open');
    document.getElementById('login-menu').style.visibility = "visible";
    document.getElementById('create-account-form').reset();
    isAccountCreateMenuopen = false;
  }
}