if (loginValid == true){

function loginValid() {
  var x = document.forms['loginlogin']['username'].value;
  if (x == "") {
    alert("Masukkan username");
    return false;
  }
}
}
else{
function loginValid() {
  var y = document.forms['loginlogin']['password'].value;
  if (y == "") {
    alert("Masukkan password");
    return false;
  }
}
}