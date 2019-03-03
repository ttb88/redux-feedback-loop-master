import React, { Component } from 'react';
import axios from 'axios';
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



    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleClick = () => {
        console.log('next button clicked');
        this.props.history.push("/understanding");
    }





    
    render() {
        const { classes } = this.props;

        return (
            <div>
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
                                    <i className="material-icons">sentiment_very_dissatisfied</i>
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
                                    <i className="material-icons">sentiment_very_satisfied</i>
                                </RadioGroup>
                                <div className="button-div">
                                    <Button onClick={this.handleClick} type="submit" value="submit" style={{ fontSize: '20px', marginTop: '60px' }} size='large' variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)}>
                                        Next
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

Feeling.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Feeling);

