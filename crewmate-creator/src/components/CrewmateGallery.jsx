// src/components/CrewmateGallery.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const CrewmateGallery = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase.from('crewmates').select('*');
      if (error) console.log('Fetch Error:', error.message);
      else setCrewmates(data);
    };
    fetchCrewmates();
  }, []);

  return (
    <div className="container crewmate-gallery">
      <div className="gallery-heading">
        <h2>Your Crewmate Gallery</h2>
      </div>
      {crewmates.length === 0 ? (
        <p>You haven’t made a crewmate yet!</p>
      ) : (
        <div className="crewmate-card-container">
          {crewmates.map((crewmate) => (
            <div key={crewmate.id} className="crewmate-card">
              <p><strong>Name:</strong> {crewmate.name}</p>
              <p><strong>Speed:</strong> {crewmate.speed} mph</p>
              <p><strong>Color:</strong> {crewmate.color}</p>
              <Link to={`/crewmate/${crewmate.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CrewmateGallery;
