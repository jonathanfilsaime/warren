import {Controller} from 'controllerim';

class AppController extends Controller{
    constructor(comp) {
        super(comp);
        this.state = {
            message: 'hello'
        };
    }
    getMessage() {
        return this.state.message;
    }
    setMessage(value) {
        this.state.message = value;
    }
}

export default AppController;