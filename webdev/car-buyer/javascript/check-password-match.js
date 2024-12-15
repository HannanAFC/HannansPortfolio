function checkPassword() {
    const confirm = document.getElementById('repeat-password');
    const pass = document.getElementById('make-password');
    if (pass.value === confirm.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity("Passwords do not match");
    }
}