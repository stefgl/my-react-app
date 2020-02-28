import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/searchbox/searchbox-component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users} ));
  }
  render() {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
    <div className="App">
      <SearchBox
        placeholder='search cats' 
        handleChange= {e => this.setState({searchField: e.target.value})}
      />
      <CardList monsters={filteredMonsters} />
    </div>
    )

  }
}
export default App;
