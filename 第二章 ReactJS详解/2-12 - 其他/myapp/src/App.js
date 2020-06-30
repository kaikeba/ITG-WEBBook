import React, { Component } from 'react';
let data = `
  <h2>React 修炼</h2>
  <p>从零开始学习 React</p>
`
class App extends Component {
  render(){
    return <div
      dangerouslySetInnerHTML={{
        __html:data
      }}
    >
    </div>
  }
}

export default App;
