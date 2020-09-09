import React, { Component } from 'react';
import './App.css';

// import Radium, {StyleRoot} from 'radium'
import Person from '../components/Persons/Person/Person'

class App extends Component {

  state = {
    persons: [
      {id:'1', name: 'thao', age: 24 },
      {id:'2', name: 'ban', age: 19},
      {id:'3', name: 'anyone', age: 23}
    ],
    showPerson: true
  }


  upgradeHandler = () => {
    console.log("works")
  }

  toggleHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //javascript objects are reference types so we shouldn't mutate them directly because we only get a pointer when we reach out to person here and hence we would mutate the original object
    // const person = this.state.persons[personIndex]; xx

    //get the changed person element 
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    //create copy of original array and put changed element
    const persons = [...this.state.persons];
    persons[personIndex] = person

    //setstate with changed array
    this.setState({persons: persons})

  }

  deletePersonHandelr = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})

  }
  //whenever react component renderd
  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      padding: '8px',
      //for radium
      // ':hover': {
      //   backgroundColor: 'blue',
      //   color: 'black'
      // }
    }

    let person = null;
    if(this.state.showPerson){
      person = (
        <div>
          {this.state.persons.map((per, index) => {
            return <Person 
              click={() =>this.deletePersonHandelr(index)}
              name={per.name} 
              age={per.age}
              key={per.id}
              changed={ (event) => this.nameChangedHandler(event, per.id)}
              />
          })}
        </div>
      )
      // style.backgroundColor = 'black';
      // style[':hover']= {
      //   backgroundColor: 'lightred',
      //   color: 'black'
      // }

    }

    let classes = [];//"red bold"

    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }


    return (
      // <StyleRoot>
      <div className="App">
        <h1 className = {classes}>You will be first App</h1>
        <p className = {classes.join(' ')}>it works!</p>
        <button onClick={this.upgradeHandler}>Upgrade</button>
        <button style = {style} onClick={this.toggleHandler}>Show Person</button>
        {person}
      </div>
      // </StyleRoot>
    );
  }
}
export default App;
// export default Radium(App);
