import React, {Component} from "react";
// import Radium, {StyleRoot} from 'radium';
import classes from "./App.css";
import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        persons: [
            {id: "asd1", name: "Shaowei", age: 25},
            {id: "asd2", name: "Kira", age: 21},
            {id: "asd3", name: "Yamato", age: 18},
        ],
        otherState: "some other value ",
        showPersons: false,
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons
        })
    };

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render() {
        //person switch
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>
        }

        return (
            //<StyleRoot>
            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}/>
                {persons}
            </div>
            // </StyleRoot>
        );
    }
}

// export default Radium(App);
export default App;
