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

  console.count('Renders BadPost')

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
            {error ? <p className='error'>{error.message}</p> : <> </>}
          </>
        )
      ) : (
        <p>There is not more posts. Thanks for watching!</p>
      )}
    </>
  )
}
