/*
 * -- Functions --
 */
function decrypt(encrypted) {
  
    return CryptoJS.AES.decrypt(encrypted, "$$AALLTTYYPP0000NN");
}

function createReceipt() {
  // Variables
  var receipt = new jsPDF();
  var date = new Date();
  var dateStr = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();

  receipt.text('Season Pass Receipt Example', 10, 10);
  receipt.text('GST #: 748935731RT0001', 10, 20);
  receipt.text('---------------------------------------------------------------------', 10, 40);

  return receipt.output('datauristring');
}


function sendEmailAttachment(receipt, receiptName) {
  try {
      Email.send({
          SecureToken : decrypt("U2FsdGVkX18FWloU3OtUbJyT5JJs2/y17EPvbe7+qu08ddYzVdOliarioGAqZSraO8JJw2kZ4PddiMJpb6eugQ==").toString(CryptoJS.enc.Utf8),
          To : decrypt("U2FsdGVkX19KYAkUnfobExKVfNBRqy1DmE1MCti+kpnc2O3Rg4hkMPtnuQKbgFIp").toString(CryptoJS.enc.Utf8),
          From : decrypt("U2FsdGVkX180xoliPlO4+BZ2A2Km9yjoPTjBFQEVh3gGdLkaxjH5nQ1DdFSw5eB4").toString(CryptoJS.enc.Utf8),
          Subject : new Date().getFullYear() + "-TESTING EMAIL FORM SUBMISSION",
          Body : " Body Content",
          Attachments : [
           {
             name : receiptName,
             data : receipt
           }]
      }).then(function (event) {
          console.log(event)
        });
    }
    catch (error) {
      alert("Something went wrong, try again!"),
      console.log(error);
    }
}

/*
 * Call 
 */
sendEmailAttachment(createReceipt(), "Receipt-Example.pdf");
