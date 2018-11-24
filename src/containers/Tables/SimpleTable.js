import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios";
import CardController from "../../CardController";
import { observer} from 'controllerim';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        overflowY: 'auto',
    },
    table: {
        minWidth: 700,
        overflowY: 'auto',
    },
});

let financialsRows = [];

const returnFinancialsRows = () =>
{
    return financialsRows;
}

let financialId = 0;
function createFinancialData(financial, amount) {
    financialId += 1;
    financialsRows.push({ financialId, financial, amount});
}

let keyStatsRows = [];

const returnkeyStatsRows = () =>
{
    return keyStatsRows;
}

let keyStatsId = 0;
function createkeyStatsData(keyStats, amount) {
    keyStatsId += 1;
    keyStatsRows.push({ keyStatsId, keyStats, amount});
}

class SimpleTable extends React.Component {
    componentWillMount() {
        this.controller = new CardController(this);
    }


    constructor(props) {
        super(props);

        this.state = {
            financialsRows: financialsRows,
            keyStatsRows: keyStatsRows,
        };
    }

    getFinancials = (symbol) => {
        axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/financials?period=annual`)
            .then(response => {
                financialsRows = [];
                createFinancialData("reportDate", response.data.financials[0].reportDate);
                createFinancialData("grossProfit", response.data.financials[0].grossProfit);
                // createFinancialData("costOfRevenue", response.data.financials[0].costOfRevenue);
                // createFinancialData("operatingRevenue", response.data.financials[0].operatingRevenue);
                // createFinancialData("totalRevenue", response.data.financials[0].totalRevenue);
                createFinancialData("operatingIncome", response.data.financials[0].operatingIncome);
                createFinancialData("netIncome", response.data.financials[0].netIncome);
                // createFinancialData("researchAndDevelopment", response.data.financials[0].researchAndDevelopment);
                createFinancialData("operatingExpense", response.data.financials[0].operatingExpense);
                createFinancialData("currentAssets", response.data.financials[0].currentAssets);
                createFinancialData("totalAssets", response.data.financials[0].totalAssets);
                createFinancialData("totalLiabilities", response.data.financials[0].totalLiabilities);
                // createFinancialData("currentCash", response.data.financials[0].currentCash);
                // createFinancialData("currentDebt", response.data.financials[0].currentDebt);
                createFinancialData("totalCash", response.data.financials[0].totalCash);
                createFinancialData("totalDebt", response.data.financials[0].totalDebt);
                // createFinancialData("shareholderEquity", response.data.financials[0].shareholderEquity);
                // createFinancialData("cashChange", response.data.financials[0].cashChange);
                // createFinancialData("cashFlow", response.data.financials[0].cashFlow);
                // createFinancialData("operatingGainsLosses", response.data.financials[0].operatingGainsLosses);
                console.log(symbol, "777777", returnFinancialsRows());
                this.setState(this.state.financialsRows = returnFinancialsRows());

            })
            .catch(error => {console.log(error)})
    }

    getKeyStats = (symbol) => {
        axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/stats`)
            .then(response => {
                keyStatsRows = [];
                createkeyStatsData("companyName", response.data.companyName);
                createkeyStatsData("marketcap", response.data.marketcap);
                // createkeyStatsData("beta", response.data.beta);
                // createkeyStatsData("week52high", response.data.week52high);
                // createkeyStatsData("week52low", response.data.week52low);
                // createkeyStatsData("week52change", response.data.week52change);
                // createkeyStatsData("shortInterest", response.data.shortInterest);
                // createkeyStatsData("shortDate", response.data.shortDate);
                createkeyStatsData("dividendRate", response.data.dividendRate);
                createkeyStatsData("dividendYield", response.data.dividendYield);
                // createkeyStatsData("exDividendDate", response.data.exDividendDate);
                // createkeyStatsData("latestEPS", response.data.latestEPS);
                // createkeyStatsData("latestEPSDate", response.data.latestEPSDate);
                // createkeyStatsData("sharesOutstanding", response.data.sharesOutstanding);
                // createkeyStatsData("float", response.data.float);
                createkeyStatsData("returnOnEquity", response.data.returnOnEquity);
                // createkeyStatsData("consensusEPS", response.data.consensusEPS);
                // createkeyStatsData("numberOfEstimates", response.data.numberOfEstimates);
                // createkeyStatsData("symbol", response.data.symbol);
                createkeyStatsData("EBITDA", response.data.EBITDA);
                // createkeyStatsData("revenue", response.data.revenue);
                // createkeyStatsData("grossProfit", response.data.grossProfit);
                // createkeyStatsData("cash", response.data.cash);
                // createkeyStatsData("debt", response.data.debt);
                // createkeyStatsData("ttmEPS", response.data.ttmEPS);
                createkeyStatsData("revenuePerShare", response.data.revenuePerShare);
                // createkeyStatsData("revenuePerEmployee", response.data.revenuePerEmployee);
                // createkeyStatsData("peRatioHigh", response.data.peRatioHigh);
                // createkeyStatsData("peRatioLow", response.data.peRatioLow);
                // createkeyStatsData("EPSSurpriseDollar", response.data.EPSSurpriseDollar);
                // createkeyStatsData("EPSSurprisePercent", response.data.EPSSurprisePercent);
                createkeyStatsData("returnOnAssets", response.data.returnOnAssets);
                createkeyStatsData("returnOnCapital", response.data.returnOnCapital);
                createkeyStatsData("profitMargin", response.data.profitMargin);
                createkeyStatsData("priceToSales", response.data.priceToSales);
                createkeyStatsData("priceToBook", response.data.priceToBook);
                // createkeyStatsData("day200MovingAvg", response.data.day200MovingAvg);
                // createkeyStatsData("day50MovingAvg", response.data.day50MovingAvg);
                // createkeyStatsData("institutionPercent", response.data.institutionPercent);
                // createkeyStatsData("insiderPercent", response.data.insiderPercent);
                // createkeyStatsData("shortRatio", response.data.shortRatio);
                // createkeyStatsData("year5ChangePercent", response.data.year5ChangePercent);
                // createkeyStatsData("year2ChangePercent", response.data.year2ChangePercent);
                // createkeyStatsData("year1ChangePercent", response.data.year1ChangePercent);
                // createkeyStatsData("ytdChangePercent", response.data.ytdChangePercent);
                // createkeyStatsData("month6ChangePercent", response.data.month6ChangePercent);
                // createkeyStatsData("month3ChangePercent", response.data.month3ChangePercent);
                // createkeyStatsData("month1ChangePercent", response.data.month1ChangePercent);
                // createkeyStatsData("day5ChangePercent", response.data.day5ChangePercent);
                console.log(symbol, "999999", returnkeyStatsRows());
                this.setState(this.state.keyStats = returnkeyStatsRows());
            })
            .catch(error => {console.log(error)})
    }

    componentDidMount(){
        this.getFinancials(this.props.symbol)
        this.getKeyStats(this.props.symbol)
    }

    render()
    {
        const { classes, symbol } = this.props;
        const { rows } = this.state;

        if(this.controller.getCardFinancials())

        if(this.props.label == "Financials")
        {
            return (
                <Paper className={classes.root}>
                    {console.log("label: -------> ", this.props.label)}
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Financials</TableCell>
                                <TableCell numeric>Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.financialsRows.map(row => {
                                return (
                                    <TableRow key={row.financialId}>
                                        <TableCell component="th" scope="row">
                                            {row.financial}
                                        </TableCell>
                                        <TableCell numeric>{row.amount}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            );

        }
        else
        {
            return (
                <Paper className={classes.root}>
                    {console.log("label: -------> ", this.props.label)}
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Key Stats</TableCell>
                                <TableCell numeric>Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.keyStatsRows.map(row => {
                                return (
                                    <TableRow key={row.keyStatsId}>
                                        <TableCell component="th" scope="row">
                                            {row.keyStats}
                                        </TableCell>
                                        <TableCell numeric>{row.amount}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            );
        }

    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(observer(SimpleTable));
