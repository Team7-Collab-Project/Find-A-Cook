import React, { useState } from 'react';
import { FaPlus, FaMinusCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form  } from 'react-bootstrap';
import AddFoodForm from './AddFoodForm';

const AdminButtons = () => {

    const [showAddFoodModal, setShowAddFoodModal] = useState(false);
    const handleShow = () => setShowAddFoodModal(true);
    const handleClose = () => setShowAddFoodModal(false);

    return(
  <div className='bg-light my-2'>
    <div className='container'>
      <div className='row pb-3'>

        <div className='col-md-4 my-1'>
          <Button
            variant="outline-warning"
            // block
            // data-target='#addFoodModal'
            onClick={handleShow}
          >
            <FaPlus />
            <span> Add Food</span>
          </Button>
        </div>

        <div className='col-md-4 my-1'>
          <Button variant="outline-success" block>
            <span>View Orders</span>
          </Button>
        </div>
      </div>
    </div>


    <Modal id='addCategoryModal' show={showAddFoodModal} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Add Food</Modal.Title>
  </Modal.Header>
  <Modal.Body>
        <AddFoodForm />
  </Modal.Body>
  <Modal.Footer>
  <div className='modal-footer'>
							<button
								className='btn btn-secondary'
								data-dismiss='modal'
							>
								Close
							</button>
							<button
								type='submit'
								className='btn btn-warning text-white'
							>
								Submit
							</button>
						</div>
  </Modal.Footer>
</Modal>

    {/* <Modal id='addCategoryModal' ... />
    <Modal id='addFoodModal' ... /> */}
  </div>
    )
};



export default AdminButtons;