import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recommendation = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await axios.get('/api/recommendations');
        setRecommendations(res.data);
      } catch (error) {
        console.error('Recommendation error', error);
      }
    };
    fetchRecommendations();
  }, []);

  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((rec) => (
          <li key={rec._id}>{rec.name} - {rec.brand}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
