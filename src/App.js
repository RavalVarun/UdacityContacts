import React from 'react';

class Contactlist extends React.Component {
  render() {
    const people = this.props.contacts

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

function App() {
  return (
    <div className="App">
      <Contactlist contacts = {[
        {name: 'Tyler'},
        {name: 'Karen'},
        {name: 'Richard'}
      ]}/>

      <Contactlist contacts = {[
        {name: 'Amanda'},
        {name: 'Mikenzi'},
        {name: 'Ryan'}
      ]}/>
    </div>
  );
}

export default App;
