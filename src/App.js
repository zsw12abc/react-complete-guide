import React, {Component} from "react";
// import Radium, {StyleRoot} from 'radium';
import logo from "./logo.svg";
import classes from "./App.css";
import Person from "./Person/Person";

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
        const style = {
            backgroundColor: 'green',
            color: "white",
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            // ':hover': {
            //     backgroundColor: "lightgreen",
            //     color: "black"
            // }
        };

        //person switch
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            // click={this.deletePersonHandler.bind(this, index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>
            );

            style.backgroundColor = "red";
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //     color: 'white'
            // }
        }

        const assignedClasses = [];

        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            //<StyleRoot>
            <div className={classes.App}>
                <header className={classes.header}>
                    <img src={logo} className={classes.logo} alt="logo"/>
                    <h1 className={classes.title}>Welcome to React</h1>
                </header>
                <p className={assignedClasses.join(' ')}>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Switch Name
                </button>
                {persons}
            </div>
            // </StyleRoot>
        );
    }
}

// export default Radium(App);
export default App;
