import React, { Component } from 'react';

class Header extends Component {

    render() {

        return (
            <header className="App-header">
                <div className="App-title">
                    <div className='header-text-icon-div'>
                        {/* <img className="header-icon" src="/images/feedback_white.svg" /> */}
                        <img className="header-icon" src="/images/feedback_2.svg" />
                        <h1>Feedback!</h1>
                    </div>
                        <h4>Don't forget it!</h4>
                    
                </div>
            </header>
        );
    }
}


export default Header;

