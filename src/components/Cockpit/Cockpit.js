import React from 'react';
import classes from './Cockpit.css'
import logo from "./logo.svg";

const cockpit = (props) => {
    const assignedClasses = [];

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <header className={classes.header}>
                <img src={logo} className={classes.logo} alt="logo"/>
                <h1 className={classes.title}>Welcome to React</h1>
            </header>
            <p className={assignedClasses.join(' ')}>
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <button
                className={btnClass}
                onClick={props.clicked}>Switch Name
            </button>
        </div>
    )
};

export default cockpit;