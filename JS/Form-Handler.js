$(document).ready(function () {
  /*
   * -- Form Listeners --
   * 1. contactForm()
   *
   */
   
	// Performs an alert on success || failure
	$("#contactForm").submit(function (event) {
		try {
			event.preventDefault(),
			Email.send({
				SecureToken : decrypt("").toString(CryptoJS.enc.Utf8),
				To : decrypt("").toString(CryptoJS.enc.Utf8),
				From : $("#email").val(),
				Subject : "CUSTOMER CONTACT FORM SUBMISSION: " + $("#subject").val(),
				Body : "Customer Name: " + $("#name").val() + ". || "  +
                       "Customer Phone: " + $("#phone").val() + ". || " +
                       "Customer Email: " + $("#email").val() + ". || " +
                       "Customer Message: " + $("#message").val()
			}).then(function (success){ 
				// Update Success '<div>'
				alert(success),
				console.log(success),
				
				// Reset
				document.getElementById("contactForm").reset();
			});
		}
		
		catch (failure) {
			// Update Failure '<div>'
			alert(failure),
			console.log(failure),
			
			// Reset
			document.getElementById("contactForm").reset();
		}
	});

	// Performs a '<div>' update message on success || failure
	$("#contactForm").submit(function (event) {
		try {
			event.preventDefault(),
			Email.send({
				SecureToken : decrypt("").toString(CryptoJS.enc.Utf8),
				To : decrypt("").toString(CryptoJS.enc.Utf8),
				From : $("#email").val(),
				Subject : "CUSTOMER CONTACT FORM SUBMISSION: " + $("#subject").val(),
				Body : "Customer Name: " + $("#name").val() + ". || "  +
                       "Customer Phone: " + $("#phone").val() + ". || " +
                       "Customer Email: " + $("#email").val() + ". || " +
                       "Customer Message: " + $("#message").val()
			}).then(function (success){ 
				// Update Success '<div>'
				document.getElementById("successDiv").innerHTML = success,
				console.log(success),
				
				// Reset
				document.getElementById("contactForm").reset();
			});
		}
		
		catch (failure) {
			// Update Failure '<div>'
			document.getElementById("failureDiv").innerHTML = failure,
			console.log(failure),
			
			// Reset
			document.getElementById("contactForm").reset();
		}
	});

	
	/*
	 * -- Functions --
	 * 1. decrypt()
	 * 2. encrypt()
	 */
	 
	function decrypt(encrypted) {
		return CryptoJS.AES.decrypt(encrypted, "$$AALLTTYYPP0000NN");
	}
  
	function encrypt(plainText) {
		return CryptoJS.AES.encrypt(plainText, "$$AALLTTYYPP0000NN");
	}
});
