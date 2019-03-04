import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import FeedbackReview from '../FeedbackReview/FeedbackReview';
import FeedbackSubmitted from '../FeedbackSubmitted/FeedbackSubmitted';
import Admin from '../Admin/Admin';


class App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Feeling} />
            <Route exact path="/understanding" component={Understanding} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/comments" component={Comments} />
            <Route exact path="/feedback-review" component={FeedbackReview} />
            <Route exact path="/submitted" component={FeedbackSubmitted} />
            <Route exact path="/admin" component={Admin} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

