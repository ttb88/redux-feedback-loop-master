import React, { Component } from 'react';
// import axios from 'axios';
// import './App.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
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
        height: 200,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
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
    typography: {
        useNextVariants: true,
    },
});



class FeedbackReview extends Component {

    render() {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return (
            <MuiThemeProvider theme={theme}>
                <div className="review-form">
                    <h2>Feedback Review</h2>
                </div>
                <div className={classes.root} style={{ paddingRight: 20, paddingLeft: 20 }}>
                    <Grid container direction="row" justify="center"
                        alignItems="center">
                        <Grid >
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                                        Feelings
                                    </Typography>
                                    <Typography variant="h2" component="h2" style={{ color: '#38c985' }}>
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
                                    <Typography variant="h2" component="h2" style={{ color: '#38c985' }}>
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
                                    <Typography variant="h2" component="h2" style={{ color: '#38c985' }}>
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
                                    <Typography variant="h2" component="h2" style={{ color: '#38c985' }}>
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
                            <i className="material-icons">indeterminate_check_box</i>
                        </Button>
                    </div>
                </div>

            </MuiThemeProvider>

        );
    }
}

FeedbackReview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedbackReview);

