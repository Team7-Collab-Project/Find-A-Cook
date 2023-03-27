import React, { useState, useEffect } from "react";
import axios from "axios";
import Geocode from "react-geocode";
import { useDispatch } from "react-redux";
import { getCooks } from "../../redux/actions/cookActions";
import { useSelector } from 'react-redux';


const DistanceMeasurement = () => {
    // const [cooks, setCooks] = useState([]);
    // const userLat = 53.707785;
    // const userLng = -6.336063;
    // const lat = 53.989254;
    // const lng = -6.399190;
    // const { userLat, userLng } = { 53.707785, -6.336063 };
    // const { lat, lng } = {};

    

    var lat
    var lng
    var userLat
    var userLng
    

    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_KEY);
    
  
    // useEffect(() => {
    //   fetchCooks();
    // }, []);

    // const fetchCooks = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:5001/cook/allcooks");
    //     setCooks(response.data.cooks);
    //   } catch (error) {
    //     console.error("Error fetching cooks:", error);
    //   }
    // };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCooks())
    }, [dispatch])
    
    const {cooks} = useSelector(state => state.cooks)
    console.log('cool1', cooks)


    //      HERE'S THE CODE TO GET USERS ADDRESS
    //
    // const [userAddress, setAddress] = useState("")
    // axios.defaults.withCredentials = true
    // useEffect(()=> {
    //     axios.get('http://localhost:5001/user/useraddress')
    //     .then((res) => {
    //         setAddress(res.data.message);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     });
    // }, [])
  


    const userAddress = "6 Tower View, Stoney Lane, Ardee, Co. Louth"
    
    

    Geocode.fromAddress({userAddress}).then(
      (response) => {
        userLat = response.results[0].geometry.location.lat;
        userLng = response.results[0].geometry.location.lng;
        console.log('coords1 = ' + lat + ' ' + lng);
        // console.log('coords2 = ' + lat + ' ' + lng);
      },
      (error) => {
        console.error(error);
      }
    )

    cooks.forEach( cook => {
      Geocode.fromAddress(cook.cook_address).then(
        (response) => {
          lat = response.results[0].geometry.location.lat;
          lng = response.results[0].geometry.location.lng;
          console.log('coords1 = ' + lat + ' ' + lng);
        },
        (error) => {
          console.error(error);
        }
      )

      

      //Distance calculation
      Number.prototype.toRad = function() {
        return this * Math.PI / 180;
      }
      
      
      var R = 6371; // km 
      //has a problem with the .toRad() method below.
      var x1 = userLat-lat;
      var dLat = x1.toRad();  
      var x2 = userLng-lng;
      var dLon = x2.toRad();  
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                      Math.cos(lat.toRad()) * Math.cos(userLat.toRad()) * 
                      Math.sin(dLon/2) * Math.sin(dLon/2);  
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; 
      
      // alert(d);

    }
       );

    return (
      <div>
        <h1>All Cooks</h1>
        <ul>
          {cooks.map((cook, index) => (
            <li key={index}>
              <img src={cook.profile_picture} alt={cook.cook_first_name} />
              <h3>{cook.cook_first_name}</h3>
              <p>{cook.cook_bio}</p>
              <p>{cook.description}</p>
            </li>
          ))}
        </ul>
      </div>
      
    );
  };
  
  export default DistanceMeasurement;
  