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

// Sanitizes Email
function sanitize(email, phone) {
  const emailRegexVerified = !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase()) ? false : true;
  const phoneRegexVerified = !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(String(phone)) ? false : true;
  return emailRegexVerified && phoneRegexVerified ? true : false;
}

// Handles Contact Form
$('#contactForm').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
        },
        subject: {
            required: true,
            minlength: 4
        },
        message: {
            required: true,
            minlength: 20
        }
    },

    messages: {
        name: {
            required: "Please enter your name",
            minlength: "Your name must consist of at least 2 characters"
        },
        email: {
            required: "Please enter an email address"
        },
        subject: {
            required: "Please enter a subject",
            minlength: "Your subject must consist of at least 4 characters"
        },
        message: {
            required: "Please enter in your message",
            minlength: "Your message must contain a bit more content"
        }
    },

    submitHandler: function(form) {
      try {
        document.getElementById("formLoader").innerHTML = '<div class="fLoader"></div>';

        if (sanitize($("#email").val(), $("#phone").val())) {
              Email.send({
                  SecureToken : decrypt("U2FsdGVkX18+r6ey82EYwvFMK2N2zQG/HU29UJ4Z90UH7oJxpYRImbBpSPVO4A388zetqKizLdo1l+l4GGlqhw==").toString(CryptoJS.enc.Utf8),
                  To : "mferlaino73@gmail.com",
                  From : decrypt("U2FsdGVkX18U5ifegtVhhKTatODbmZFBY37uMAgHCainQMqEdFrRoQjCQQhubB2J").toString(CryptoJS.enc.Utf8),
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

          else
            alert("Invalid form information, please check entered information.")
        }

        catch (error) {
          document.getElementById("formLoader").innerHTML = '';
          document.getElementById("form-message-warning").innerHTML = "Something went wrong, try again!",
          console.log(error);
        }
    }
  });

