async function signupFormHandler(event) {
    // event.preventDefault();

 
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
console.log(username);
console.log(email);
console.log(password);
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('added');
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}
 
document.querySelector('#signup-btn').addEventListener('submit', signupFormHandler);        