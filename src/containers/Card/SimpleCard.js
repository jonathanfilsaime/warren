import {Component} from "react";
import {Controller, observer} from "controllerim";
import AppController from "../../AppController";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./example.css"
import Card from "./Card"
import React from "react";

class SimpleCardClass extends Component {

    componentWillMount() {
        this.parentController =  Controller.getParentController(this, AppController.name);
    }

    render(){
        let count = -1;


        const items = this.parentController.getSymbol().map(symbol =>
        {
            count++;
            return (
                    <Card key={count} symbol={symbol} price={this.parentController.getPrice()[count]}/>
            );

        });


        return (
            <React.Fragment>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={2000}
                    transitionLeaveTimeout={300}>
                    {items}
                </ReactCSSTransitionGroup>
            </React.Fragment>
        );
    }
}

export default observer(SimpleCardClass);

