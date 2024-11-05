// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CreateCrewmate from './components/CreateCrewmate';
import CrewmateGallery from './components/CrewmateGallery';
import CrewmateDetails from './components/CrewmateDetails';
import UpdateCrewmate from './components/UpdateCrewmate';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link><br />
          <Link to="/create">Create a Crewmate!</Link><br />
          <Link to="/gallery">Crewmate Gallery</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCrewmate />} />
          <Route path="/gallery" element={<CrewmateGallery />} />
          <Route path="/crewmate/:id" element={<CrewmateDetails />} />
          <Route path="/update/:id" element={<UpdateCrewmate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
