import React, {Component} from 'react';
import { observer} from 'controllerim';
import {Controller} from 'controllerim';
import './Display.css';
import AppController from '../../AppController';
import Card from '../Card/SimpleCard';

class display extends Component {
    componentWillMount() {
        this.parentController =  Controller.getParentController(this, AppController.name);
        console.log("-------> HELLO <--------")
        console.log(this.parentController)
    }

    render(){
        return (<div className="Display">
                    <Card symbol={this.parentController.getSymbol()}/>
                </div>);
    }

};

export default observer(display);