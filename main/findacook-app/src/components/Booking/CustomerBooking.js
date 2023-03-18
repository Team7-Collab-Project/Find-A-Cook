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
				<div className='row'>
            {cook.cook_first_name}
				</div>
			)}
</>
    );
  };
  
  export default CustomerBooking;
