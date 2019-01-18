import ReactDOM from "react-dom"
import React from "react"

/**
 * ここを適当に弄ってください
 */
ReactDOM.render(
  (
    <div>
      <p>こんにちは世界</p>
      <style jsx>{`
        p {
          color: red;
        }
      `}</style>
    </div>
  ),
  document.getElementById("app")
)