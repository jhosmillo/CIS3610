function processForm() {
	// Prevent the form from submitting
    event.preventDefault();
	let userName = document.getElementById('name').value;
	let userMsg = "Thanks " +userName+ ", we'll get back to you shortly!"

	//Set message
	document.getElementById("message").innerHTML = userMsg;
	document.getElementById("message").style.color = "white";

	//disable input fields
	document.getElementById('email').readOnly = true;
	document.getElementById('name').readOnly = true;
	document.getElementById('comment').readOnly = true;
	document.getElementById('phone').readOnly = true;

	
	
	
}
document.getElementById("submitButton").addEventListener("click", processForm);
