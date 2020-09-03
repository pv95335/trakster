async function newFormHandler(event) {
	event.preventDefault();
	console.log(event)
	const title = document.querySelector('#post-title').value;
	const post_content = document.querySelector('#post-content').value;
	const price = document.querySelector('#post-price').value;
	const area = document.querySelector('#post-area').value;
	const post_type = document.querySelector('#post-type').value;
	console.log(title);
	console.log(post_content);
	console.log(price);
	console.log(area);
	console.log(post_type)
	const response = await fetch(`/api/posts`, {
		method: 'POST',
		body: JSON.stringify({
			title,
			post_content,
			price,
			area,
			post_type
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	if (response.ok) {
		console.log('added');
		document.location.replace('/');
	} else {
		alert(response.statusText);
	}
}


$('#createPost').submit(newFormHandler);
