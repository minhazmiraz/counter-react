import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  /* constructor() {
    super();
    this.clickedCb = this.clickedCb.bind(this);
  } */

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!!</p>;
    else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }

  clickedCb = (product) => {
    console.log("Button Clicked", product);
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.value > 0 ? "badge-primary" : "badge-warning";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {/* this.props.children */}
        {/* style and class attr */}
        <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        {/* Event Handler */}
        <button
          onClick={() => this.clickedCb(this)}
          className="btn btn-secondary"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* List render */}
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}

        {/* custom conditional render */}
        {this.state.tags.length === 0 && "Please create a new tag!!"}

        {/* conditional render */}
        {/* this.renderTags() */}
      </div>
    );
  }
}

export default Counter;
