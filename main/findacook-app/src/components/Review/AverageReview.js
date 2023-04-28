import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AverageReview = ({ cookId }) => {
    const [averageScore, setAverageScore] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/cook/allreviews`);

                const filteredReviews = response.data.reviews.filter(review => review.cook_id === cookId);
                console.log(filteredReviews)
                console.log(cookId)
                console.log(response.data.reviews[0].cook_id)
                setReviews(filteredReviews);

                // const reviews = response.data.reviews;
                // console.log(reviews.reviews);

                const totalScore = filteredReviews.reduce((acc, review) => acc + review.rating_value, 0);
                console.log(totalScore);
                const avgScore = (totalScore / filteredReviews.length).toFixed(1);
                console.log(avgScore);

                setAverageScore(avgScore);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching reviews:', error);
                setLoading(false);
            }
        };

        fetchReviews();
    }, cookId);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (averageScore === null) {
        return <p>No reviews found.</p>;
    }

    return (
        <div>
            <p>{averageScore}</p>
        </div>
    );
};

export default AverageReview;
