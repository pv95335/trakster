async function signupFormHandler(event) {
    event.preventDefault();

 
    const username = document.querySelector('#').value.trim();
    const email = document.querySelector('#').value.trim();
    const password = document.querySelector('#').value.trim();
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
            document.location.replace('/home');
        } else {
            alert(response.statusText);
        }
    }
}
 
document.querySelector('#').addEventListener('submit', signupFormHandler);        