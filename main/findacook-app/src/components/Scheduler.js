import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from 'date-fns/startOfWeek';
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';


const event = new Scheduler({
  title: 'James Willem',
  start: '2023-03-12T12:00:00',
  end: '2023-03-12T14:30:30'
})
await event.save();

const firstEvent = await Scheduler.findOne({});
console.log(firstEvent);


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

function Scheduler(){
  const [events, setEvents] = useState([]);
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
      
          <Button variant="primary" style ={{width: "20%", left: "33.8%"}}onClick={() => {handleAddEvent();}}>Add Event</Button>
    </div>
    </>
  );
}

export default Scheduler;