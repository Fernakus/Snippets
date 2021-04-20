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
	var plainTxt = "33be3a74-5b43-46c9-8f43-5c5d8eabff8c";
	console.log("Encrypted Text: " + encrypt(plainTxt));
	console.log("Decrypted Text: " + decrypt(encrypt(plainTxt)).toString(CryptoJS.enc.Utf8));

	console.log(decrypt("").toString(CryptoJS.enc.Utf8));
}

catch (error) {
  alert(error);
}