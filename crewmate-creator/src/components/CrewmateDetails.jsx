// src/components/CrewmateDetails.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const CrewmateDetails = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase.from('crewmates').select('*').eq('id', id).single();
      if (error) console.log('Error:', error);
      else setCrewmate(data);
    };
    fetchCrewmate();
  }, [id]);

  if (!crewmate) return <p>Loading...</p>;

  return (
    <div className="crewmate-details">
      <h2>Crewmate: {crewmate.name}</h2>
      <p>Color: {crewmate.color}</p>
      <p>Speed: {crewmate.speed} mph</p>
      <Link to={`/update/${crewmate.id}`}>Edit Crewmate</Link>
    </div>
  );
};

export default CrewmateDetails;
