export function getPostsFromDb() {
  return fetch(
    'http://localhost:8001/posts?archived=false&_sort=id&_order=desc'
  )
    .then((resp) => resp.json())
    .catch((err) => console.warn('some problem', err));
}

export function getCurrentPostFromDb(id) {
  return fetch(`http://localhost:8001/posts/${id}`)
    .then((resp) => resp.json())
    .catch((err) => console.warn('some problem', err));
}

export function deleteRequest(idToDelete) {
  return fetch(`http://localhost:8001/posts/${idToDelete}`, {
    method: 'DELETE',
  })
    .then((res) => res.status === 200)
    .then((res) => console.log(res))
    .catch(console.warn);
}

export function sendDeletePatch(id) {
  return fetch(`http://localhost:8001/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      archived: true,
    }),
  })
    .then((resp) => {
      console.log('resp ===', resp);
      if (resp.status === 200) return true;
      console.warn('status is not 200 and there are no catch error');
    })
    .catch(console.warn);
}

export function getCommentsFromDb(id) {
  return fetch(`http://localhost:8001/comments?postId=${id}`)
    .then((resp) => resp.json())
    .catch((err) => console.warn('some problem', err));
}
