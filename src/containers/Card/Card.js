import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 275,
        maxHeight: 200,
        minWidth: 180,
        minHeight: 220,
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
    const source = `https://storage.googleapis.com/iex/api/logos/${symbol}.png`;
    return (
        <Card className={classes.card}>
            <CardContent>
                <img src={source}/>
                <Typography variant="headline" component="h2">
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
