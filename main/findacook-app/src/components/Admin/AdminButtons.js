import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaMinusCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import AddFoodForm from "./AddFoodForm";

const AdminButtons = () => {

  const [showAddFoodModal, setShowAddFoodModal] = useState(false);
  const handleShow = () => setShowAddFoodModal(true);
  const handleClose = () => setShowAddFoodModal(false);

  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <button
            className="add-food-btn"
              onClick={handleShow}
            >
              <FaPlus />
              <span> Add Food</span>
            </button>
          </div>

          <div className="col-md-4 my-1">
            <Button variant="outline-success" >
              <span>View Orders</span>
            </Button>
          </div>
        </div>
      </div>

      <Modal id='foodModal' show={showAddFoodModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddFoodForm />
        </Modal.Body>
        <Modal.Footer>
          <div className="">
            <button className="form-footer-button" onClick={handleClose}>
              Close
            </button>
            <button type="submit" className="form-footer-button">
              Submit
            </button>
          </div>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default AdminButtons;
