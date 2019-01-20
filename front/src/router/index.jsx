import React from "react"
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom"
import { HomeComponent } from "./HomeComponent"

export class AppRouter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {components: []}
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/:id" component={this.routingComponent()} />
        </Switch>
      </Router>
    )
  }

  routingComponent() {
    return props => {
      const Component = React.lazy(() => import(`../${props.match.params.id}/index`))
      const ExampleComponent = React.lazy(() => import(`../${props.match.params.id}/example`))
      return (
        <>
          <Link to="/">一番上に戻る</Link>
          <React.Suspense fallback={<div>loading</div>}>
            <Component {...props} />
            <details>
              <summary>example</summary>
              <ExampleComponent {...props} />
            </details>
          </React.Suspense>
        </>
      )
    }
  }

  waitingComponents(components) {
    if (components.length <= 0) return null
    return props => (
      <React.Suspense fallback={<div>Loading...</div>}>
        {components.map((Component, i)=> <Component key={`${i}_waitingComponents`} {...props} />)}
      </React.Suspense>
    )
  }
}