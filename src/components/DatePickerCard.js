import React, { Component } from 'react'
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';



export class DatePickerCard extends Component {
  
  render() {
    const { id, title, selectedDate } = this.props;
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          margin="normal"
          label={title}
          value={selectedDate}
          onChange={date => this.props.handleDateChange({ date: date, id: id })}
          format={'dd/MM/yyyy'}
        />
      </MuiPickersUtilsProvider>
    )
  }
  
}
export default DatePickerCard

