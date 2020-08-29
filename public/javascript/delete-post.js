async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
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
        document.location.replace('/home/');
      } else {
        alert(response.statusText)
      }
    }
    
    document.querySelector('#').addEventListener('click', deleteFormHandler); 