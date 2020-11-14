if (regisValid == true) {

function regisValid() {
  var x = document.forms['regisregis']['username'].value;
  if (x == "") {
    alert("Masukkan username");
    return false;
  }
}
}
else {

function regisValid() {
  var y = document.forms['regisregis']['password'].value;
  if (y == "") {
    alert("Masukkan password");
    return false;
  }
}
}