async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="#"]').value;
    const post_content = document.querySelector('input[name="#"]').value;
    const price = document.querySelector('input[name="#"]').value;
    const area = document.querySelector('input[name="#"]').value;
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_content,
            price,
            area
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}


    document.querySelector('#').addEventListener('#', newFormHandler);