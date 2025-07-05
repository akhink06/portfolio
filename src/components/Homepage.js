import React from 'react';
import '../styles/Homepage.css';
import { useNavigate } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function Homepage() {
  const navigate = useNavigate();

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="homepage-header" onClick={() => navigate('/profile')} style={{cursor: 'pointer'}}>
      <h1 className="homepage-title">AKHIN K</h1>
      <h2 className="homepage-designation">Full Stack & Mobile App Developer</h2>
      
      {/* Social Media Icons */}
      <div className="social-icons" onClick={(e) => e.stopPropagation()}>
        <SocialIcon
          url="https://www.linkedin.com/in/akhin-k-146107235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          className="social-icon linkedin"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 40, width: 40, margin: '0 10px' }}
          aria-label="LinkedIn Profile"
          onClick={(e) => {
            e.preventDefault();
            handleSocialClick("https://www.linkedin.com/in/akhin-k-146107235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app");
          }}
        />
        {/* Naukri is not supported, so use a generic icon with N as fallback */}
        <SocialIcon
          url="https://www.naukri.com"
          className="social-icon naukari"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 40, width: 40, margin: '0 10px' }}
          aria-label="Naukri Profile"
          network="website"
          label="Naukri"
          onClick={(e) => {
            e.preventDefault();
            handleSocialClick("https://www.naukri.com");
          }}
        />
        <SocialIcon
          url="https://www.instagram.com/_.ak___?igsh=MXR2MHZlaGltMTExcA%3D%3D&utm_source=qr"
          className="social-icon instagram"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 40, width: 40, margin: '0 10px' }}
          aria-label="Instagram Profile"
          onClick={(e) => {
            e.preventDefault();
            handleSocialClick("https://www.instagram.com/_.ak___?igsh=MXR2MHZlaGltMTExcA%3D%3D&utm_source=qr");
          }}
        />
        <SocialIcon
          url="https://wa.me/message/7LZUCRBJWDKHB1"
          className="social-icon whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 40, width: 40, margin: '0 10px' }}
          aria-label="WhatsApp Contact"
          onClick={(e) => {
            e.preventDefault();
            handleSocialClick("https://wa.me/message/7LZUCRBJWDKHB1");
          }}
        />
      </div>
    </header>
  );
}

export default Homepage;