import React, { Component } from "react";

class Learning extends Component {
  state = {
    count: 0,
    tags: []
    // imageUrl: "https://picsum.photos/id/119/750/400" // To add images dynamically
  };

  // constructor() {      // This method is much noisy
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this); // Here handleIncrement is binded to current object
  // }

  handleIncrement = product => {
    //Arrow function inherits 'this'; so is better option than constructor
    console.log(product);
    // Here this is undefined
    // if obj.function(), then this is the reference to that object
    // if standalone function(), then this is by default the reference to the window object
    // if strict mode is disabled, else returns undefined as in this case
    this.setState({ count: this.state.count + 1 });
  };

  // styles = {       // For adding objects to add styles. Also can be done using inline styles
  //   fontSize: 10,  // Eg: <span style={{ fontSize: 10, fontWeight: "bold"}}>
  //   fontWeight: "bold"
  // };

  renderTags() {
    if (this.state.count === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li id={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // if(true && "HI" && 1) returns 1 because till an expression gets trucy,
  // and returns the last element

  // While calling event functions like onClick, we have to pass the function reference.
  // So, to pass parameters, we use arrow function rather than giving function name directly.

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.count === 0 && <p>Please create a new tag</p>}
          {this.renderTags()}
        </div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.state.count)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Learning;

//Children property of props is used to pass complex react elements
