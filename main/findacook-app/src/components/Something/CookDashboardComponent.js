import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCook } from '../../redux/actions/cookActions'

const CookDashboard = () => {
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



     <section class="dashboard">

     <div class="row">
             <div class="col-xl-4">
               <div class="card-box">
                 <h4 class="header-title mt-0">Personal Information</h4>
                 <div class="panel-body">
                   <p class="text-muted font-13">
                     Hi, Im Soeng Souy. I specialise in German food with a Korean Twist. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   </p>
                   <hr />
                   <div class="text-left">
                     <p class="text-muted font-13">
                       <strong>Full Name :</strong>{" "}
                       <span class="m-l-15">Soeng Souy</span>
                     </p>
                     <p class="text-muted font-13">
                       <strong>Mobile :</strong>
                       <span class="m-l-15">(+885) 966686372</span>
                     </p>
                     <p class="text-muted font-13">
                       <strong>Email :</strong>{" "}
                       <span class="m-l-15">soengsouy@gmail.com</span>
                     </p>
                     <p class="text-muted font-13">
                       <strong>Location :</strong> <span class="m-l-15">KH</span>
                     </p>
                     <p class="text-muted font-13">
                       <strong>Cuisine(s) :</strong>{" "}
                       <span class="m-l-5">
                         <span
                           class="flag-icon flag-icon-us m-r-5 m-t-0"
                           title="us"
                         ></span>
                         <span>English</span>{" "}
                       </span>
                       <span class="m-l-5">
                         <span
                           class="flag-icon flag-icon-de m-r-5"
                           title="de"
                         ></span>
                         <span>German</span>{" "}
                       </span>
                       <span class="m-l-5">
                         <span
                           class="flag-icon flag-icon-es m-r-5"
                           title="es"
                         ></span>
                         <span>Spanish</span>{" "}
                       </span>
                       <span class="m-l-5">
                         <span
                           class="flag-icon flag-icon-fr m-r-5"
                           title="fr"
                         ></span>
                         <span>French</span>
                       </span>
                     </p>
                   </div>
                 </div>
               </div>
             </div>
             <div class="col-xl-8">
               <div class="row">
                 <div class="col-sm-4">
                   <div className="cook-img-container">
                     <div className="cook-dash-img">
                       <img src="../images/cook1.jpg" alt="" />
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
 
     </section>


</>
    );
  };
  
  export default CookDashboard;
