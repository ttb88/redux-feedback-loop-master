import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import FeedbackReview from '../FeedbackReview/FeedbackReview';


class App extends Component {

  render() {
    // const { classes } = this.props;

    return (
      <div className="App">

        <header className="App-header">
          <div className="App-title">
            <h1>Feedback!</h1>
            <h4>Don't forget it!</h4>
          </div>
        </header>

        <Router>
          <div>
            <Route exact path="/" component={Feeling} />
            <Route exact path="/understanding" component={Understanding} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/comments" component={Comments} />
          </div>
        </Router>

        <FeedbackReview />
      </div>

    );
  }
}


export default App;

