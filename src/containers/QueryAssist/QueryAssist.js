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
        enumerations: ['GrossProfit','CostOfRevenue','OperatingRevenue','TotalRevenue','OperatingIncome','NetIncome',
            'ResearchAndDevelopment', 'OperatingExpense','CurrentAssets','TotalAssets','TotalLiabilities',
            'CurrentCash','CurrentDebt','TotalCash','TotalDebt','ShareholderEquity','CashChange','CashFlow',
            'OperatingGainsLosses']
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
    },
    {
        name: 'When',
        type: 'string',
        enumerations: ['CurrentRatio','Acid-TestRatio','CashRatio','OperatingCashFlowRatio','DebtRatio','DebtToEquityRatio',
            'InterestCoverageRatio', 'DebtServiceCoverageRatio','AssetTurnoverRatio','InventoryTurnoverRatio',
            'ReceivablesTurnoverRatio', 'DaysSalesInInventoryRatio','GrossMarginRatio','OperatingMarginRatio',
            'ReturnOnAssetsRatio','ReturnOnEquityRatio', 'BookValuePerShareRatio','DividendYieldRatio',
            'EarningsPerShareRatio','Price-EarningsRatio']
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
                    onSubmit={query => {this.setData();}}
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