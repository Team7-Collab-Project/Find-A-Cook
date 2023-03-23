import React, { useState, useEffect } from "react";
import axios from "axios";

const CookList = () => {
    const [cooks, setCooks] = useState([]);
  
    useEffect(() => {
      fetchCooks();
    }, []);
  
    const fetchCooks = async () => {
      try {
        const response = await axios.get("http://localhost:5001/cook/allcooks");
        setCooks(response.data.cooks);
      } catch (error) {
        console.error("Error fetching cooks:", error);
      }
    };

    const [userAddress, setuserAddress] = useState("")
    axios.defaults.withCredentials = true
    useEffect(()=> {
        axios.get('http://localhost:5001/user/userinfo')
        .then((res) => {
            setuserAddress(res.data.message);
        })
        .catch((err) => {
            console.error(err);
        });
    }, [])


    // console.log(cooks[1]);

    cooks.forEach( cook => {
      console.log(cook.cook_address);
 })
  
    // return (
    //   <div>
    //     <h1>All Cooks</h1>
    //     <ul>
    //       {cooks.map((cook, index) => (
    //         <li key={index}>
    //           <img src={cook.profile_picture} alt={cook.cook_first_name} />
    //           <h3>{cook.cook_first_name}</h3>
    //           <p>{cook.cook_bio}</p>
    //           <p>{cook.description}</p>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // );
  };
  
  export default DistanceMeasurement;
  