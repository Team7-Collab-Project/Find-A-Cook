import React, { useState, useEffect } from 'react';
import { Modal, Carousel, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import './Review.css'
// import { Rating } from 'react-simple-star-rating'
// import { Ratings } from 'react-ratings-declarative'
import Rating from '@mui/material/Rating';
import axios, { Axios } from 'axios';


const CreateReview = () => {

    // const [rating, setRating] = useState(0)

    // // Catch Rating value
    // const handleRating = (rate: number) => {
    //     setRating(rate)

    //     // other logic
    // }

    // const onPointerMove = (value: number, index: number) => console.log(value, index)


    // return (
    //     <>
    //         <div className='create_review'>
    //             <h3>Leave a Rating</h3>
    //             <div className='new_review_container'>
    //                 <div className='new_rating_stars'>
    //                     <Rating
    //                         // onClick={handleRating}
    //                         // onPointerMove={onPointerMove}
    //                     /* Available Props */
    //                     />
    //                 </div>
    //             </div>


    //         </div>


    //     </>

    // )

    const [value, setValue] = useState(0)

    const [review, setReview] = useState({
        review_title: "",
        review_body: "",
        rating_value: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setReview({ ...review, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:5001/cook/createreview', review)
            .then((response) => {
                console.log("response received", response.data);
            })
            .catch((error) => {
                console.log("error received", error.response.data);
            });

    };

    return (
        <>
            <div className='create_rating_wrapper'>
                <h3>Leave a Rating</h3>
                <div className='star_wrapper'>
                    <Rating
                        name="simple-controlled"
                        defaultValue={0}
                        // precision={0.5}
                        value={value}
                        size="large"
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            console.log(newValue)
                        }}
                    />
                </div>
                <div className='review_form'>
                    <form onSubmit={handleSubmit}>
                        <div className='create_review_title'>
                            <input type="text" name="review_title" class="input-text" placeholder="Review Title" value={review.review_title} onChange={handleInputChange} />
                        </div>
                        <div className='create_review_body'>
                            <input type="text" name="review_body" class="input-text" placeholder="Review Body" value={review.review_body} onChange={handleInputChange} />
                        </div>
                        <div className='review_submit'>
                            <button type="submit" class="btn-md btn-fg btn-block">Submit Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )



}

export default CreateReview;