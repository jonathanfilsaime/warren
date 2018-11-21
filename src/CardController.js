import {Controller} from 'controllerim';

class CardController extends Controller{
    constructor(comp) {
        super(comp);
        this.state = {};
    }

    setCard({symbol, type, data}){
        console.log("SETTING DATA ", data);
        console.log(this.state)

        console.log(this.state[symbol])

        if (!this.state[symbol]) {
            console.log('setting symbol')
            this.state[symbol] = {}
        }

        console.log(this.state.data)

        this.state[symbol][type] = data
        console.log("****************",this.state)
    }

    getCardFinancials(symbol)
    {
        console.log("GETTING")
        if(!this.state[symbol]) {
            return [];
        }
        return this.state[symbol].financials;
    }

    getCardKeyStats(symbol)
    {
        return this.state[symbol].keyStats;
    }

    getCardChart(symbol)
    {
        return this.state[symbol].chart;
    }

}

export default CardController;

