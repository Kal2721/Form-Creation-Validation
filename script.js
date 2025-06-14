document.addEventListner("DOMContentLoaded", function(){
	
	const form = document.getElementById('registration-form');
	const username = document.getElementById('username');
	const email = document.getElementById('email');
	const password = document.getElementById('password');
	const feedbackDiv = document.getElementById('form-feedback');

	form.addEventListner('submit', event => {
		event.preventDefault();

		validInputs();
	});

	const validInputs = () => {
		const usernameValue = username.value.trim();
		const emailValue = email.value.trim();
		const passwordValue = password.value.trim();

		let massage = [];
		const isValid = true;

		if (username.value.length < 3){
			isValid = false;
			message.push('The password length must be greater than 3.');
		}

		if (email.value = ){
			isValid = false;
			message.push('Email must contain @ and .');
		}

		if (password.value.length < 8){
			isValid = false;
			message.push('Password must be atleast 8 characters long.');
		}

		feedbackDiv.style.display = block;

		if (isValid){
			feedbackDiv.textContent = "Registration successful!";
			feedbackDiv.style.color = "#28a745";
		}else{
			feedbackDiv.innerHTML = messages.join("<br>");
			feedbackDiv.style.color = "#dc3545";
		}

	}

});

