import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaMinusCircle } from "react-icons/fa";
import { Button, Modal, Form } from "react-bootstrap";
import AddCategoryForm from "./AddCategoryForm";

const CategoryButton = () => {


  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const handleCategoryShow = () => setShowAddCategoryModal(true);
  const handleCategoryClose = () => setShowAddCategoryModal(false);

  return (
    <div className="">
      <div className="">
        <div className="">

          <div className="">
            <button
            className="add-category-btn"
              onClick={handleCategoryShow}
            >
              <FaPlus />
              <span> Add Category</span>
            </button>
          </div>


        </div>
      </div>


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

export default CategoryButton;
