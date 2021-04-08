import React from 'react'

function authAPI(code) {
  return code == 1234 ? true : false
}

export default function WithAuth(props) {
  const authorization = authAPI(props.code)

  return (
    <>{authorization ? props.children() : <h5>You don't have access</h5>}</>
  )
}
