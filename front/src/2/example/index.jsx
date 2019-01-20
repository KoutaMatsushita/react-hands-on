import React from "react"
import TodoComponent from "./TodoComponent"

let todos = [
  {
    name: "朝ごはん",
    done: true
  },
  {
    name: "昼ごはん",
    done: true
  },
  {
    name: "夜ごはん",
    done: false
  }
]

export default　class Component extends React.Component {
  render() {
    return (
      <ul>
        {todos.map(t => <TodoComponent name={t.name} done={t.done} />)}
      </ul>
    )
  }
}