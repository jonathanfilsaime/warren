import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SimpleTable from '../Tables/SimpleTable'
import Chart from '../Chart/Chart'

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        position: 'absolute',
        width: `80%`,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class SimpleTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" >
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Financials" />
                        <Tab label="Key Stats" />
                        <Tab label="Graph" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><SimpleTable symbol={this.props.symbol} label={"Financials"}/></TabContainer>}
                {value === 1 && <TabContainer><SimpleTable symbol={this.props.symbol} label={"Key Stats"}/></TabContainer>}
                {value === 2 && <TabContainer><Chart symbol={this.props.symbol}/></TabContainer>}
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
