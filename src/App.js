import React, { Component } from 'react';
import DaysCalculator from './components/DaysCalculator';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div style={{ padding: 100 }}>
          <DaysCalculator />
        </div>
      </div>
    );
  }
}

export default App;
