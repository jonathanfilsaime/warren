import {Controller} from 'controllerim';

class AppController extends Controller{
    constructor(comp) {
        super(comp);
        this.state = {symbol: []};
    }

    getSymbol(){
        return this.state.symbol;
    }


    setSymbol(value){
        //console.log('#########', this.state)
        this.state.symbol.push(value);
    }


    clearController(){
        this.state.symbol =[];
    }

}

export default AppController;