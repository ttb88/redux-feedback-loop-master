import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import AdminTable from './AdminTable';



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


class Admin extends Component {

    state = {
        value: '',
    };



    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleClick = () => {
        console.log('next button clicked');
        this.props.dispatch({ type: 'SET_FEEDBACK_FEELING', payload: this.state.value });
        this.props.history.push("/understanding");
    }






    render() {
        const { classes } = this.props;

        return (
            <div>
                <header className="App-header">
                    <div className="App-title">
                        <h1>Feedback Results</h1>
                        {/* <h4>Don't forget it!</h4> */}
                    </div>
                </header>
                {/* <MuiThemeProvider theme={theme}>
            
                </MuiThemeProvider> */}
                <AdminTable />
            </div>
        );
    }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapReduxStateToProps)(Admin));

