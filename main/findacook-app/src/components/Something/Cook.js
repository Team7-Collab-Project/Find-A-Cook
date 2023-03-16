import React, {useState} from 'react';
import { Modal, Carousel, Button } from "react-bootstrap";
import "./Cook.css";

const Cook = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
      <div class="test-container">

        <div class="profile-info">

          <div class="product-section">

          <div className="card__details">
        <h3>Soeng Souy</h3>
        <img src="../images/cook1.jpg" alt="User Profile Picture" className='cookImg' />
        <div className="smallText">Cuisine: Korean</div>
        <div className="smallText">Rating: ⭐⭐⭐⭐ (123 Reviews)</div>

        <button onClick={handleShow}>View Details</button>

        <div className='cookCards'>
    <div className="cookCard">
      <div className="card__img">

          <picture>
            <img src="../images/bao.jpg" />
</picture>
      </div>
</div>
</div>
      </div>


      <div className="card__details">
        <h3>Soeng Souy</h3>
        <img src="../images/cook1.jpg" alt="User Profile Picture" className='cookImg' />
        <div className="smallText">Cuisine: Korean</div>
        <div className="smallText">Rating: ⭐⭐⭐⭐ (123 Reviews)</div>
        <button>View Details</button>

        <div className='cookCards'>
    <div className="cookCard">
      <div className="card__img">

          <picture>
            <img src="../images/bao.jpg" />
</picture>
      </div>
</div>
</div>
      </div>


      <div className="card__details">
        <h3>Soeng Souy</h3>
        <img src="../images/cook1.jpg" alt="User Profile Picture" className='cookImg' />
        <div className="smallText">Cuisine: Korean</div>
        <div className="smallText">Rating: ⭐⭐⭐⭐ (123 Reviews)</div>
        <button>View Details</button>

        <div className='cookCards'>
    <div className="cookCard">
      <div className="card__img">

          <picture>
            <img src="../images/bao.jpg" />
</picture>
      </div>
</div>
</div>
      </div>

			</div>
		</div>
	</div>



    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Soeng Souy <img src='../images/verified.png' className='verifiedImg'/></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Carousel>
            <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/bao.jpg"
          alt="First slide"
        />
          <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/burger.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/pie.jpg"
          alt="First slide"
        />
      </Carousel.Item>
            </Carousel>
            <h3>Bao Buns</h3>
      <p>Introducing the delectable and mouth-watering bao buns! These fluffy steamed buns are perfect for satisfying your hunger and indulging your taste buds. Whether you prefer savory or sweet fillings, our bao buns come in a wide range of options to suit any palate. From succulent pork belly to flavorful chicken, or even sweet red bean paste, we've got you covered. These buns are perfect for a quick snack or as part of a complete meal. Don't wait any longer, try our delicious bao buns today and experience the ultimate taste sensation!</p>
        </Modal.Body>
        <Modal.Footer>
            <button className='modalButton' onClick={handleClose}>
                Close
            </button>
        </Modal.Footer>
    </Modal>
  

</>

    )
}

export default Cook;