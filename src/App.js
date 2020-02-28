import React from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ramen: []
    };
  }
  componentDidMount() {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = "http://starlord.hackerearth.com/TopRamen";
    fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then(data => this.setState({ ramen: data }));
  }
  render() {
    console.log(this.state.ramen);
    return (<div className="App">
      {this.state.ramen.map(r=><p>{r.Brand}</p>)}
    </div>);
  }
}

export default App;
