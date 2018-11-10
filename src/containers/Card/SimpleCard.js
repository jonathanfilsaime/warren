import {Component} from "react";
import {Controller, observer} from "controllerim";
import AppController from "../../AppController";
import Modal from '@material-ui/core/Modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Paper from '../Test/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import "./example.css"
import Card from "./Card"
import React from "react";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class SimpleCardClass extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        console.log("got click mate");
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentWillMount() {
        this.parentController =  Controller.getParentController(this, AppController.name);
    }

    render(){

        const items = this.parentController.getSymbol().map(symbol =>
        {
            console.log(symbol)

            return (<ButtonBase key={symbol} >
                            {this.state.open ? <Paper/> : console.log("close")}
                            <Card symbol={symbol} />
                    </ButtonBase>);

        });

        return (
            <React.Fragment>
                {/*<ReactCSSTransitionGroup*/}
                    {/*transitionName="example"*/}
                    {/*transitionEnterTimeout={0}*/}
                    {/*transitionLeaveTimeout={0}>*/}
                    {items}
                {/*</ReactCSSTransitionGroup>*/}
            </React.Fragment>
        );
    }
}

export default observer(SimpleCardClass);


{/*<ButtonBase*/}
    {/*key={count}*/}
    {/*onClick={this.handleOpen}*/}
{/*>*/}
    {/*<Modal*/}
        {/*key={count}*/}
        {/*aria-labelledby="simple-modal-title"*/}
        {/*aria-describedby="simple-modal-description"*/}
        {/*open={this.state.open}*/}
        {/*onClose={this.handleClose}*/}
    {/*>*/}
        {/*<Card key={count} symbol={symbol} price={this.parentController.getPrice()[count]}/>*/}
    {/*</Modal>*/}
{/*</ButtonBase>);*/}
