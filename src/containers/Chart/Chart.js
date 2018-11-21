import React from "react";
import Paper from "@material-ui/core/Paper";
import { Scale } from "@devexpress/dx-react-chart";
import {
    Chart,
    ValueAxis,
    SplineSeries,
} from "@devexpress/dx-react-chart-material-ui";
import axios from "axios";

let data = []

class Graph extends React.Component {
    constructor(props) {
        super(props);

        this.state = { data: [] };
    }


    getData = (symbol) => {
        axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/5y`)
            .then(response => {data = []; (response.data).map(info => {data.push({value: info.close, argument: info.date })})})
            .catch(error => {console.log(error)})
    }

    componentDidMount(){
        this.getData(this.props.symbol)
    }

    render() {
        return (
            <Paper>
                <Chart data={data} width={650} height={500}>
                    <ValueAxis />
                    <SplineSeries valueField="value" argumentField="argument" />
                    <Scale />
                </Chart>
            </Paper>
        );
    }
}

export default Graph;