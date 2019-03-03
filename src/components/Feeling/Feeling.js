import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
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



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing.unit,
    },
    // input: {
    //   display: 'none',
    // },
    cssRoot: {
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[600],
        },
    },
    card: {
        width: 300,
        height: 300,
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 35,
    },
    pos: {
        marginBottom: 12,
    },
});

const theme = createMuiTheme({
    palette: {
        primary: { main: blue[500] },
    },
});




class Feeling extends Component {

    state = {
        value: '',
    };



    handleChange = event => {
        this.setState({ value: event.target.value });
    };


    render() {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <div className="question-div">

                        <FormControl component="fieldset">

                            <h2>How are you feeling today?</h2>

                            <div className="radio-buttons">
                                <RadioGroup
                                    style={{ display: 'block' }}
                                    aria-label="position"
                                    name="position"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    row

                                >
                                    <i class="material-icons">sentiment_very_dissatisfied</i>
                                    <FormControlLabel
                                        value="1"
                                        control={<Radio color="primary" />}
                                        label={<Typography style={{ fontSize: '1.3rem', color: '#949494' }}>1</Typography>}
                                        labelPlacement="bottom"
                                    />
                                    <FormControlLabel
                                        value="2"
                                        control={<Radio color="primary" />}
                                        label={<Typography style={{ fontSize: '1.3rem', color: '#949494' }}>2</Typography>}
                                        labelPlacement="bottom"
                                    />
                                    <FormControlLabel
                                        value="3"
                                        control={<Radio color="primary" />}
                                        label={<Typography style={{ fontSize: '1.3rem', color: '#949494' }}>3</Typography>}
                                        labelPlacement="bottom"
                                    />
                                    <FormControlLabel
                                        value="4"
                                        control={<Radio color="primary" />}
                                        label={<Typography style={{ fontSize: '1.3rem', color: '#949494' }}>4</Typography>}
                                        labelPlacement="bottom"
                                    />
                                    <FormControlLabel
                                        value="5"
                                        control={<Radio color="primary" />}
                                        label={<Typography style={{ fontSize: '1.3rem', color: '#949494' }}>5</Typography>}
                                        labelPlacement="bottom"
                                    />
                                    <i class="material-icons">sentiment_very_satisfied</i>
                                </RadioGroup>
                                <div className="button-div">
                                    <Button style={{ fontSize: '20px', marginTop: '60px' }} size='large' variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)}>
                                        Next
                 {/* <Icon className={classes.rightIcon}>arrow_right</Icon> */}
                                        <i class="material-icons">skip_next</i>
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

Feeling.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Feeling);

