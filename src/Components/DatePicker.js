import React, { useMemo } from 'react'

import DatePickerService from "../Services/DatePickerService"

const DatePicker = () => {
    const service = useMemo(() => new DatePickerService(), []);
    const date = new Date();
    return (
        <table>
            <tr>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
            </tr>
            <tr>
                {() => {
                    service.getPreviousMonth(date)
                }}
                <th></th>
            </tr>
        </table>
    )
}

export default DatePicker