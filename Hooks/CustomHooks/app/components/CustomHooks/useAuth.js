import React from 'react'

function authAPI(code) {
  return code == 1234 ? true : false
}

export default function useAuth(code) {
  return authAPI(code)
}
