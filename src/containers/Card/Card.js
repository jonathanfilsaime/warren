import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Controller, observer} from "controllerim";
import AppController from "../../AppController";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const styles = {
    card: {
        maxWidth: 275,
        maxHeight: 200,
        minWidth: 275,
        minHeight: 200,
        margin: 10,
        flexGrow: 1,
        display: 'inline-block',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function SimpleCard(props) {
    const { classes, price, symbol } = props;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="headline" component="h2">
                    {symbol}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography component="p">
                    {price}
                </Typography>
            </CardContent>
        </Card>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

SimpleCard = withStyles(styles)(SimpleCard);


export default SimpleCard;


{/*<React.Fragment>*/}
    {/*<ReactCSSTransitionGroup*/}
        {/*transitionName="example"*/}
        {/*transitionEnterTimeout={2000}*/}
        {/*transitionLeaveTimeout={300}>*/}
        {/*<Card className={classes.card}>*/}
            {/*<CardContent>*/}
                {/*<Typography variant="headline" component="h2">*/}
                    {/*{symbol}*/}
                {/*</Typography>*/}
                {/*<Typography className={classes.pos} color="textSecondary">*/}
                    {/*adjective*/}
                {/*</Typography>*/}
                {/*<Typography component="p">*/}
                    {/*{price}*/}
                {/*</Typography>*/}
            {/*</CardContent>*/}
        {/*</Card>*/}
    {/*</ReactCSSTransitionGroup>*/}
// </React.Fragment>

