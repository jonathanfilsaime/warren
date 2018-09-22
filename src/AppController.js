import {Controller} from 'controllerim';

class AppController extends Controller{
    constructor(comp) {
        super(comp);
        this.state = {
            symbol: [],
            price: []
        };
    }



    getSymbol(){
        return this.state.symbol;
    }

    getPrice() {
        return this.state.price;
    }

    setSymbol(value){
        this.state.symbol.push(value);
    }

    setPrice(value) {
        this.state.price.push(value);
    }

}

export default AppController;