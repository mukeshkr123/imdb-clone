import React from "react";

const Results = ({ results }) => {
  return (
    <div key={results._id}>
      {results.map((result) => (
        <div>{result.original_title}</div>
      ))}
    </div>
  );
};

export default Results;
