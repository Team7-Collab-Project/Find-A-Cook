import React from 'react'

import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from 'date-fns/startOfWeek';
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css"
import {useState, useEffect, useRef} from "react";
import DatePicker from "react-datepicker";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const locales = {
  "en-IE": require("date-fns/locale/en-IE")
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: "Brian Cullen",
    start: new Date(2023,1,28,15,0,0),
    end: new Date(2023,1,28,18,30,0)
  },
  {
    title: "Unavailable",
    start: new Date(2023,1,15),
    end: new Date(2023,1,22)
  },
  {
    title: "Joseph",
    start: new Date(2023,1,24,12,0),
    end: new Date(2023,1,24,15,0)
  }
]

function Schedule(){
  const [newEvent, setNewEvent] = useState({title:"", start:"",end:""})
  const [allEvents, setAllEvents] = useState(events)
  const calendarRef = useRef(null);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
    setNewEvent({title:"", start:"",end:""});
  }

  return (
    <>
    
    <div ref={calendarRef} style={{backgroundColor:"white", border: "black solid 2px", borderTopLeftRadius: "5%", borderTopRightRadius: "5%"}}>
      <Calendar
        components={{
          dateCellWrapper: ({ children, value }) => React.cloneElement(children, { "data-date": value })
        }}
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        selectable={true}
      />
    </div>
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
          <h2>Add new booking</h2>
          <input type="text" 
            placeholder='Add Title' 
            style={{width:"20%", marginRight: "10px"}}
            value={newEvent.title} 
            onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
          />
          <DatePicker placeholderText='Start Date' style={{marginRight: "10px"}}
          selected={(newEvent.start)} onChange={(start) => setNewEvent({...newEvent,start})}/>
          <DatePicker placeholderText='End Date'
          selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent,end})}/>
      
          <Button variant="primary" onClick={() => {handleAddEvent();}}>Add Event</Button>
    </div>
    </>
  );
}

export default Schedule;