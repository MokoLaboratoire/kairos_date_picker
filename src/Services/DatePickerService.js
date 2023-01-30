class DatePickerService {
    
    generateCalendar = (year, month) => {
        let month_javascript = month - 1;
        let date = new Date(year, month_javascript)

        let calendar = "<table><tr><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th></tr>"

        for(let i = 0; i < this.getDay(date); i++) {
            calendar += "<td></td>"
        }

        while(date.getMonth() === month_javascript) {
            calendar += "<td>" + date.getDate() + "</td>";
            if(this.getDay(date) % 7 === 6) {
                calendar += "</tr><tr>";
            }
            date.setDate(date.getDate() + 1);
        }

        calendar += "</tr></table>"

        return calendar;
    }

    getDay = (date) => {
        let day = date.getDay();
        if(day === 0) day = 7;
        return day - 1;
    }
  }
  
  export default DatePickerService;