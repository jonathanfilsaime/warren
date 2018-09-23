import {Component} from 'react';
import {Controller, observer} from 'controllerim';
import AppController from '../../AppController';
import Card from '../Card/Card';

class SimpleCard extends Component{
    componentWillMount() {
        this.parentController =  Controller.getParentController(this, AppController.name);
        console.log(this.parentController)
    }

    render(){
        let count = -1;
        return this.parentController.getSymbol().map(symbol =>
        {count++;
            return Card(this.props, symbol, this.parentController.getPrice()[count])});

    }
}

export default observer(SimpleCard);