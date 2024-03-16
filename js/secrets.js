function emailSend(){
	
	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "shakuntlamhostels@gmail.com",
		Password : "6CADD91BB343382C518C0CBE6D339C2F1214",
		To : "shakuntlamhostel52@gmail.com",
		From : "shakuntlamhostels@gmail.com",
		Subject : "Shakuntalam Hostel",
		Body : "Name: " + document.getElementById("template-contactform-name").value + "<br/>Phone: " + document.getElementById("template-contactform-phone").value + "<br/>Mail: " + document.getElementById("template-contactform-email").value + "<br/>Message: " + document.getElementById("template-contactform-message").value
	
	}).then(
	  message => {
		if(message == 'OK'){
			Swal.fire({
				icon: "success",
				title: "Success",
			  });
		} else {
			displayErrorMessage("Something went wrong!");
		}
	  }
	);
}

function validate(){
    // Fetching input values
    const nameInput = document.getElementById('template-contactform-name');
    const emailInput = document.getElementById('template-contactform-email');
    const phoneInput = document.getElementById('template-contactform-phone');

    // Validating name
  if (nameInput.value.trim() === '') {
   displayErrorMessage('Name is required.');
   return;
 }

 // Validating email
 const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailPattern.test(emailInput.value.trim())) {
   displayErrorMessage('Please enter a valid email address.');
   return;
 }
       // Validating phone number
 const phonePattern = /^\d{10}$/;
 if (!phonePattern.test(phoneInput.value.trim())) {
   displayErrorMessage('Please enter a 10-digit phone number.');
   return;
 }

 emailSend();

}

function displayErrorMessage(message) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
      });
      console.log(message);
  }

document.getElementById('vid').play();
document.getElementById('myTell').setAttribute('href', 'tel:+919811463915');