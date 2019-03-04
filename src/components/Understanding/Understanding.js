import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FeedbackReview from '../FeedbackReview/FeedbackReview';
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




class Understanding extends Component {

    state = {
        value: '',
    };


    // captures radio button selection
    handleChange = event => {
        this.setState({ value: event.target.value });
    };


    // dispatches radio button selection value to redux and then redirects to 'Support' component
    handleClick = () => {
        console.log('next button clicked');
        this.props.dispatch({ type: 'SET_FEEDBACK_UNDERSTANDING', payload: this.state.value });
        this.props.history.push("/support");
    }




    render() {
        const { classes } = this.props;

        return (
            <div>
                <Header />
                <MuiThemeProvider theme={theme}>
                    <div className="question-div">

                        <FormControl component="fieldset">

                            <h2>How well are you understanding the content?</h2>

                            <div className="radio-buttons">
                                <RadioGroup
                                    style={{ display: 'block' }}
                                    aria-label="position"
                                    name="position"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    row

                                >
                                    <i className="material-icons">contact_support</i>
                                    <FormControlLabel
                                        value="1"
                                        control={<Radio color="primary" />}
                                        label={<Typography style={{ fontSize: '1.1rem', color: '#8a8989'  }}>1</Typography>}
                                        labelPlacement="bottom"
                                    />
                                    <FormControlLabel
                                        value="2"
                                        control={<Radio color="primary" />}
                                        label={<Typography style={{ fontSize: '1.1rem', color: '#8a8989'  }}>2</Typography>}
                                        labelPlacement="bottom"
                                    />
                                    <FormControlLabel
                                        value="3"
                                        control={<Radio color="primary" />}
                                        label={<Typography style={{ fontSize: '1.1rem', color: '#8a8989'  }}>3</Typography>}
                                        labelPlacement="bottom"
                                    />
                                    <FormControlLabel
                                        value="4"
                                        control={<Radio color="primary" />}
                                        label={<Typography style={{ fontSize: '1.1rem', color: '#8a8989'  }}>4</Typography>}
                                        labelPlacement="bottom"
                                    />
                                    <FormControlLabel
                                        value="5"
                                        control={<Radio color="primary" />}
                                        label={<Typography style={{ fontSize: '1.1rem', color: '#8a8989'  }}>5</Typography>}
                                        labelPlacement="bottom"
                                    />
                                    <i className="material-icons">check_circle</i>
                                </RadioGroup>
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
                <FeedbackReview />
            </div>

        );
    }
}

Understanding.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapReduxStateToProps)(Understanding));

