import React, { useState, useEffect } from 'react';
import '../styles/Profile.css';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleKnowMore = () => {
    navigate('/main');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const handleNavClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="profile-page">
      {/* Mobile Hamburger Menu */}
      <div className="mobile-nav">
        <button 
          className="hamburger-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>
        
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <button 
              className="mobile-nav-item"
              onClick={() => handleNavClick('/')}
            >
              <span className="mobile-nav-label">Home</span>
            </button>
            <button 
              className="mobile-nav-item"
              onClick={() => handleNavClick('/main')}
            >
              <span className="mobile-nav-label">Portfolio</span>
            </button>
            <button 
              className={`mobile-nav-item ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              <span className="mobile-nav-label">About</span>
            </button>
            <button 
              className={`mobile-nav-item ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => scrollToSection('experience')}
            >
              <span className="mobile-nav-label">Experience</span>
            </button>
            <button 
              className={`mobile-nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              <span className="mobile-nav-label">Skills</span>
            </button>
            <button 
              className={`mobile-nav-item ${activeSection === 'education' ? 'active' : ''}`}
              onClick={() => scrollToSection('education')}
            >
              <span className="mobile-nav-label">Education</span>
            </button>
            <button 
              className={`mobile-nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              <span className="mobile-nav-label">Contact</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Bottom Navigation */}
      <nav className="bottom-navbar">
        <div className="bottom-nav-container">
          <button 
            className={`bottom-nav-item`}
            onClick={() => navigate('/')}
          >
            <span className="nav-label">Home</span>
          </button>
          <button 
            className={`bottom-nav-item`}
            onClick={() => navigate('/main')}
          >
            <span className="nav-label">Portfolio</span>
          </button>
          <button 
            className={`bottom-nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            <span className="nav-label">About</span>
          </button>
          <button 
            className={`bottom-nav-item ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => scrollToSection('experience')}
          >
            <span className="nav-label">Experience</span>
          </button>
          <button 
            className={`bottom-nav-item ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollToSection('skills')}
          >
            <span className="nav-label">Skills</span>
          </button>
          <button 
            className={`bottom-nav-item ${activeSection === 'education' ? 'active' : ''}`}
            onClick={() => scrollToSection('education')}
          >
            <span className="nav-label">Education</span>
          </button>
          <button 
            className={`bottom-nav-item ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            <span className="nav-label">Contact</span>
          </button>
        </div>
      </nav>

      {/* Profile Header */}
      <section className="profile-header-section">
        <div className="profile-header">
          <div className="profile-avatar">
            <div className="avatar-circle">
              <span className="avatar-text">AK</span>
            </div>
          </div>
          <div className="profile-info">
            <h1 className="profile-name">AKHIN K</h1>
            <h2 className="profile-title">Mobile App Developer</h2>
            <div className="profile-location">
              <span className="location-icon">📍</span>
              <span>Calicut, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="profile-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-icon">
              <span>👨‍💻</span>
            </div>
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="section-content">
            <div className="about-content">
              <p className="about-text">
                Mobile App Developer with 2.5+ years of experience building high-quality
                cross-platform apps using React Native and FlutterFlow. Passionate about
                clean UX, performance, and reliable delivery to the App Store and Play Store.
              </p>
              <p className="about-text">
                Strong focus on real-world app features like push notifications, in-app
                messaging, video/audio calling, real-time sync, and analytics — backed by
                modern cloud tooling like Firebase and secure deployments.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">⚡</div>
                  <div className="highlight-text">
                    <h4>Fast Learner</h4>
                    <p>Quickly adapt to new technologies and frameworks</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🎯</div>
                  <div className="highlight-text">
                    <h4>Problem Solver</h4>
                    <p>Analytical approach to complex development challenges</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🚀</div>
                  <div className="highlight-text">
                    <h4>Innovation Focused</h4>
                    <p>Always exploring new ways to improve user experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="profile-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-icon">
              <span>💼</span>
            </div>
            <h2 className="section-title">Professional Experience</h2>
          </div>
          <div className="section-content">
            <div className="experience-timeline">
              <div className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <h3 className="job-title">Mobile App Developer</h3>
                    <span className="duration-badge">1.5 Years</span>
                  </div>
                  <div className="company-info">
                    <span className="company-name">Tegain Private Limited</span>
                    <span className="company-location">Remote</span>
                  </div>
                  <div className="experience-description">
                    <p>
                      Developed cross-platform mobile applications using React Native and FlutterFlow, 
                      collaborating with development teams to deliver high-quality mobile solutions.
                    </p>
                    <div className="achievements">
                      <h4>Key Achievements:</h4>
                      <ul>
                        <li>Implemented user-friendly interfaces and optimized app performance</li>
                        <li>Managed project workflows using Taiga and tracked issues through Jira</li>
                        <li>Utilized Git and GitLab for version control and collaborative development</li>
                        <li>Delivered 3+ mobile applications with 4.5+ star ratings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                </div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <h3 className="job-title">Full Stack Developer (Internship)</h3>
                    <span className="duration-badge">1 Year</span>
                  </div>
                  <div className="company-info">
                    <span className="company-name">Stey Private Limited</span>
                    <span className="company-location">Remote</span>
                  </div>
                  <div className="experience-description">
                    <p>
                      Built responsive frontend interfaces and implemented backend solutions using 
                      Python and Django framework, gaining hands-on experience in React Native.
                    </p>
                    <div className="achievements">
                      <h4>Key Achievements:</h4>
                      <ul>
                        <li>Developed end-to-end web applications using modern technology stack</li>
                        <li>Built responsive frontend interfaces using HTML, CSS, JavaScript, Bootstrap, and React.js</li>
                        <li>Implemented backend solutions using Python and Django framework</li>
                        <li>Gained hands-on experience in React Native for mobile development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="profile-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-icon">
              <span>🛠️</span>
            </div>
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <div className="section-content">
            <div className="skills-grid">
              <div className="skill-category">
                <div className="category-header">
                  <div className="category-icon">🎨</div>
                  <h3 className="category-title">Frontend Development</h3>
                </div>
                <div className="skills-list">
                  <div className="skill-item">
                    <span className="skill-name">React.js</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '90%'}}></div>
                    </div>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">HTML/CSS</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '95%'}}></div>
                    </div>
                    <span className="skill-percentage">95%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">JavaScript</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Bootstrap</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '80%'}}></div>
                    </div>
                    <span className="skill-percentage">80%</span>
                  </div>
                </div>
              </div>

              {/* Mobile Integrations & Cloud */}
              <div className="skill-category">
                <div className="category-header">
                  <div className="category-icon">☁️</div>
                  <h3 className="category-title">Mobile Integrations & Cloud</h3>
                </div>
                <div className="skills-list">
                  <div className="skill-item">
                    <span className="skill-name">Firebase</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Firestore (Realtime/Offline)</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Push Notifications (FCM/APNs)</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '80%'}}></div>
                    </div>
                    <span className="skill-percentage">80%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">App Store / Play Store Deployment</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '90%'}}></div>
                    </div>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Video Calling (Agora, LiveKit)</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '75%'}}></div>
                    </div>
                    <span className="skill-percentage">75%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Chat & Support (Crisp)</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '80%'}}></div>
                    </div>
                    <span className="skill-percentage">80%</span>
                  </div>
                </div>
              </div>

              <div className="skill-category">
                <div className="category-header">
                  <div className="category-icon">⚙️</div>
                  <h3 className="category-title">Backend Development</h3>
                </div>
                <div className="skills-list">
                  <div className="skill-item">
                    <span className="skill-name">Python</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Django</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '80%'}}></div>
                    </div>
                    <span className="skill-percentage">80%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Node.js</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '75%'}}></div>
                    </div>
                    <span className="skill-percentage">75%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Express.js</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '70%'}}></div>
                    </div>
                    <span className="skill-percentage">70%</span>
                  </div>
                </div>
              </div>

              <div className="skill-category">
                <div className="category-header">
                  <div className="category-icon">📱</div>
                  <h3 className="category-title">Mobile Development</h3>
                </div>
                <div className="skills-list">
                  <div className="skill-item">
                    <span className="skill-name">React Native</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">FlutterFlow</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '80%'}}></div>
                    </div>
                    <span className="skill-percentage">80%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Flutter</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '75%'}}></div>
                    </div>
                    <span className="skill-percentage">75%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">iOS/Android</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '70%'}}></div>
                    </div>
                    <span className="skill-percentage">70%</span>
                  </div>
                </div>
              </div>

              <div className="skill-category">
                <div className="category-header">
                  <div className="category-icon">🔧</div>
                  <h3 className="category-title">Development Tools</h3>
                </div>
                <div className="skills-list">
                  <div className="skill-item">
                    <span className="skill-name">Git & GitLab</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '90%'}}></div>
                    </div>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Taiga</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Jira</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '80%'}}></div>
                    </div>
                    <span className="skill-percentage">80%</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">VS Code</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '95%'}}></div>
                    </div>
                    <span className="skill-percentage">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="profile-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-icon">
              <span>🎓</span>
            </div>
            <h2 className="section-title">Education & Certifications</h2>
          </div>
          <div className="section-content">
            <div className="education-grid">
              <div className="education-item">
                <div className="education-icon">
                  <span>🎓</span>
                </div>
                <div className="education-content">
                  <h3 className="degree-title">Bachelor of Engineering - Mechanical Engineering</h3>
                  <div className="institution-info">
                    <span className="institution-name">Anna University</span>
                    <span className="education-year">2021</span>
                  </div>
                  <p className="education-description">
                    Comprehensive study in mechanical engineering principles, 
                    problem-solving methodologies, and analytical thinking that 
                    translates well into software development.
                  </p>
                </div>
              </div>

              <div className="education-item">
                <div className="education-icon">
                  <span>📜</span>
                </div>
                <div className="education-content">
                  <h3 className="degree-title">Full Stack Development Certification</h3>
                  <div className="institution-info">
                    <span className="institution-name">Steyp Edu Platform</span>
                    <span className="education-year">2022</span>
                  </div>
                  <p className="education-description">
                    Intensive program covering modern web development technologies, 
                    including React.js, Node.js, Python, Django, and database management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="contact-content">
            <h2 className="contact-title">Let's Work Together</h2>
            <p className="contact-description">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="contact-actions">
              <button className="action-btn primary" onClick={handleKnowMore}>
                <span className="btn-icon">💼</span>
                <span>View Detailed Portfolio</span>
              </button>
              <button className="action-btn secondary" onClick={() => window.open('mailto:akhinkakhin@gmail.com')}>
                <span className="btn-icon">📧</span>
                <span>Get In Touch</span>
              </button>
              <button className="action-btn tertiary" onClick={() => window.open('tel:+917012120461')}>
                <span className="btn-icon">📞</span>
                <span>Call Now</span>
        </button>
      </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;