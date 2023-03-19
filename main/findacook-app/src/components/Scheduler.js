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

 useEffect(() => {
    axios.get("/api/schedules").then((response) => {
        if (response.data.status === "SUCCESS") {
            const fetchedEvents = response.data.events.map((event) => ({
                title: event.schedule_title,
                start: new Date(event.schedule_start),
                end: new Date(event.schedule_end),
            }));
            setEvents(fetchedEvents);
        }
    });
 }, []);

  function handleAddEvent() {
    axios
    .post("/api/schedules/addschedule", newEvent)
    .then((response) => {
      if (response.data.status === "SUCCESS") {
        setEvents([...events, newEvent]);
        setNewEvent({ title: "", start: "", end: "" });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
    
    <div ref={calendarRef} style={{backgroundColor:"white", border: "black solid 2px", borderTopLeftRadius: "5%", borderTopRightRadius: "5%"}}>
      <Calendar
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