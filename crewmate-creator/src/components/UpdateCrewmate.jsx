// src/components/UpdateCrewmate.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const UpdateCrewmate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single();
      if (error) {
        console.log('Error fetching crewmate:', error);
      } else if (data) {
        setName(data.name);
        setSpeed(data.speed);
        setColor(data.color);
      }
    };
    fetchCrewmate();
  }, [id]);

  const updateCrewmate = async () => {
    const { data, error } = await supabase
      .from('crewmates')
      .update({ name, speed, color })
      .eq('id', id);
    if (error) {
      console.log('Error updating crewmate:', error);
    } else {
      console.log('Crewmate updated:', data);
      navigate('/gallery'); // Navigate back to the gallery after update
    }
  };

  const deleteCrewmate = async () => {
    const { error } = await supabase
      .from('crewmates')
      .delete()
      .eq('id', id);
    if (error) {
      console.log('Error deleting crewmate:', error);
    } else {
      console.log('Crewmate deleted');
      navigate('/gallery'); // Navigate back to the gallery after deletion
    }
  };

  return (
    <div className="container">
      <h2>Update Your Crewmate :)</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        placeholder="Speed (mph)"
      />
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="">Select Color</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Purple">Purple</option>
        <option value="Yellow">Yellow</option>
        <option value="Orange">Orange</option>
        <option value="Pink">Pink</option>
        <option value="Rainbow">Rainbow</option>
      </select>
      <button onClick={updateCrewmate} style={{ marginRight: '10px' }}>Save Changes</button>
      <button onClick={deleteCrewmate} style={{ marginRight: '10px' }}>Delete Crewmate</button>
    </div>
  );
};

export default UpdateCrewmate;
