import React from "react"
import CounterComponent from "./CounterComponent"
import TodoComponent from "./TodoComponent";

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

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todos }
  }

  render() {
    return (
      <div>
        {this.state.todos.map((t, i) => <TodoComponent name={t.name} done={t.done} onClick={() => {this.onChange(i)}} />)}
        <CounterComponent count={this.state.todos.filter(t => t.done).length} />
      </div>
    )
  }

  onChange(i) {
    const target = todos[i]
    target.done = !target.done
    todos.splice(i, 1, target)
    this.setState({ todos })
  }
}
