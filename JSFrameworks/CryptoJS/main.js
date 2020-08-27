/*
 * -- Functions --
 */
function decrypt(encrypted) {
  return CryptoJS.AES.decrypt(encrypted, "$$AALLTTYYPP0000NN");
}

function encrypt(plainText) {
  return CryptoJS.AES.encrypt(plainText, "$$AALLTTYYPP0000NN");
}

function decryptAndPrint(encrypted) {
	var decrypted = decrypt(encrypted).toString(CryptoJS.enc.Utf8);

	console.log("Encrypted: " + encrypted);
	console.log("Decrypted: " + decrypted);
	
	return decrypted;
}

function encryptAndPrint(plainText) {
	var encrypted = encrypt(plainText);
	
	console.log("Plain Text: " + plainText);
	console.log("Encrypted: " + encrypted);
	
	return encrypted;
}

try {
	var matt = encryptAndPrint("Matthew Ferlaino");
	decryptAndPrint(matt);
}

catch (error) {
  alert(error);
}