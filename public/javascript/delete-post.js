async function deleteFormHandler(event) {
    event.preventDefault();
  
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          post_id: id
      }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      console.log(response);
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText)
      }
    }
    
    document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler); 