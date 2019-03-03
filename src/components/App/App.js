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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


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




class App extends Component {

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

        <header className="App-header">
          <div className="App-title">
            <h1>Feedback!</h1>
            <h4>Don't forget it!</h4>
          </div>
        </header>

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

        <div className="review-form">
          <h2>Feedback Review</h2>
        </div>
          <div className={classes.root} style={{paddingRight: 20, paddingLeft: 20}}>
            <Grid container direction="row" justify="center"
              alignItems="center">
              <Grid >
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                      Feelings
                    </Typography>
                    <Typography variant="h2" component="h2">
                     5
                      </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions> */}
                </Card>
              </Grid>
              <Grid >
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                      Understanding
                    </Typography>
                    <Typography variant="h2" component="h2">
                      5
                      </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions> */}
                </Card>
              </Grid>
              <Grid >
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                      Support
                    </Typography>
                    <Typography variant="h2" component="h2">
                      5
                      </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions> */}
                </Card>
              </Grid>
              <Grid >
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                      Comments
                    </Typography>
                    <Typography variant="h2" component="h2">
                      5
                      </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions> */}
                </Card>
        
              </Grid>
            </Grid>
            <div className="button-div">
              <Button style={{ fontSize: '20px', marginTop: '60px' }} size='large' variant="contained" color="primary" disabled className={classNames(classes.margin, classes.cssRoot)}>
                Incomplete
                 {/* <Icon className={classes.rightIcon}>arrow_right</Icon> */}
                <i class="material-icons">indeterminate_check_box</i>
              </Button>
            </div>
          </div>

        </MuiThemeProvider>

      </div>

    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

