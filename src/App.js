import { useMemo } from "react";

import DatePickerService from "./Services/DatePickerService"

import './App.css';

function App() {
  const service = useMemo(() => new DatePickerService(), [])

  return (
    <div dangerouslySetInnerHTML={{__html: service.generateCalendar(2023, 1)}}></div>
  );
}

export default App;
