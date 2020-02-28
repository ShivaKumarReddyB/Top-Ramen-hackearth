import React from "react";
import './ramenList.css'
const RamenList =({ year2016, year2015, year2014, year2013, year2012 } )=> {
 

  return (
    <div className="list">
      <div className="year2016">
          <h3>top 2016</h3>
        <ul>
          {year2016.map(y => (
            <li  key={y.Variety}>{y.Brand}</li>
          ))}
        </ul>
      </div>
      <div className="year2015">
          <h3>top 2015</h3>
        <ul>
          {year2015.map(y => (
            <li  key={y.Variety}>{y.Brand}</li>
          ))}
        </ul>
      </div>
      <div className="year2014">
          <h3>top 2014</h3>
        <ul>
          {year2014.map(y => (
            <li  key={y.Variety}>{y.Brand}</li>
          ))}
        </ul>
      </div>
      <div className="year2013">
          <h3>top 2016</h3>
        <ul>
          {year2013.map(y => (
            <li  key={y.Variety}>{y.Brand}</li>
          ))}
        </ul>
      </div>
      <div className="year2016">
          <h3>top 2012</h3>
        <ul>
          {year2012.map(y => (
            <li  key={y.Variety}>{y.Brand}</li>
          ))}
        </ul>
      </div>
    </div>)
   
    
}
export default RamenList;
