import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
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
});

const theme = createMuiTheme({
    palette: {
        primary: { main: blue[500] },
    },
    typography: {
        useNextVariants: true,
    },
});


class FeedbackSubmitted extends Component {

  
    handleClick = () => {
        console.log('next button clicked');
        this.props.dispatch({ type: 'RESET_FEEDBACK'});
        this.props.history.push("/");
    }


    render() {
        const { classes } = this.props;

        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <div className="submitted-div">
                        <FormControl component="fieldset">
                      
                            <h2>Thank you... feedback has been submitted!</h2>
                            <span className="submitted-icon"><i className="material-icons">done_all</i></span>

                            <div className="radio-buttons">
                              
                       
                                <div className="button-div">
                                    <Button onClick={this.handleClick} type="submit" value="submit" style={{ fontSize: '20px', marginTop: '60px' }} size='large' variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)}>
                                        Leave New Feedback
                                        <i className="material-icons">skip_next</i>
                                    </Button>
                                </div>
                            </div>
                        </FormControl>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

FeedbackSubmitted.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapReduxStateToProps)(FeedbackSubmitted));

