import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Danilo', age: 21}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({ 
      persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Danilo', age: 27}
      ]
    });    
  }

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Danilo', age: 27}
      ]
    });    
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
          <h1><code>Hello World</code></h1>
          <p>This is really working!</p>
          <button
          style={style}
          onClick={() => this.switchNameHandler('Maximilian')} >Switch Name</button>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maxi!!!')}
          changed={this.nameChangedHandler}> My hobbies: racing </Person>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{ class : 'App' }, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
