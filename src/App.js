import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      working: false,
    };
  }
  render() {
    const changeAnime = this.state.working ? 'working App-logo' : 'App-logo notWorking';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={changeAnime} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button className = "buttonN" onClick = {() => {
            this.setState({working: !this.state.working});
          }}>
            Working or not working?
          </button>
        </header>
        <Quotes
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
      </div>
    );
  }
}

export default App;