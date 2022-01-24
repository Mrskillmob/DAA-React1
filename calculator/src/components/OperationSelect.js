import React, { Component } from "react";

export default class OperationSelect extends Component{

    render() {
        return (
            <label htmlFor="operation">
                Operacie:
                <select Id="operation" name="operation" required value="">

                <option value ="">--Vyberte Operaciu--</option>
                <option value ="add">Scitanie</option>



                </select>


            </label>



        );



    }




}


