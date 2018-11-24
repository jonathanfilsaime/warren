import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Bookmark from '../Icons/Bookmark';
import Bookmarked from '../Icons/Bookmarked';
import Open from '../Icons/Open';
import SimpleTabs from '../Tabs/SimpleTabs';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/core/Icon';

const styles = {
    card: {
        maxWidth: 180,
        maxHeight: 250,
        minWidth: 180,
        minHeight: 250,
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

const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
}

const imgStyle = {
    height: '100px',
    width: 'fit-content'
}


class SimpleCard extends React.Component {
        state = {
            open: false,
            selected: false,
    };


    handleOpen = () => {
        console.log('onCLick of card')
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleClick = () => {
        console.log("***** here is the symbol", this.props.symbol);
        this.setState({selected : !this.state.selected});
    }

    bookmark = () =>
    {
        return (this.state.selected ? <Bookmarked/> : <Bookmark/>);
    }

    render() {
        const { classes, symbol } = this.props;
        console.log(this.state)

        const source = `https://storage.googleapis.com/iex/api/logos/${symbol}.png`;

            return (
                <React.Fragment>
                    <Card className={classes.card} >

                        <CardContent>
                            {console.log(source)} {console.log(<img src={source} style={imgStyle} alt={symbol}/>)}
                            <img src={source} style={imgStyle} alt={symbol}/>
                            <br/>
                            <br/>
                            <Typography variant="headline" component="h2" align="center">
                                {symbol}
                            </Typography>
                            <div style={divStyle}>
                                <IconButton onClick={this.handleClick}>
                                    {this.bookmark()}
                                </IconButton>
                                <ButtonBase key={symbol} onClick={this.handleOpen}>
                                    <Open/>
                                </ButtonBase>
                            </div>
                        </CardContent>
                    </Card>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <SimpleTabs symbol={symbol} onClose={this.handleClose}/>
                        </div>
                    </Modal>
                </React.Fragment>
            );
    }
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

SimpleCard = withStyles(styles)(SimpleCard);

export default SimpleCard;
