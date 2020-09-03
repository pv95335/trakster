async function getPost() {

	const href = $(location).attr('href');;
	const id = href.substr(35)
	const response = await fetch(`/api/posts/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const post = await response.json();
	if (response.ok) {
		console.log(post);
		const body =
			`<div class="card mb-6 mt-3 p-1">
      <header class="card-header card-header-title has-background-grey-lighter">

        <div class="column">
          <h3  class="has-text-black is-capitalized is-pulled-left text-primary"> ${post.title} </h3>
        </div>

      </header>

      <div class="card-content p-1">
        <div class="content has-text-justified pl-3">
          ${post.post_content}
        </div>
        <div class="is-pulled-right float-right p-2">
          <b>${post.User.username}</b> | ${ post.created_at.substr(0,10)} | Zip ${ post.area} | ${post.Comments.length}
            ${post.Comments.length > 1 ? "comments" : "comment" }
        </div>
	
	  </div>
	  <button type="button" class="button is-danger delete-post-btn">Delete</button>
    </div>`

		$("#post").html(body)
	} else {
		alert(response.statusText);
	}
}

if (localStorage.getItem("logged")) {
	getPost();
}
