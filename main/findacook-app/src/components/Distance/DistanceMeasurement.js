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


    // console.log(cooks[1]);

    cooks.forEach( cooks => {
      console.log(cooks.cook_address);
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
  
  export default CookList;
  