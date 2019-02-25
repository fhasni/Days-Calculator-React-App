import React, { Component } from 'react'
import CustomDatePicker from './CustomDatePicker';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


export class DaysCalculator extends Component {

    state = {
        startDate: Date(),
        endDate: Date()
    }

    render() {
        const { startDate, endDate } = this.state;
        return (
            <div >
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <CustomDatePicker title="Start date" date={startDate} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <CustomDatePicker title="End date" date={endDate} />
                        </Paper>
                    </Grid>
                </Grid>
                <br></br>
                <p>Days:</p>

            </div>
        )
    }
}

export default DaysCalculator
