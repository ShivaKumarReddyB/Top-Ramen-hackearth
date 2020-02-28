import React from "react";

const SearchRamen = ({ filterArray ,handleChange }) => {
  return (
    <div className="input">
      <input placeholder="enter"   onChange={handleChange}/>
      <ul>
        {filterArray.map(i => (
          <li key={i.Varity}>{i.Brand}</li>
        ))}
      </ul>
    </div>
  );
};
export default SearchRamen;
