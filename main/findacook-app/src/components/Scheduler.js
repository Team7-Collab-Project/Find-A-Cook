/*import React, { useState, useEffect, useRef } from "react";
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
    .post("/api/schedules/addschedules", newEvent)
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



export default Scheduler;*/

/*const locales = {
  "en-IE": require("date-fns/locale/en-IE")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})
*/
  //const [newEvent, setNewEvent] = useState({title:"", start:"",startTime:"", end:"", endTime:""})
  //const [allEvents, setAllEvents] = useState(() => {
  //  const savedEvents = window.localStorage.getItem('Saved Events');
  //  return savedEvents ? JSON.parse(savedEvents) : events;
  //});

    /*const events = [
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
    },
    {
      title:"Joseline",
      start: new Date(2023,2,14,12,0),
      end: new Date(2023,2,14,15,0)
    },
    {
      title:"Unavailable",
      start: new Date(2023,2,18),
      end: new Date(2023,2,27)
    },
    {
      title:"George",
      start: new Date(2023,2,28,12,0),
      end: new Date(2023,2,28,15,0)
    },
    {
      title:"Conor",
      start: new Date(2023,3,12,12,0),
      end: new Date(2023,2,12,15,0)
    },
    {
      title:"Desmond",
      start: new Date(2023,3,25,12,0),
      end: new Date(2023,3,25,15,0)
    },
    {
      title:"Unavailable",
      start: new Date(2023,4,1),
      end: new Date(2023,4,5)
    },
    {
      title:"Temi",
      start: new Date(2023,4,5,12,0),
      end: new Date(2023,4,5,15,0)
    },
    {
      title:"Santos",
      start: new Date(2023,4,10,12,0),
      end: new Date(2023,4,10,15,0)
    },
    {
      title:"Kamil",
      start: new Date(2023,4,21,12,0),
      end: new Date(2023,4,21,15,0)
    },
    {
      title:"Unavailable",
      start: new Date(2023,5),
      end: new Date(2023,5)
    },
    {
      title:"Mabel",
      start: new Date(2023,6,1,12,0),
      end: new Date(2023,6,1,15,0)
    }
  ]*/
/*
  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
    setNewEvent({title:"", start:"",startTime:"", end:"", endTime:""});
  }

  useEffect(() => {
    console.log('All Events', allEvents)
  }, [allEvents])

  useEffect(() => {
    console.log('Saving Events to localStorage', allEvents);
    window.localStorage.setItem('Saved Events', JSON.stringify(allEvents));
  }, [allEvents]);

  useEffect(() => {
    const data = window.localStorage.getItem('Saved Events');
    console.log('Retrieved Events from localStorage', JSON.parse(data));
    if (data !== null) setAllEvents(JSON.parse(data));
  }, []);
  <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        selectable={true}
      />

      <div id="scheduleBooking" style={{ display: 'block', position: 'initial' }}>
          <h2>Add new booking</h2>
          <input id="titleInput" type="text" 
            placeholder='Add Title' 
            style={{width:"20%", marginRight: "10px"}}
            value={newEvent.title} 
            onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
          />
          <DatePicker id="DateInput" className="bookingInputs" placeholderText='Start Date' style={{marginRight: "10px"}}
          selected={(newEvent.start)} onChange={(start) => setNewEvent({...newEvent,start})}/>
          <TimePicker id="TimeInput" className="bookingInputs" placeholderText='Start Time' selected={(newEvent.startTime)} onChange={(startTime) => setNewEvent({...newEvent,startTime})}/>
          <DatePicker id="DateInput" className="bookingInputs" placeholderText='End Date'
          selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent,end})}/>
          <TimePicker id="TimeInput" className="bookingInputs" placeholderText='End Time' selected={(newEvent.endTime)} onChange={(endTime) => setNewEvent({...newEvent,endTime})}/>
      
          <Button id="bookBtn" variant="primary" onClick={() => {handleAddEvent();}}>Add Event</Button>
    </div>
*/

import React from 'react'

//import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from 'date-fns/startOfWeek';
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import {useState, useEffect, useRef} from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import AddEventModal from './AddEventModal';

function Scheduler(){
  const [modalOpen,setModalOpen] = useState(false);
  const [events, setEvents] = useState({title:"", start:"", end:""})
  const calendarRef = useRef(null);

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      title: event.title,
      start:moment(event.start).toDate(),
      end:moment(event.end).toDate()
    });
  };

  async function handleEventAdd(data){
      await axios.post("/calendar/addevent",data.event);
  }

  async function handleDateSet(data){
    const response = await axios.get("/calendar/getevents?start="+moment(data.start).toISOString+"&end="+moment(data.end).toISOString);
      setEvents(response.data);
  }

  return (
    <>
    <hr></hr>
    <div id="calendarBox">
      <button onClick={() => setModalOpen(true)}>Add Event</button>
    <div id="calendar" ref={calendarRef} style={{backgroundColor:"white", border: "black solid 2px", borderTopLeftRadius: "5%", borderTopRightRadius: "5%", left:"3.5%"}}>
      <FullCalendar
        ref={calendarRef}
        events={events}
        plugin={[dayGridPlugin]}
        initialView="dayGridMonth"
        eventAdd={(event) => handleEventAdd(event)}
        datesSet={(date) => handleDateSet(date)}
      />
    </div>
    <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)}/>
    </div>
    </>
  );
}

export default Scheduler;