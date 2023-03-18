import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCook } from '../../redux/actions/cookActions'

const CustomerBooking = () => {
  const navigate = useNavigate();
	const { cookId } = useParams();
	console.log('DAYOOOOO', cookId)
	
	const dispatch = useDispatch(); 


	useEffect(() => {
		dispatch(getCook(cookId));
	}, [dispatch, cookId]);

	const { cook } = useSelector(state => state.cooks);
  console.log(cook)
  
    return (
<>


{cook && (
      <div class="test-container">
	  <div class="profile-picture">
		<img src={`/uploads/${cook.profile_picture}`} alt="Profile Picture" />
	  </div>
	  <div class="profile-info">
		<h2>{cook.cook_first_name} {cook.cook_last_name}</h2>
		<div class="credentials">
			  <p className='verifiedTooltip'>Verified Cook <img src='../images/verified.png' className='verifiedImg'/><span class="tooltiptext">This cook is 100% verified by Find A Cook and meets our standards to ensure the highest quality experience for our clients.</span></p>
			  <p className='verifiedTooltip'>Food Safety Cert <img src='../images/certification.png' className='verifiedImg'/><span class="tooltiptext">This cook maintains a certificate for food safety and sanitation to ensure ingredients, handling and preparation are in line with industry standards.</span></p> 
			  <p><img src='../images/rating.jpg' id="rating-img"/>(67 reviews)</p>
		  </div>
		<p>{cook.description}</p>

		<hr className="yoylo" />
		<div className="yesOO">
		<h3>{cook.cook_first_name}'s Popular Dishes</h3>
		<div class="product-section">
			  <div class="product-card">

				  <img src="../images/tikka.jpg" alt="Product Image" />
				  <div class="product-info">
					  <h3>Product Name</h3>
					  <p>Price: €19.99</p>
				  </div>
		<div class="user-pic">
  <img src="../images/cook1.jpg" alt="User Profile Picture" />
</div>
			  </div>
			  <div class="product-card">
				  <img src="../images/pie.jpg" alt="Product Image" />
				  <div class="product-info">
					  <h3>Product Name</h3>
					  <p>Price: €29.99</p>
				  </div>
			  </div>
			  <div class="product-card">
				  <img src="../images/gnocchi.jpg" alt="Product Image" />
				  <div class="product-info">
					  <h3>Product Name</h3>
					  <p>Price: €39.99</p>
				  </div>
			  </div>
			  <div class="product-card">
				  <img src="../images/pakora.jpg" alt="Product Image" />
				  <div class="product-info">
					  <h3>Product Name</h3>
					  <p>Price: €49.99</p>
				  </div>
			  </div>
			  <div class="product-card">
				  <img src="../images/bao.jpg" alt="Product Image" />
				  <div class="product-info">
					  <h3>Product Name</h3>
					  <p>Price: €59.99</p>
				  </div>
			  </div>
			  <div class="product-card">
				  <img src="../images/burger.jpg" alt="Product Image" />
				  <div class="product-info">
					  <h3>Product Name</h3>
					  <p>Price: €69.99</p>
		  </div>
			  </div>
		  </div>
	  </div>
  </div>

</div>

			)}
</>
    );
  };
  
  export default CustomerBooking;
