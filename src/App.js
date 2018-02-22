import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
@inject('store')
@observer

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>{this.props.store.state.number}</div>
        <button onClick={this.props.store.add}>add</button>
        <button onClick={this.props.store.des}>des</button>
      </div>
    );
  }
}

export default App;
