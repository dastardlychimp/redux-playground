import React from 'react'
// import Counter from './Counter'
import StyledInput from './styled/StyledInput'
import StyledDataListInput from './styled/StyledDataListInput'
import AutoInput from './AutoInput'

export default class App extends React.Component {
  render() {
    const dataList = ['blue', 'green', 'yello', 'red', 'purple', 'black', 'white', 'orange', 'indigo', 'pastel', 'raspberry', 'blackberry', 'pink']
    return (
      <div id="content">
        {/*<Counter />*/}
        <div><StyledInput placeholder="First name"/></div>
        <div><StyledInput placeholder="Last name"/></div>
        <div><StyledDataListInput dataList = { dataList } /></div>
        <div><AutoInput options = { dataList } /></div>
      </div>
    );
  }
}
