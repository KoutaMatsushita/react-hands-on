import React from "react"
import { withRouter } from "react-router"
import { Link } from "react-router-dom"

class Component extends React.Component {
  render() {
    return (
      <ul>
        {[...Array(4).keys()].map(i => <li key={`${i}_home`}><Link to={`/${i+1}`}>{i+1}</Link></li>)}
      </ul>
    )
  }
}

export const HomeComponent = withRouter(Component)