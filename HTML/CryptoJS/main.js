/*
 * -- Functions --
 */
function decrypt(encrypted) {
  return CryptoJS.AES.decrypt(encrypted, "$$AALLTTYYPP0000NN");
}

function encrypt(plainText) {
  return CryptoJS.AES.encrypt(plainText, "$$AALLTTYYPP0000NN");
}

try {
	var plainTxt = "generalsender@compco.org";
	console.log("Encrypted Text: " + encrypt(plainTxt));
	console.log("Decrypted Text: " + decrypt(encrypt(plainTxt)).toString(CryptoJS.enc.Utf8));


}

catch (error) {
  alert(error);
}