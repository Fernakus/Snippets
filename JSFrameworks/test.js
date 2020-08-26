




function decrypt(encrypted) {
    return CryptoJS.AES.decrypt(encrypted, "$$AALLTTYYPP0000NN");
}


function condol() {
  console.log(decrypt("U2FsdGVkX1/g8jlLDas3FMs1MGN/DpwFq33K3p370msjAFHjHiR/zQBbT+620Zxv").toString(CryptoJS.enc.Utf8));
  console.log(decrypt("U2FsdGVkX19jkog+0LOgLNNEY9R7s7zqGsK3CG9V0A9Q1gVMarLKYGRBBcB3pPS1").toString(CryptoJS.enc.Utf8));
}

condol();