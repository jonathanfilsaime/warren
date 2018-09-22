import React, {Component} from 'react';
import { observer} from 'controllerim';
import {Controller} from 'controllerim';
import './Display.css'
import AppController from "../../AppController";
import Card from '../Card/Card'

class display extends Component {
    componentWillMount() {
        this.parentController =  Controller.getParentController(this, AppController.name);
        console.log(this.parentController)
    }

    render(){
        return (<div className="Display">
            <p>{this.parentController.getMessage()}</p>
            <Card/>
        </div>);
    }

};

export default observer(display);