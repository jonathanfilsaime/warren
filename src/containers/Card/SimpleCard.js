import {Component} from 'react';
import './example.css';
import Card from './Card';
import React from 'react';

class SimpleCardClass extends Component {

    render(){
        const items = this.props.symbols.map((symbol, index) =>
        {
            return (<Card index={index} key={symbol.TICKER_SYMBOL} symbol={symbol.TICKER_SYMBOL} />);
        });

        return (
            <React.Fragment>
                    {items}
            </React.Fragment>
        );
    }
}

export default SimpleCardClass;

