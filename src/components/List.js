import React from "react";
import directory from "../directory.json";

let sortedList = directory.sort((a, b) => (a.Name < b.Name) ? 1 : -1)

function ResultList(props) {
  return (
    <ul className="list-group">
      {sortedList.map(result => (
        <li className="list-group-item" key={result.id}>
          {result.Name}
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
