import React, { useState, useEffect } from 'react'

const postIds = [1, 2, 3, 4, 5, 6, 7, 8]

function fetchPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res =>
    res.json()
  )
}

export default function Posts() {
  const [post, setPost] = useState('...Loading')
  const [loading, setLoading] = useState(true)
  const [index, setIndex] = useState(0)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchPost(postIds[index])
      .then(p => {
        setLoading(false)
        setPost(p)
        setError(error)
      })
      .catch(e => {
        setError(e)
        setLoading(false)
      })
  }, [index])

  return (
    <>
      {index + 1 < postIds.length ? (
        loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <button onClick={() => setIndex(index + 1)}> next post </button>
            {error ? <p className='error'>{error}</p> : <> </>}
          </>
        )
      ) : (
        <p>There is not more posts. Thanks for watching!</p>
      )}
    </>
  )
}

/*
  Instructions:
    You're given an array of `postIds` and a `fetchPost` function.
    When you invoke `fetchPost`, you'll need to pass it an `id` from
    the `postIds` array. `fetchPost` returns a promise that will resolve
    with a post shaped like this

    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    The UI should show `Loading` if the request is still being made,
    an error message if there was an error, or the post title, body,
    and a button to fetch the next post on a successful request.
*/
