/*
* ######################################################################################################
* ##                                    COMPOSITE COMPUTING COMPANY                                   ##
* ##    ###########    ###########    ####        ####    ###########    ##########    ###########    ##
* ##    ##             ##       ##    ## ##      ## ##    ##       ##    ##            ##       ##    ##
* ##    ##             ##       ##    ##  ##    ##  ##    ##       ##    ##            ##       ##    ##
* ##    ##             ##       ##    ##   ##  ##   ##    ##       ##    ##            ##       ##    ##
* ##    ##             ##       ##    ##    ###     ##    ###########    ##            ##       ##    ##
* ##    ##             ##       ##    ##            ##    ##             ##            ##       ##    ##
* ##    ##             ##       ##    ##            ##    ##             ##            ##       ##    ##
* ##    ###########    ###########    ##            ##    ##             ##########    ###########    ##
* ##                                                                                                  ##
* ######################################################################################################
* ##### FORM-HANDLER ##### JAVASCRIPT ##### BY: MATT FERLAINO ##### COMPCO SUN-COMPUTING ###############
* ######################################################################################################
*/

// Crypto
function decrypt(encrypted) {
    return CryptoJS.AES.decrypt(encrypted, "$$AALLTTYYPP0000NN");
}

// Handles Contact Form
$("#contactForm").submit(function (event) {
  try {
    document.getElementById("formLoader").innerHTML = '<div class="fLoader"></div>';
    event.preventDefault(),
        Email.send({
            SecureToken : decrypt("U2FsdGVkX181r6BFwOUFSJhpQJ0HVt/1LFVbg+bUT+mWXnOy4MRfk0drtmzcSWWqhQoOFn9VOTfG7GsmxBlvqQ==").toString(CryptoJS.enc.Utf8),
            To : "mferlaino73@gmail.com",//decrypt("U2FsdGVkX1/yswuxgZeUpzPozR7jUZnuPcDKsO7JdX6MrcOmetAwEfJT5KIAJLpp").toString(CryptoJS.enc.Utf8),
            From : $("#email").val(),
            Subject : $("#subject").val(),
            Body : "Name: " + $("#name").val() + ". || "  +
                   "Phone: " + $("#phone").val() + ". || " +
                   "Email: " + $("#email").val() + ". || " +
                   "Message: " + $("#message").val()
        }).then(function (event) {
            document.getElementById("formLoader").innerHTML = '';
            document.getElementById("form-message-success").innerHTML = "Message sent! We will respond to you in 1-2 business days!",
            console.log(event),
            document.getElementById("contactForm").reset();
          });
    }
    catch (error) {
      document.getElementById("formLoader").innerHTML = '';
      document.getElementById("form-message-warning").innerHTML = "Something went wrong, try again!",
      console.log(error);
    }
  });
