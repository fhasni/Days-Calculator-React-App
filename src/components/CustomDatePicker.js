import React, { Component } from 'react'
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';



export class CustomDatePicker extends Component {

  state = {
    selectedDate: this.props.date,
    title: this.props.title,
  };


  handleDateChange = date => {
    console.log(date);
    this.setState({ selectedDate: date });
  };

  render() {
    const { title, selectedDate } = this.state;
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          margin="normal"
          label={title}
          value={selectedDate}
          onChange={this.handleDateChange}
        />
      </MuiPickersUtilsProvider>
    )
  }
}
export default CustomDatePicker

