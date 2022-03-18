import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Session from "./components/Session"
import Local from "./components/Local"

function App() {
  return (
    <>
      <Session />
      <Local />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
