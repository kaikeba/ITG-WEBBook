import React, { Component } from 'react';

class Popup extends Component {
    render(){
      let {title,children} = this.props;
      return <div className="popup">
          <h2>{title}</h2>
          <div>
            {children}
          </div>
      </div>
    }
}

class App extends Component {
  render(){
    return <Popup
      title="自定义弹窗"
    >
      <div>弹窗内容</div>
    </Popup>
  }
}

export default App;
