import React from "react";
import directory from "../directory.json";

let sortedList = directory.sort((a, b) => (a.Name > b.Name) ? 1 : -1)

function ResultList(props) {
  return (

    <div className="card-body">
      <p className="card-text">Sort by: {props.count}</p>
      <button className="btn btn-primary" onClick={props.handleIncrement}>
        Name
    </button>{" "}
      <button className="btn btn-danger" onClick={props.handleDecrement}>
        Role
    </button>
      <ul className="list-group">
        {sortedList.map(result => (
          <li className="list-group-item" >
            {result.Name} --- {result.Role} --- {result.Department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultList;
