import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FeedbackReview from '../FeedbackReview/FeedbackReview';
import Header from '../Header/Header';
import Fade from '@material-ui/core/Fade';




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
    formControl: {
        margin: theme.spacing.unit,
        width: 600,
        height: 50,
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




class Comments extends Component {

    state = {
        input: '',
        checked: true,
    };


    // captures text input
    handleChange = event => {
        this.setState({ input: event.target.value });
    };

     // dispatches text input to redux and then redirects to 'FeedbackReview' component
    handleClick = () => {
        console.log('next button clicked');
        this.props.dispatch({ type: 'SET_FEEDBACK_COMMENTS', payload: this.state.input });
        this.props.history.push("/feedback-review");
    }


    componentDidMount() {
        this.forceUpdate();
    }




    render() {
        const { classes } = this.props;

        return (

            <div>
                <Header />
                <Fade in={this.state.checked}>
                    <MuiThemeProvider theme={theme}>
                        <div className="question-div">



                            <h2>Any comments you would like to leave?</h2>

                            <div className="comments-input">
                                <i className="material-icons">add_comment</i>
                                <FormControl className={classes.formControl} variant="outlined">
                                    <InputLabel
                                        ref={ref => {
                                            this.labelRef = ReactDOM.findDOMNode(ref);
                                        }}
                                        htmlFor="component-outlined"
                                    >
                                        Comments
                                    </InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                                    />
                                </FormControl>
                                <div className="button-div">
                                    <Button onClick={this.handleClick} type="submit" value="submit" style={{ fontSize: '18px', marginTop: '35px'  }} size='large' variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)}>
                                        Next
                                        <i className="material-icons">done</i>
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </MuiThemeProvider>
                </Fade>
                <FeedbackReview />
            </div>


        );
    }
}


Comments.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapReduxStateToProps)(Comments));

