import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaMinusCircle } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import AddFoodForm from "./AddFoodForm";
import AddCategoryForm from "./AddCategoryForm";

const AdminButtons = () => {

  const [showAddFoodModal, setShowAddFoodModal] = useState(false);
  const handleFoodShow = () => setShowAddFoodModal(true);
  const handleFoodClose = () => setShowAddFoodModal(false);

  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const handleCategoryShow = () => setShowAddCategoryModal(true);
  const handleCategoryClose = () => setShowAddCategoryModal(false);

  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            {/* <button
            className="add-food-btn"
              onClick={handleFoodShow}
            >
              <FaPlus />
              <span> Add Food</span>
            </button> */}
          </div>

          <div className="">
            <button
            className="add-food-btn"
              onClick={handleCategoryShow}
            >
              <FaPlus />
              <span> Add Category</span>
            </button>
          </div>

          {/* <div className="col-md-4 my-1">
            <Button variant="outline-success" >
              <span>View Orders</span>
            </Button>
          </div> */}
        </div>
      </div>

      <Modal id='foodModal' show={showAddFoodModal} onHide={handleFoodClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddFoodForm />
        </Modal.Body>
        <Modal.Footer>
          <div className="">
            <button className="form-footer-button" onClick={handleFoodClose}>
              Close
            </button>
            {/* <button type="submit" className="form-footer-button">
              Submit
            </button> */}
          </div>
        </Modal.Footer>
      </Modal>


      <Modal id='categoryModal' show={showAddCategoryModal} onHide={handleCategoryClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddCategoryForm />
        </Modal.Body>
        <Modal.Footer>
          <div className="">
            <button className="form-footer-button" onClick={handleCategoryClose}>
              Close
            </button>
            {/* <button type="submit" className="form-footer-button">
              Submit
            </button> */}
          </div>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default AdminButtons;
