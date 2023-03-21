import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCook } from '../../redux/actions/cookActions'
import { BsArrowDownLeft } from 'react-icons/bs';
import { BsArrowDownRight } from 'react-icons/bs';
import { FaWindowClose } from 'react-icons/fa'
import { Modal, Button } from "react-bootstrap";
import BookingForm from './BookingForm';
import axios from "axios";
import './Reviews.css';
import Review from './../Review/Review';
import CreateReview from '../Review/CreateReview';

const CustomerBooking = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

	const handleOpen = (i) => {
		setSlideNumber(i);
		setOpen(true);
	  };
	
	  const handleMove = (direction) => {
		let newSlideNumber;
	
		if (direction === "l") {
		  newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
		} else {
		  newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
		}
	
		setSlideNumber(newSlideNumber);
	  };

	  
  const navigate = useNavigate();
	const { cookId } = useParams();
	console.log('DAYOOOOO', cookId)
	
	const dispatch = useDispatch(); 


	useEffect(() => {
		dispatch(getCook(cookId));
	}, [dispatch, cookId]);

	const handleClick = () => {

		  setOpenModal(true);

	  };

	const { cook } = useSelector(state => state.cooks);
  console.log(cook)

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://localhost:5001/cook/allreviews");
      console.log(response)
      setReviews(response.data.reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };



    return (
<>


{cook && (
//       <div class="test-container">
// 	  <div class="profile-picture">
// 		<img src={`/uploads/${cook.profile_picture}`} alt="Profile Picture" />
// 	  </div>
// 	  <div class="profile-info">
// 		<h2>{cook.cook_first_name} {cook.cook_last_name}</h2>
// 		<div class="credentials">
// 			  <p className='verifiedTooltip'>Verified Cook <img src='../images/verified.png' className='verifiedImg'/><span class="tooltiptext">This cook is 100% verified by Find A Cook and meets our standards to ensure the highest quality experience for our clients.</span></p>
// 			  <p className='verifiedTooltip'>Food Safety Cert <img src='../images/certification.png' className='verifiedImg'/><span class="tooltiptext">This cook maintains a certificate for food safety and sanitation to ensure ingredients, handling and preparation are in line with industry standards.</span></p> 
// 			  <p><img src='../images/rating.jpg' id="rating-img"/>(67 reviews)</p>
// 		  </div>
// 		<p>{cook.description}</p>

// 		<hr className="yoylo" />
// 		<div className="yesOO">
// 		<h3>{cook.cook_first_name}'s Popular Dishes</h3>
// 		<div class="product-section">
// 			  <div class="product-card">

// 				  <img src="../images/tikka.jpg" alt="Product Image" />
// 				  <div class="product-info">
// 					  <h3>Product Name</h3>
// 					  <p>Price: €19.99</p>
// 				  </div>
// 		<div class="user-pic">
//   <img src="../images/cook1.jpg" alt="User Profile Picture" />
// </div>
// 			  </div>
// 			  <div class="product-card">
// 				  <img src="../images/pie.jpg" alt="Product Image" />
// 				  <div class="product-info">
// 					  <h3>Product Name</h3>
// 					  <p>Price: €29.99</p>
// 				  </div>
// 			  </div>
// 			  <div class="product-card">
// 				  <img src="../images/gnocchi.jpg" alt="Product Image" />
// 				  <div class="product-info">
// 					  <h3>Product Name</h3>
// 					  <p>Price: €39.99</p>
// 				  </div>
// 			  </div>
// 			  <div class="product-card">
// 				  <img src="../images/pakora.jpg" alt="Product Image" />
// 				  <div class="product-info">
// 					  <h3>Product Name</h3>
// 					  <p>Price: €49.99</p>
// 				  </div>
// 			  </div>
// 			  <div class="product-card">
// 				  <img src="../images/bao.jpg" alt="Product Image" />
// 				  <div class="product-info">
// 					  <h3>Product Name</h3>
// 					  <p>Price: €59.99</p>
// 				  </div>
// 			  </div>
// 			  <div class="product-card">
// 				  <img src="../images/burger.jpg" alt="Product Image" />
// 				  <div class="product-info">
// 					  <h3>Product Name</h3>
// 					  <p>Price: €69.99</p>
// 		  </div>
// 			  </div>
// 		  </div>
// 	  </div>
//   </div>

// </div>



























<div className='cookContainer'>
{open && (
            <div className="slider">
              <FaWindowClose
                className="close"
                onClick={() => setOpen(false)}
              />
              <BsArrowDownLeft
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src='../images/bao.jpg'
                  alt=""
                  className="sliderImg"
                />

              </div>
              <BsArrowDownRight
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}

<div className="cookWrapper">
<button className="bookNow" onClick={handleShow}>Book Now!</button>
 	  <div class="profile-picture">
 		<img src={`/uploads/${cook.profile_picture}`} alt="Profile Picture" />
 	  </div>
<h1 className="cookName">{cook.cook_first_name} {cook.cook_last_name}</h1>
 		<div class="credentials">
 			  <p className='verifiedTooltip'>Verified Cook <img src='../images/verified.png' className='verifiedImg'/><span class="tooltiptext">This cook is 100% verified by Find A Cook and meets our standards to ensure the highest quality experience for our clients.</span></p>
 			  <p className='verifiedTooltip'>Food Safety Cert <img src='../images/certification.png' className='verifiedImg'/><span class="tooltiptext">This cook maintains a certificate for food safety and sanitation to ensure ingredients, handling and preparation are in line with industry standards.</span></p> 
 			  <p><img src='../images/rating.jpg' id="rating-img"/>(67 reviews)</p>
 		  </div>
 		<p>{cook.description}</p>

		 <div className="cookFoodImages">
                <div className="cookFoodImgWrapper" >
                  <img
                    // onClick={() => setOpen(true)}
                    src='../images/bao.jpg'
                    alt=""
                    className="cookFoodlImg"
                  />
				  
                </div>
				<div className="cookFoodImgWrapper" >
                  <img
                    // onClick={() => handleOpen(i)}
                    src='../images/bao.jpg'
                    alt=""
                    className="cookFoodlImg"
                  />
				  
                </div>
				<div className="cookFoodImgWrapper" >
                  <img
                    // onClick={() => handleOpen(i)}
                    src='../images/bao.jpg'
                    alt=""
                    className="cookFoodlImg"
                  />
				  
                </div>
				<div className="cookFoodImgWrapper" >
                  <img
                    // onClick={() => handleOpen(i)}
                    src='../images/bao.jpg'
                    alt=""
                    className="cookFoodlImg"
                  />
				  
                </div>
				<div className="cookFoodImgWrapper" >
                  <img
                    // onClick={() => handleOpen(i)}
                    src='../images/bao.jpg'
                    alt=""
                    className="cookFoodlImg"
                  />
				  
                </div>

				<div className="cookFoodImgWrapper" >
                  <img
                    // onClick={() => handleOpen(i)}
                    src='../images/bao.jpg'
                    alt=""
                    className="cookFoodlImg"
                  />
				  
                </div>
    
            </div>






			</div>

      <div className="reviewWrapper">
        <CreateReview/>
        <h1 className="reviewHeader">{cook.cook_first_name}'s Reviews</h1>
        {reviews.map((review, index) => (
         <Review key={review._id} review={review}/>
          ))}
      </div>

</div>

			)}
			{/* {openModal && <BookingForm setOpen={setOpenModal} cookId={cookId}/>} */}




			<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Select your menu items: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="rItem" >
            <div className="rItemInfo">
              <div className="rTitle">Bao Buns</div>
              <div className="rDesc">Yum</div>

              <div className="rPrice">€10</div>
            </div>
            <div className="selectFood">

                <div className="food">
                  <input
                    type="checkbox"
                  />
                </div>
        
            </div>

          </div>

		  <div className="rItem" >
            <div className="rItemInfo">
              <div className="rTitle">Beef Burger </div>
              <div className="rDesc">Tasty</div>

              <div className="rPrice">€10</div>
            </div>
            <div className="selectFood">

                <div className="food">
                  <input
                    type="checkbox"
                  />
                </div>
        
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
            <button className='modalButton' onClick={handleClose}>
                Close
            </button>
        </Modal.Footer>
    </Modal>
  
</>
    );
  };
  
  export default CustomerBooking;
