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
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>👋 Welcome to my portfolio</span>
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">AKHIN K</span>
            </h1>
            <h2 className="hero-subtitle">
              Mobile App Developer
            </h2>
            <p className="hero-description">
              I create exceptional digital experiences through innovative mobile apps.
              With 3 years of experience, I deliver reliable, high-performance apps
              with clean UX and modern tooling.
            </p>
            
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate('/profile')}>
                About Me
                <span className="btn-icon">→</span>
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('/main')}>
                Portfolio
              </button>
              <button className="btn btn-resume" onClick={() => window.open('/AKHIN K Mobile App Developer.pdf', '_blank')}>
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <span className="social-label">Follow me</span>
              <div className="social-icons">
                <SocialIcon
                  url="https://www.linkedin.com/in/akhin-k-146107235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ height: 44, width: 44 }}
                  aria-label="LinkedIn Profile"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSocialClick("https://www.linkedin.com/in/akhin-k-146107235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app");
                  }}
                />
                <SocialIcon
                  url="https://www.instagram.com/_.ak___?igsh=MXR2MHZlaGltMTExcA%3D%3D&utm_source=qr"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ height: 44, width: 44 }}
                  aria-label="Instagram Profile"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSocialClick("https://www.instagram.com/_.ak___?igsh=MXR2MHZlaGltMTExcA%3D%3D&utm_source=qr");
                  }}
                />
                <SocialIcon
                  url="https://wa.me/message/7LZUCRBJWDKHB1"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ height: 44, width: 44 }}
                  aria-label="WhatsApp Contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSocialClick("https://wa.me/message/7LZUCRBJWDKHB1");
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-icon">💻</div>
              <span>Web Development</span>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">📱</div>
              <span>Mobile Apps</span>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">⚡</div>
              <span>Full Stack</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;