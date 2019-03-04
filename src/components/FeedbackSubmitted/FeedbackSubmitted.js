import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Header from '../Header/Header';


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

    // dispatches clear of feedback object on redux and then redirects back to 'Feeling' component to begin new feedback
    handleClick = () => {
        console.log('next button clicked');
        this.props.dispatch({ type: 'RESET_FEEDBACK' });
        this.props.history.push("/");
    }


    render() {
        const { classes } = this.props;

        return (
            <div>
                <Header />
                <MuiThemeProvider theme={theme}>
                    <div className="submitted-div">
                        <FormControl component="fieldset">

                            <h2>Thank you... feedback has been submitted!</h2>
                            <span className="submitted-icon"><i className="material-icons">done_all</i></span>

                            <div className="button-div">
                                <Button onClick={this.handleClick} type="submit" value="submit" style={{ fontSize: '20px', marginTop: '30px' }} size='large' variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)}>
                                    Leave New Feedback
                                        <i className="material-icons">skip_next</i>
                                </Button>
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

