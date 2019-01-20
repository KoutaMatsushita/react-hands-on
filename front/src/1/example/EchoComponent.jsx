import React from "react"

export default class EchoComponent extends React.Component {
  render() {
    return (
      <p>こんにちは　{ this.props.name } さん</p>
    )
  }
}