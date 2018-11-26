import React, {Component} from 'react';
import './Display.css';
import Card from '../Card/SimpleCard';

class display extends Component {

    render(){
        return (<div className="Display">
                    <Card symbols={this.props.symbols}/>
                </div>);
    }

};

export default display;