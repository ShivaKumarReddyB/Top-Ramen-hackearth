import React from "react";
// import logo from './logo.svg';
import "./App.css";
import RamenList from "./component/list of top Ramen/ramenList";
import SearchRamen from "./component/SearchRamen/input";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ramen: [],
      search: "",
      filterArray:[]
    };
  }
  componentDidMount() {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = "http://starlord.hackerearth.com/TopRamen";
    fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then(data => this.setState({ ramen: data }));
  }
  handleChange = event => {
    this.setState({ search: event.target.value });
     let filter=this.state.ramen.filter(r=>r.Brand.toLowerCase().includes(this.state.search.toLocaleLowerCase()))
      this.setState({filterArray:filter})
     console.log(this.state.filterArray)
     
  };
  render() {
    const { ramen ,filterArray } = this.state;
    const year2016 = ramen.filter(f => f["Top Ten"].includes("2016"));
    const year2015 = ramen.filter(f => f["Top Ten"].includes("2015"));
    const year2014 = ramen.filter(f => f["Top Ten"].includes("2014"));
    const year2013 = ramen.filter(f => f["Top Ten"].includes("2013"));
    const year2012 = ramen.filter(f => f["Top Ten"].includes("2012"));
     
    return (
      <div className="App">
        <SearchRamen handleChange={this.handleChange}  filterArray={filterArray}/>
        <RamenList
          year2012={year2012}
          year2013={year2013}
          year2014={year2014}
          year2015={year2015}
          year2016={year2016}
        />
      </div>
    );
  }
}

export default App;
