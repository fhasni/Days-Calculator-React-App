import React, { Component } from 'react'
import DatePickerCard from './DatePickerCard';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



export class DaysCalculator extends Component {
    
    constructor(props) {
        super(props);
        var today = new Date();
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        this.state = {
            startDate: today,
            endDate: tomorrow
        }
    }

    handleDateChange = (params) => {
        if (params.id === "start_date") {
            this.setState({ startDate: params.date })
        } else if (params.id === "end_date") {
            this.setState({ endDate: params.date })

        }
    };

    render() {
        const { startDate, endDate } = this.state;
        return (
            <div >
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <DatePickerCard id="start_date" title="Start date" selectedDate={startDate} handleDateChange={this.handleDateChange} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <DatePickerCard id="end_date" title="End date" selectedDate={endDate} handleDateChange={this.handleDateChange}/>
                        </Paper>
                    </Grid>
                </Grid>
                <br></br>
                <p>
                    Days: {Math.floor(Math.abs((startDate.getTime() - endDate.getTime()) / (24 * 60 * 60 * 1000)))}
                </p>

            </div>
        )
    }
}

export default DaysCalculator
