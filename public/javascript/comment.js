async function commentFormHandler(event) {
  event.preventDefault();
  console.log('Click!');

  const comment_text = document.querySelector('textarea[name="comment"]').value.trim();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log(comment_text, post_id);
  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text

      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText)
    }
  }
};

document.querySelector('#commentForm').addEventListener('submit', commentFormHandler);

const params = new URLSearchParams(window.location.search);
const postId = params.get('id');
fetch('/api/comments/' + postId)
  .then(res => res.json())
  .then(comments => {
    console.log(comments);
    
    comments.forEach(comment => {
      const comments = document.getElementById('comments');
      const card = document.createElement('div');
      card.className = 'card';
      card.style.marginTop = '10px'
      card.innerText= 'Comment: ' + comment.comment_text;
      
      const p = document.createElement('p');
      p.innerText = 'Post Date: ' + comment.createdAt;
      card.append(p)
      comments.append(card);
      /*const p = document.createElement('p');
      p.innerText = comment.comment_text;
      const p2 = document.createElement('p');
      p2.innerText = 'Post Date: ' + comment.createdAt;
      
      comments.append(p);
      comments.append(p2);*/
    });
  });
