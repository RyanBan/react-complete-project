import React from 'react'

import Person from './Person/Person'

const persons = (props) => props.persons.map((per, index) => {
        return <Person 
          click={() =>props.clicked(index)}
          name={per.name} 
          age={per.age}
          key={per.id}
          changed={ (event) => props.changed(event, per.id)}
          />
      }


);
export default persons;