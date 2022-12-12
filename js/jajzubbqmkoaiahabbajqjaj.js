//token
function verify() {
var user = document.getElementById("token").value;
var key = "4a73767977666847363236";
var enkripsi = CryptoJS.AES.encrypt(user, "Secret Passphrase");
var dekripsi = CryptoJS.AES.decrypt(enkripsi, "Secret Passphrase");
if (dekripsi == key) {
 document.getElementById("birth").innerHTML="11/9/2005"
}else {
  document.getElementById("birth").innerHTML = "encrypted";
}
  
}

//onload
