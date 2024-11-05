// src/components/CreateCrewmate.jsx
import { useState } from 'react';
import { supabase } from '../supabaseClient';

const CreateCrewmate = () => {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');
  const [message, setMessage] = useState(''); // State for success message

  const addCrewmate = async () => {
    const { data, error } = await supabase.from('crewmates').insert([{ name, speed, color }]);
    if (error) {
      console.log('Error:', error);
      setMessage('Failed to add crewmate. Please try again.');
    } else {
      console.log('Crewmate added:', data);
      setMessage('Crewmate added successfully!'); // Display success message
      // Clear input fields
      setName('');
      setSpeed('');
      setColor('');
    }
  };

  return (
    <div className="container create-crewmate">
      <h2>Create a New Crewmate</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Speed (mph)"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
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
      <button onClick={addCrewmate}>Create Crewmate</button>
      {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}
    </div>
  );
};

export default CreateCrewmate;
