import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger'; 


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}

// holds the selections for the 4 feedback questions and is then accessed from the 'FeedbackReview' component to display on DOM and the 'FeedbackSubmitted' component to send to server/database
const feedbackReducer = (state = feedback, action) => {
    if (action.type === 'SET_FEEDBACK_FEELING') {
        return { ...state, feeling: action.payload };
    }
    else if (action.type === 'SET_FEEDBACK_UNDERSTANDING') {
        return { ...state, understanding: action.payload };
    }
    else if (action.type === 'SET_FEEDBACK_SUPPORT') {
        return { ...state, support: action.payload };
    }
    else if (action.type === 'SET_FEEDBACK_COMMENTS') {
        return { ...state, comments: action.payload };
    }
    else if (action.type === 'RESET_FEEDBACK') {
        return feedback;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
