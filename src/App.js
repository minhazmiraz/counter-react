import React, { Component } from 'react';
import Navbar from "./component/navbar";
import Counters from './component/counters';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  onDelete = (counterId) => {
    console.log("OnDelete event handler called.", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  onIncrement = (counter) => {
    const counters = [...this.state.counters];
    var idx = counters.indexOf(counter);
    counters[idx] = { ...counter };
    counters[idx].value++;
    this.setState({ counters });
    //console.log(this.state.counters);
  };

  onReset = () => {
    this.setState({
      counters: this.state.counters.map((c) => {
        c.value = 0;
        return c;
      }),
    });
  };

  render() {
    return (
      <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters
        onIncrement={this.onIncrement}
        onDelete={this.onDelete}
        onReset={this.onReset} 
        counters={this.state.counters}
        />
      </main>
      </React.Fragment>
    );
  }

}

export default App;
