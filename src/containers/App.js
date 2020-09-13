import React, { Component } from 'react';
import styles from './App.module.css';

// import Radium, {StyleRoot} from 'radium'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      {id:'1', name: 'thao', age: 24 },
      {id:'2', name: 'ban', age: 19},
      {id:'3', name: 'anyone', age: 23}
    ],
    showPerson: true
  }

  // static getDerivedStateFromProps(props, state){
  //   console.log('[App.js] getDerivedStateFromProps', props)
  // }


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

    //set state correctly (like counter)
    // this.setState((prevState, props) => {
    //   return{
    //   }
    // })

  }

  deletePersonHandelr = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})

  }
  //whenever react component renderd
  render() {

    console.log('[App.js] render')
    let person = null;
    if(this.state.showPerson){
      person = 
          <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandelr}
          changed={this.nameChangedHandler}/>
    }

    return (
      <div className={styles.App}>  
        <Cockpit
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.toggleHandler}
        />
        {person}
      </div>
    );
  }
}
export default App;
// export default Radium(App);
