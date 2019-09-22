import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super(); //Compulsary
    console.log("App-constructor");
    // this.state = this.props.something    //this can be done, but this. props has to be passed as parameter
  }

  componentDidMount() {
    console.log("App-mounted");
  }

  handleIncrement = counter => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = counter;
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    // console.log("Deleting counter " + counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
    // this.setState(this.state.counters.pop(counterId));
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  componentDidUpdate(prevProps, prevState) {
    //This method can be used to decide to do any
    console.log("App-updated"); //ajax calls in case of change of any property
  }

  componentWillUnmount() {
    console.log("App-unmounted"); //Used for data cleanup
  }

  render() {
    console.log("App-rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
