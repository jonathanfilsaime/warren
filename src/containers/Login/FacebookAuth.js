import React, {Component} from 'react';
import {Redirect}  from 'react-router'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';


class FacebookAuth extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response => {
        console.log(response)
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    logOut = () => {
        this.setState({
            isLoggedIn: false,
            userID: '',
            name: '',
            email: '',
            picture: ''
        })
    }

    componentClicked = () => {
        console.log()
    }

    render(){

        let fbContent;

        if(this.state.isLoggedIn){
            fbContent = (
                // <div onClick={this.logOut} className="ui blue facebook button">
                // <i class="facebook icon"></i>
                //     Log out
                // </div>
                <Redirect to="/app"/>

            )
        }else{
            fbContent = (
                
                <FacebookLogin
                    appId="339754106747665"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                    render={renderProps => (
                        <button className="ui blue facebook button" onClick={renderProps.onClick}>
                        <i class="facebook icon"></i>
                            Login with Facebook
                        </button>
                      )} />
                
            )
        }

        return(
                <div>
                    {fbContent}
                </div>
            );
        }

}

export default FacebookAuth;