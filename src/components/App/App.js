import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
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
import FormLabel from '@material-ui/core/FormLabel';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  // input: {
  //   display: 'none',
  // },
  cssRoot: {
    // color: theme.palette.getContrastText(green[500]),
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
});




class App extends Component {
  state = {
    value: '',
  };



  
  handleChange = event => {
    this.setState({ value: event.target.value });
  };


  render() {
    const { classes } = this.props;

    return (
      <div className="App">

        <header className="App-header">
          <div className="App-title">
            <h1>Feedback!</h1>
            <h4>Don't forget it!</h4>
          </div>
        </header>

        {/* <div>
          <h2>How are you feeling today?</h2>
        </div> */}

        <div className="question-div">
          <MuiThemeProvider theme={theme}>
            <FormControl component="fieldset">

              <h2>How are you feeling today?</h2>
              {/* <FormLabel style={{ fontSize: '2rem'}}  color="primary" component="legend">How are you feeling today?</FormLabel> */}
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
          </MuiThemeProvider>
        </div>
      </div>

    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

