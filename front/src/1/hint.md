## コンポーネントに引数を渡したいとき

```jsx
class ParentComponent extends React.Component {
  render() {
    return(
      <ChildComponent name="田中太郎" />
    )
  }
}

class ChildComponent extends React.Component {
  render() {
    return(
      <p>{ this.props.name }</p>
    )
  }
}
```

## 別ファイルにしたいとき

```ParentComponent.jsx
import ChildComponent from "path/to/ChildComponent.jsx"

class ParentComponent extends React.Component {
  render() {
    return(
      <ChildComponent name="田中太郎" />
    )
  }
}
```

```ChildComponent.jsx
export default class ChildComponent extends React.Component {
  render() {
    return(
      <p>{ this.props.name }</p>
    )
  }
}
```

## Typescript で書きたいとき

Typescript で書きたい場合は引数（props） の型を定義しないといけない。
React.Component　に Generics　で型を教えないといけないので注意すること。

```ChildComponent.tsx
export default class ChildComponent extends React.Component<{name: string}> {
  render() {
    return(
      <p>{ this.props.name }</p>
    )
  }
}
```
