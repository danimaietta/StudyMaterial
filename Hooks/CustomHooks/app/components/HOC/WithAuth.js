import React from 'react'

function authAPI(code) {
  return code == 1234 ? true : false
}

export default function WithAuth(Component) {
  return function withAuth(props) {
    const authorization = authAPI(props.code)

    return (
      <>
        {authorization ? (
          <Component {...props} />
        ) : (
          <h5>You don't have access</h5>
        )}
      </>
    )
  }
}
