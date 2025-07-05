import React from 'react';
import '../styles/Profile.css';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const handleKnowMore = () => {
    navigate('/main');
  };

  return (
    <div className="profile-container">
      <h2>Profile Summary</h2>
      <p>
        Experienced Full Stack and Mobile App Developer with 2.5+ years of comprehensive development experience. Proven expertise in web technologies including React.js, Django, and modern JavaScript frameworks, combined with mobile development skills in React Native and FlutterFlow. Strong foundation in frontend and well knowledge in backend development with a mechanical engineering background.
      </p>
      <div className="button-container">
        <button className="know-more-btn" onClick={handleKnowMore}>
          Know More
        </button>
      </div>
    </div>
  );
}

export default Profile;