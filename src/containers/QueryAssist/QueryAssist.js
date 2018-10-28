import React, { Component } from 'react'
import styled from 'react-emotion'
import { injectGlobal } from 'emotion'
import QueryAssist from 'react-query-assist'
import { observer } from 'controllerim';
import AppController from '../../AppController'
import Display from "../Display/Display";
import axios from 'axios';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, sans-serif;
  }
`

const Container = styled('div')`
  background: #282B37;
  width: 100vw;
  height: 10vh;
  padding: 20px;
`

const Title = styled('h2')`
  color: #FFFFFF;
  margin-bottom: 15px;
  font-weight: 600;
`

const Assist = styled(QueryAssist)`
  margin-bottom: 50px;
`

const Footer = styled('div')`
  padding: 15px;
  text-align: center;
`

export const Link = styled('a')`
  display: inline-block;
  background: #6554AF;
  border: 1px solid #58499B;
  border-radius: 4px;
  color: #FFFFFF;
  font-weight: 300;
  text-decoration: none;
  padding: 7px 15px;
  cursor: pointer;
`

const data = [
    {
        name: 'Find',
        type: 'string',
        enumerations: ['Top10Stocks', 'Top50Stocks', 'Top100Stocks', 'AllStocks']
    },
    {
        name: 'Where',
        type: 'string',
        enumerations: ['REPORT_DATE', 'COMPANY_NAME', 'TICKER_SYMBOL', 'GROSS_PROFIT', 'COST_OF_REVENUE',
            'OPERATING_REVENUE', 'TOTAL_REVENUE', 'OPERATING_INCOME', 'NET_INCOME', 'RESEARCH_AND_DEVELOPMENT',
            'OPERATING_EXPENSES', 'CURRENT_ASSETS', 'TOTAL_ASSETS', 'TOTAL_LIABILITIES', 'CURRENT_CASH',
            'CURRENT_DEBT', 'TOTAL_CASH', 'TOTAL_DEBT', 'SHARE_HOLDER_EQUITY', 'CASH_CHANGE', 'CASH_FLOW',
            'OPERATING_GAINS_LOSSES', 'MARKET_CAP', 'DIVIDEND_RATE', 'DIVIDEND_YIELD', 'CASH_TRAILING_TWELVE_MONTHS',
            'DEBT_TRAILING_TWELVE_MONTHS', 'REVENUE_PER_SHARE_TRAILING_TWELVE_MONTHS',
            'REVENUE_PER_EMPLOYEE_TRAILING_TWELVE_MONTHS', 'RETURN_ON_ASSETS_TRAILING_TWELVE_MONTHS',
            'RETURN_ON_CAPITAL_TRAILING_TWELVE_MONTHS', 'PROFIT_MARGIN', 'PRICE_TO_SALES', 'PRICE_TO_BOOK',
            'CURRENT_RATIO', 'CASH_RATIO', 'OPERATING_CASH_FLOW_RATIO', 'DEBT_RATIO', 'DEBT_TO_EQUITY_RATIO',
            'DEBT_SERVICE_COVERAGE_RATIO', 'ASSET_TURNOVER_RATIO', 'GROSS_MARGIN_RATIO', 'OPERATING_MARGIN_RATIO',
            'RETURN_ON_ASSETS_RATIO', 'RETURN_ON_EQUITY_RATIO' ]
    },
    {
        name: 'is',
        type: 'string',
        enumerations: ['greater', 'less']
    },
    {
        name: 'Than',
        type: 'string',
        enumerations: ['0.01','0.1','0.5','1','2','3', '4', '5','6','7','8', '9','10','15','20','25', '50','100',
            '$1,000,000','$10,000,000','$100,000,000','$1,000,000,000','$5,000,000,000','$10,000,000,000',
            '$50,000,000,000','$100,000,000,000','$200,000,000,000','$300,000,000,000','$500,000,000,000']
    }
]

class AssistSearch extends Component {

    componentWillMount() {
        this.controller = new AppController(this);
    }

    setData = () => {
        axios.get('https://sherlock-warren-db.firebaseio.com/.json', { crossdomain: true })
            .then(response => {Object.keys(response.data.Company).map(name =>
            {this.controller.setSymbol(response.data.Company[name]["Symbol"]);
                this.controller.setPrice(response.data.Company[name]["Price"]);})})
            .catch(error => {console.log(error); })

    };

    getData = (sql) => {
        axios.get('http://localhost:8080/search/param', { crossdomain: true, params: {search: sql }})
            .then(response => (response.data).map(company => {
                this.controller.setSymbol(company.ticker_SYMBOL);
                this.controller.setPrice(company.ticker_SYMBOL);
            }))
            .catch(error => {console.log(error)})
    }



    render () {
        const inputProps = {
            bg: '#393B4A',
            border: '1px solid #1F1E21',
            borderRadius: '4px',
            color: '#9FA2B2',
            placeholderColor: 'rgba(255, 255, 255, 0.2)',
            tokenColor: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 300,
            fontFamily: 'monospace',
            lineHeight: '20px',
            p: '15px 20px'
        }

        const dropdownProps = {
            bg: '#808498',
            borderRadius: '2px',
            fontSize: '14px',
            fontWeight: 400,
            fontFamily: '-apple-system, sans-serif'
        }

        const selectorProps = {
            bg: '#6554AF',
            border: '1px solid #58499B',
            color: '#FFFFFF'
        }

        const footer = () => (
            <Footer>
                <Link
                    target='_blank'
                    href='https://timber.io/docs/app/console/searching'>
                    Learn more
                </Link>
            </Footer>
        )

        return (
            <Container>
                <Assist
                    placeholder=
                        'Find:Top50Stocks Where:TotalRevenue is:greater Than:$100,000,000,000 When:DebtToEquityRatio is:less Than:2'
                    onSubmit={query => {this.getData(query); this.controller.clearController(); console.log(query)}}
                    data={data}
                    inputProps={inputProps}
                    dropdownProps={dropdownProps}
                    selectorProps={selectorProps}
                    footerComponent={footer} />
                <Display/>
            </Container>
        )

    }
}

export default observer(AssistSearch);