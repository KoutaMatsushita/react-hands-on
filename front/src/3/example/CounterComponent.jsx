import React from "react"

export default class CounterComponent extends React.Component {
  render() {
    return <p>{`チェック数: ${this.props.count}`}</p>
  }
}