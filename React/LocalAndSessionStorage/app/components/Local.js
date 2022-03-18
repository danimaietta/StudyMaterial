import React from "react"

export default function Session() {
  localStorage.setItem("key", "value")
  var data = localStorage.getItem("key")

  return <h1> The value in the local storage is {data} </h1>
}
