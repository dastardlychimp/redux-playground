import React from 'react'
import Counter from './Counter'
import StyledInput from './styled/StyledInput'

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        {/*<Counter />*/}
        <div><StyledInput placeholder="First name"/></div>
        <div><StyledInput placeholder="Last name"/></div>
      </div>
    );
  }
}
