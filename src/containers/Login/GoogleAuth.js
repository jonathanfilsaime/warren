import React from 'react';
import {Redirect}  from 'react-router'

class GoogleAuth extends React.Component
{
    state = {
        isSignedIn: null,
        userId: null
    };

    componentDidMount()
    {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'449088284268-gr3ou8ji6rd0fb4p2uem3pmj4lfeampl.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn : this.auth.isSignedIn.get(), userId: this.auth.currentUser.get().getId() })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get(), userId: this.auth.currentUser.get().getId()});
    };

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutCLick = () => {
        this.setState({userId: null })
        this.auth.signOut();
    }

    renderAuthButton()
    {
        if(this.state.isSignedIn == null)
        {
            return null;
        }
        else if (this.state.isSignedIn)
        {
            return (
                // <button onClick={this.onSignOutCLick} className="ui red google button">
                // <i class="google icon"></i>
                //     Sign out
                // </button>

            <Redirect to="/app"/>
            );
        }
        else
        {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                <i class="google icon"></i>
                    Login with Google
                </button>
            )
        }
    }

    render()
    {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;

