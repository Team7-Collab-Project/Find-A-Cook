import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AverageReview = ({ cookId }) => {
  const [averageScore, setAverageScore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/cook/reviews?cookId=${cookId}`);
        const reviews = response.data;

        const totalScore = reviews.reduce((acc, review) => acc + review.score, 0);
        const avgScore = (totalScore / reviews.length).toFixed(1);

        setAverageScore(avgScore);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [cookId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (averageScore === null) {
    return <p>No reviews found.</p>;
  }

  return (
    <div>
      <h3>Average Review Score</h3>
      <p>{averageScore}</p>
    </div>
  );
};

export default AverageReview;
