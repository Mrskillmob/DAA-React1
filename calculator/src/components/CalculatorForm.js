import React, { Component } from "react";
import NUmberInput from "./NUmberInput";
import OperationSelect from './OperationSelect';

export default class CalculatorForm extends Component {
    render() {
        return (
            <form className = "CalculatorForm">
                <NUmberInput />
                <NUmberInput />
                <OperationSelect />
                <input type="submit" value="Spocitaj" />


            </form>



        );


    }



}



