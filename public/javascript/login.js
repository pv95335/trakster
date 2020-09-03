async function loginFormHandler(e) {
	// e.preventDefault();
	const email = document.querySelector('#logemail').value.trim();
	const password = document.querySelector('#logpassword').value.trim();
	if (email && password) {
		const response = await fetch('/api/users/login', {
			method: 'post',
			body: JSON.stringify({
				email,
				password
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		// console.log('Response ::::::::::::::: ' + JSON.stringify(response));
		if (response.ok) {
			localStorage.setItem("logged", true)
			console.log("logged");
			$("#logoutButton").show()
			$("#navbarDropdown").hide()
			$("#createsec").show()
			$("#signUp").hide()
			// const responseBody = await response.json();
			// document.querySelector('#isloggedIn').value = 'true';
			// document.location.replace('/');

		} else {
			alert(response.statusText);
		}
	}
}

document.querySelector('#loginbtn').addEventListener('click', loginFormHandler);
