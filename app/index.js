import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
  render() {
    return <div>Hello Sally!</div>
  }
}

ReactDOM.render(
  <App />, // React Element
  document.getElementById("app") // Where to render the Element to
)
