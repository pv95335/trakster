async function getPosts() {

	const response = await fetch(`/api/posts`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const data = await response.json();
	if (response.ok) {
		console.log(data);
		const body = data.map(post => (
			`<div class="card mb-6 mt-3 p-1">
      <header class="card-header card-header-title has-background-grey-lighter">

        <div class="column">
          <a href=/post.html?id=${post.id} class="has-text-black is-capitalized is-pulled-left"> <h3> ${post.title} </h3> </a>
        </div>

      </header>

      <div class="card-content p-1">
        <div class="content has-text-justified pl-3">
          ${post.post_content}
        </div>
        <div class="is-pulled-right float-right p-2">
          <b>${post.User.username}</b> | ${  post.created_at.substr(0,10) } |${post. post_type} | Zip ${ post.area} | <a  href=/post.html?id=${post.id}>${post.Comments.length}
            ${post.Comments.length > 0 ? "comments" : "comment" }</a>
        </div>

      </div>
    </div>`
		))
		$("#posts").html(body)
	} else {
		alert(response.statusText);
	}
}

if (localStorage.getItem("logged")) {
	getPosts();
}
