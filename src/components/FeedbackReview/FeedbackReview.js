import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Header from '../Header/Header';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing.unit,
    },
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
        fontSize: 25,
    },
    pos: {
        marginBottom: 20,
    },
});

const theme = createMuiTheme({
    shadows: ["none"],
    palette: {
        primary: { main: blue[500] },
    },
    typography: {
        useNextVariants: true,
    },
});




class FeedbackReview extends Component {

    // the header is only displayed if all 4 feedback questions have been answered 
    headerDisplayCheck = () => {
        if (this.props.feedbackReducer.feeling === '' || this.props.feedbackReducer.understanding === '' || this.props.feedbackReducer.support === '' || this.props.feedbackReducer.comments === '') {
            return ''
        }
        else {
            return <Header />
        }
    }

     // the disabled until all 4 feedback questions have been answered 
    buttonEnabler = () => {
        console.log(this.props.feedbackReducer.feeling);

        const { classes } = this.props;

        if (this.props.feedbackReducer.feeling === '' || this.props.feedbackReducer.understanding === '' || this.props.feedbackReducer.support === '' || this.props.feedbackReducer.comments === '') {
            return <Button style={{ fontSize: '20px', marginTop: '40px' }} size='large' variant="contained" color="secondary" disabled className={classNames(classes.margin, classes.cssRoot)}>
                Incomplete
                <i className="material-icons">indeterminate_check_box</i>
            </Button>
        }
        else {
            return <Button onClick={this.handleFeedbackSubmit} style={{ fontSize: '20px', marginTop: '40px' }} size='large' variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)}>
                Submit
                <i className="material-icons">check_box</i>
            </Button>
        }
    }

    // once the submit button is clicked the feedback object cfrom redux containing all answers from the 4 questions is send by POST route to the server and then inserted into the database  
    // also redirects to 'Submitted' component  
    handleFeedbackSubmit = () => {
        console.log('feedback submit clicked');
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.feedbackReducer
        }).then(() => {
            this.props.history.push("/submitted");
        }).catch(function () {
            console.log('Feedback could not be sent');
        });
    }



    render() {
        const { classes } = this.props;


        return (
            <div>
                {this.headerDisplayCheck()}
                <MuiThemeProvider theme={theme}>
                    <div className="review-form">
                        <h2>Feedback Review</h2>
                        <p>review and submit once complete</p>
                    </div>

                    <div className="review-cards"></div>
                    <div className={classes.root} style={{ paddingRight: 20, paddingLeft: 20 }}>
                        <Grid container direction="row" justify="center"
                            alignItems="center">
                            <Grid >
                                <Card className={classes.card}>
                                    <CardContent>
                                        <img src="images/rating.svg" alt="rating" className="review-images" />
                                        <Typography variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                                            Feelings
                                    </Typography>
                                        <Typography variant="h2" component="h2" style={{ color: '#2195f3d7' }}>
                                            {this.props.feedbackReducer.feeling}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid >
                                <Card className={classes.card}>
                                    <CardContent>
                                        <img src="images/knowledge.svg" alt="thinking" className="review-images" />
                                        <Typography variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                                            Understanding
                                     </Typography>
                                        <Typography variant="h2" component="h2" style={{ color: '#2195f3d7' }}>
                                            {this.props.feedbackReducer.understanding}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid >
                                <Card className={classes.card}>
                                    <CardContent>
                                        <img src="images/lifesaver.svg" alt="life perserver" className="review-images" />
                                        <Typography variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                                            Support
                                     </Typography>
                                        <Typography variant="h2" component="h2" style={{ color: '#2195f3d7' }}>
                                            {this.props.feedbackReducer.support}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid >
                                <Card className={classes.card}>
                                    <CardContent>
                                        <img src="images/comment.svg" alt="comment bubble" className="review-images" />
                                        <Typography variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                                            Comments
                                   </Typography>
                                        <Typography variant="h6" component="h6" style={{ color: '#2195f3d7', lineHeight: '20px' }}>
                                            {this.props.feedbackReducer.comments}
                                        </Typography>
                                    </CardContent>
                                </Card>

                            </Grid>
                        </Grid>
                        <div className="button-div">
                        {this.buttonEnabler()}
                        </div>
                    </div>

                </MuiThemeProvider>
            </div>
        );
    }
}

FeedbackReview.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapReduxStateToProps)(FeedbackReview));

