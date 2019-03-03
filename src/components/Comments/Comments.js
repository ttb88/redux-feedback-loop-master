import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FeedbackReview from '../FeedbackReview/FeedbackReview';




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
    };



    handleChange = event => {
        this.setState({ input: event.target.value });
    };

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
            <div className="App">
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
                                        // htmlFor="input-with-icon-adornment"
                                    >
                                        Comments
                                    </InputLabel>
                                    <OutlinedInput
                                    // id="input-with-icon-adornment"
                                    // startAdornment={
                                    //     <InputAdornment position="start">
                                    //         <AccountCircle />
                                    //     </InputAdornment>
                                    // }
                                   
                                        id="component-outlined"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                                    />
                                </FormControl>
                                <div className="button-div">
                                    <Button onClick={this.handleClick} type="submit" value="submit" style={{ fontSize: '20px', marginTop: '60px' }} size='large' variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)}>
                                        Submit
                                        <i className="material-icons">done</i>
                                    </Button>
                                </div>
                            </div>
                    </div>

                </MuiThemeProvider>
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

