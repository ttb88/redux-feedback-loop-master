import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger'; // tracks redux state before and after

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}



const feedbackReducer = (state = feedback, action) => {
    if (action.type === 'SET_FEEDBACK_FEELING') {
        return { ...state, feeling: action.payload};
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

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
