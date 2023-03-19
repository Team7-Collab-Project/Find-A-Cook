import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
// import DatePicker from "react-datepicker";
import axios from "axios";
// import "react-datepicker/dist/react-datepicker.css";
import { FaWindowClose } from 'react-icons/fa'

const BookingForm = ({setOpen, cookId}) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  
  return (
<>

  
</>
  );

};

export default BookingForm;