import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  componentDidUpdate() {
    console.log("Counters-updated");
  }

  render() {
    console.log("Counters-rendered");
    const { onReset, onDelete, onIncrement, counters } = this.props; //Object destructuring

    return (
      <div>
        <button onClick={onReset} className="btn btn-danger btn-sm m-2">
          Reset
        </button>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
