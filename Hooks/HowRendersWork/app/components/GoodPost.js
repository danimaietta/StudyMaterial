import React, { useState, useEffect, useReducer } from 'react'

const postIds = [1, 2, 3, 4, 5, 6, 7, 8]

function fetchPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res =>
    res.json()
  )
}

export default function Posts() {
  const [page, setPage] = useState(0)

  function reducer(state, action) {
    if (action.type === 'loading') {
      return {
        ...state,
        loading: true
      }
    } else if (action.type === 'loadPost') {
      return {
        post: action.post,
        loading: false,
        error: null
      }
    } else if (action.type === 'error') {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }
  }

  const [posts, dispatch] = useReducer(reducer, {
    post: '',
    loading: true,
    error: null
  })

  useEffect(() => {
    callPost(page)
  }, [])

  const callPost = async page => {
    dispatch({ type: 'loading' })
    try {
      const post = await fetchPost(postIds[page])
      dispatch({ type: 'loadPost', post })
    } catch (error) {
      dispatch({ type: 'error', error })
    }
  }

  console.count('Renders GoodPost')

  return (
    <>
      {page + 1 < postIds.length ? (
        posts.loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div>{posts.post.title}</div>
            <div>{posts.post.body}</div>
            <button
              onClick={() => {
                setPage(page + 1)
                callPost(page + 1)
              }}
            >
              next post
            </button>
            {posts.error ? (
              <p className='error'>{posts.error.message}</p>
            ) : (
              <> </>
            )}
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
