import React from "react";
import List from "./List";

class Lists extends React.Component {
  render() {
    return (
      <div className="lists">
        <h2>Lists</h2>
        <div className="list-container">
          <List />
          <List />
          <List />
        </div>
      </div>
    );
  }
}

export default Lists;
