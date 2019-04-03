import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';


class RadioChoice extends Component {


    makeRadioButtons = () => {

        let radioButtons = [];
        for (let i = 1; i <= 5; i++) {

            radioButtons.push(
                <FormControlLabel
                    value={i + ''}
                    control={<Radio color="primary" />}
                    label={<Typography style={{ fontSize: '1.1rem', color: '#8a8989' }}>{i}</Typography>}
                    labelPlacement="bottom"
                />
            );
        }

        return (
            <RadioGroup
                style={{ display: 'block' }}
                aria-label="position"
                name="position"
                value={this.props.value}
                onChange={this.props.handleChange}
                row
            >
                <i className="material-icons">sentiment_very_dissatisfied</i>
                {radioButtons}
                <i className="material-icons">sentiment_very_satisfied</i>
            </RadioGroup>);
    }

    render() {

        return (
            <div>
                {this.makeRadioButtons()}
            </div>
        );
    }
}


export default RadioChoice;

