import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FeedbackReview from '../FeedbackReview/FeedbackReview';
import Header from '../Header/Header';
import RadioChoice from '../RadioChoice/RadioChoice';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    cssRoot: {
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[600],
        },
    },
});

const theme = createMuiTheme({
    palette: {
        primary: { main: blue[500] },
    },
    typography: {
        useNextVariants: true,
    },
});


class Feeling extends Component {
 
    state = {
        value: '',
    };

    // captures radio button selection
    handleChange = event => {
        console.log('my name kevin bacon');
        
        this.setState({ value: event.target.value });
    };

    // dispatches radio button selection value to redux and then redirects to 'Understanding' component
    handleClick = () => {
        console.log('next button clicked');
        this.props.dispatch({ type: 'SET_FEEDBACK_FEELING', payload: this.state.value });
        this.props.history.push("/understanding");
        
    }


    render() {
        const { classes } = this.props;

        return (
            <div>
                <Header />
                <MuiThemeProvider theme={theme}>
                    <div className="question-div">
                        <FormControl component="fieldset">

                            <h2>How are you feeling today?</h2>

                            <div className="radio-buttons">
                               <RadioChoice value={this.state.value} handleChange={this.handleChange} />
                                <div className="button-div">
                                    <Button onClick={this.handleClick} type="submit" value="submit" style={{ fontSize: '18px', marginTop: '35px' }} size='large' variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)}>
                                        Next
                                        <i className="material-icons">skip_next</i>
                                    </Button>
                                </div>
                            </div>
                        </FormControl>
                    </div>
                </MuiThemeProvider>
                <FeedbackReview fadeIn={this.state.fadeIn} />
            </div>
        );
    }
}

Feeling.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapReduxStateToProps)(Feeling));

