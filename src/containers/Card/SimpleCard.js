import {Component} from "react";
import {Controller, observer} from "controllerim";
import AppController from "../../AppController";
import "./example.css"
import Card from "./Card"
import React from "react";


class SimpleCardClass extends Component {

    componentWillMount() {
        this.parentController =  Controller.getParentController(this, AppController.name);
    }

    render(){

        const items = this.parentController.getSymbol().map(symbol =>
        {
            console.log(symbol)

            return (<Card key={symbol} symbol={symbol} />);

        });

        return (
            <React.Fragment>
                    {items}
            </React.Fragment>
        );
    }
}

export default observer(SimpleCardClass);

