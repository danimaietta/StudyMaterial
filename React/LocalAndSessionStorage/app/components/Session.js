import React from "react"

export default function Session() {
  sessionStorage.setItem("key", "value")
  var data = sessionStorage.getItem("key")

  return <h1> The value in the session storage is {data} </h1>
}
