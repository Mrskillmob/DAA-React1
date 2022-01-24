import React, { Component } from 'react';

export default class NUmberInput extends Component {
    render () {
        return (
            <label htmlFor="x">
            Prvni Cislo
            <input id = "x" type= "number" name = "x" required value = "0" />
            </label>
        );
    }
}




