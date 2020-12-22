import React from 'react';
import logo from '../slp-logo.png';
import '../App.css';

export default class Search extends React.Component {

  state = {
    address: "",
    total: 0
  };

  handleChange = (e) => {
    this.setState({ address: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    let ethaddress = this.state.address;
    let url = `https://lunacia.skymavis.com/game-api/clients/${ethaddress}/items/1`;

    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ total: data.total}));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <header className="App-header">
          <div className="card">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{this.state.total}</h1>
          </div>
          <input 
            name="address" 
            value={this.state.address} 
            onChange={this.handleChange}
            placeholder="Paste ETH Address"/>
          <button type="submit" className="btn btn1">Show</button>
        </header>
      </form>
    );
  };
};