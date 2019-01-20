import React from "react"

export default class TodoComponent extends React.Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox" checked={this.props.done} />
          { this.props.name }
        </label>
      </li>
    )
  }
}