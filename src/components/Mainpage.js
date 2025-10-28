import React, { useState } from 'react';
import '../styles/Mainpage.css';

function Mainpage() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState(null);

  const portfolioSections = [
    {
      id: 'personal-info',
      icon: '👤',
      title: 'Personal Information',
      description: 'Get to know more about my background, interests, and personal journey in technology.',
      features: [
        'Professional Background',
        'Personal Interests',
        'Career Objectives',
        'Contact Details'
      ],
      color: 'blue'
    },
    {
      id: 'technical-skills',
      icon: '🛠️',
      title: 'Technical Skills',
      description: 'Explore my technical expertise across various technologies and development frameworks.',
      features: [
        'Frontend Development',
        'Backend Technologies',
        'Mobile App Development',
        'Database Management'
      ],
      color: 'purple'
    },
    {
      id: 'professional-experience',
      icon: '💼',
      title: 'Professional Experience',
      description: 'Discover my work experience, projects, and professional achievements in the industry.',
      features: [
        'Work Experience',
        'Key Projects',
        'Achievements',
        'Client Testimonials'
      ],
      color: 'green'
    },
    {
      id: 'education',
      icon: '🎓',
      title: 'Education',
      description: 'Learn about my educational background, certifications, and continuous learning journey.',
      features: [
        'Academic Qualifications',
        'Certifications',
        'Online Courses',
        'Professional Development'
      ],
      color: 'orange'
    }
  ];

  const personalInfo = {
    name: 'AKHIN K',
    location: 'Calicut',
    phone: '+91 7012120461',
    email: 'akhinkakhin@gmail.com',
    role: 'Full Stack & Mobile App Developer'
  };

  const skills = {
    frontend: {
      title: 'Frontend Development',
      description: 'Creating beautiful and responsive user interfaces',
      skills: [
        { name: 'React.js', proficiency: 90 },
        { name: 'HTML/CSS', proficiency: 95 },
        { name: 'JavaScript', proficiency: 85 },
        { name: 'Bootstrap', proficiency: 80 }
      ]
    },
    backend: {
      title: 'Backend Development',
      description: 'Building robust server-side applications',
      skills: [
        { name: 'Python', proficiency: 85 },
        { name: 'Django', proficiency: 80 },
        { name: 'Node.js', proficiency: 75 },
        { name: 'Express.js', proficiency: 70 }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications',
      skills: [
        { name: 'React Native', proficiency: 85 },
        { name: 'FlutterFlow', proficiency: 80 },
        { name: 'Flutter', proficiency: 75 },
        { name: 'iOS/Android', proficiency: 70 }
      ]
    },
    tools: {
      title: 'Development Tools',
      description: 'Essential tools for modern development workflow',
      skills: [
        { name: 'Git & GitLab', proficiency: 90 },
        { name: 'Taiga', proficiency: 85 },
        { name: 'Jira', proficiency: 80 },
        { name: 'VS Code', proficiency: 95 }
      ]
    }
  };

  const experience = [
    {
      title: 'Mobile App Developer',
      company: 'Tegain Private Limited',
      duration: '1.5 Years',
      details: [
        'Developed cross-platform mobile applications using React Native and FlutterFlow',
        'Collaborated with development teams to deliver high-quality mobile solutions',
        'Implemented user-friendly interfaces and optimized app performance',
        'Managed project workflows using Taiga and tracked issues through Jira',
        'Utilized Git and GitLab for version control and collaborative development'
      ]
    },
    {
      title: 'Full Stack Developer (Internship)',
      company: 'Stey Private Limited',
      duration: '1 Year',
      details: [
        'Developed end-to-end web applications using modern technology stack',
        'Built responsive frontend interfaces using HTML, CSS, JavaScript, Bootstrap, and React.js',
        'Implemented backend solutions using Python and Django framework',
        'Gained hands-on experience in React Native for mobile development'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering - Mechanical Engineering',
      institution: 'Anna University',
      year: '2021'
    },
    {
      degree: 'Full Stack Development Certification',
      institution: 'Steyp Edu Platform',
      year: '2022'
    }
  ];

  const handleSpotlightClick = (sectionId) => {
    setSelectedSection(sectionId);
  };

  const closeSpotlightDetail = () => {
    setSelectedSection(null);
    setSelectedSkillCategory(null);
  };

  const handleSkillCategoryClick = (category) => {
    setSelectedSkillCategory(category);
  };

  const closeSkillDetail = () => {
    setSelectedSkillCategory(null);
  };

  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=akhinkakhin@gmail.com', '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${personalInfo.phone}`, '_blank');
  };

  const renderSpotlightDetail = () => {
    if (!selectedSection) return null;

    switch (selectedSection) {
      case 'personal-info':
        return (
          <div className="spotlight-detail-overlay" onClick={closeSpotlightDetail}>
            <div className="spotlight-detail-content" onClick={(e) => e.stopPropagation()}>
              <div className="detail-header">
                <div className="detail-icon-wrapper">
                  <div className="detail-icon">👤</div>
                  <div className="icon-glow"></div>
                </div>
                <h2 className="detail-title">Personal Information</h2>
                <button className="detail-close" onClick={closeSpotlightDetail}>
                  <span>×</span>
                </button>
              </div>
              <div className="detail-body">
                <div className="info-spotlight-grid">
                  <div className="info-spotlight-item">
                    <div className="info-glow"></div>
                    <div className="info-content">
                      <div className="info-label">Full Name</div>
                      <div className="info-value">{personalInfo.name}</div>
                    </div>
                  </div>
                  <div className="info-spotlight-item">
                    <div className="info-glow"></div>
                    <div className="info-content">
                      <div className="info-label">Location</div>
                      <div className="info-value">{personalInfo.location}</div>
                    </div>
                  </div>
                  <div className="info-spotlight-item">
                    <div className="info-glow"></div>
                    <div className="info-content">
                      <div className="info-label">Phone</div>
                      <div className="info-value phone">{personalInfo.phone}</div>
                    </div>
                  </div>
                  <div className="info-spotlight-item">
                    <div className="info-glow"></div>
                    <div className="info-content">
                      <div className="info-label">Email</div>
                      <div className="info-value email">{personalInfo.email}</div>
                    </div>
                  </div>
                  <div className="info-spotlight-item">
                    <div className="info-glow"></div>
                    <div className="info-content">
                      <div className="info-label">Professional Role</div>
                      <div className="info-value role">{personalInfo.role}</div>
                    </div>
                  </div>
                </div>
                <div className="detail-actions">
                  <button className="action-btn primary" onClick={handleEmailClick}>
                    <span className="btn-icon">📧</span>
                    <span>Send Email</span>
                  </button>
                  <button className="action-btn secondary" onClick={handlePhoneClick}>
                    <span className="btn-icon">📞</span>
                    <span>Call Now</span>
                  </button>
                  <a 
                    href="/AKHIN K Mobile App Developer.pdf" 
                    className="action-btn tertiary"
                    download="AKHIN_K_Mobile_App_Developer_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="btn-icon">📄</span>
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );

      case 'technical-skills':
        return (
          <div className="spotlight-detail-overlay" onClick={closeSpotlightDetail}>
            <div className="spotlight-detail-content" onClick={(e) => e.stopPropagation()}>
              <div className="detail-header">
                <div className="detail-icon-wrapper">
                  <div className="detail-icon">🛠️</div>
                  <div className="icon-glow"></div>
                </div>
                <h2 className="detail-title">Technical Skills</h2>
                <button className="detail-close" onClick={closeSpotlightDetail}>
                  <span>×</span>
                </button>
              </div>
              <div className="detail-body">
                <div className="skills-spotlight-grid">
                  {Object.entries(skills).map(([key, skill]) => (
                    <div key={key} className="skill-spotlight-item" onClick={() => handleSkillCategoryClick(key)}>
                      <div className="skill-glow"></div>
                      <div className="skill-content">
                        <h3 className="skill-title">{skill.title}</h3>
                        <p className="skill-description">{skill.description}</p>
                        <div className="skill-preview">
                          {skill.skills.slice(0, 2).map((skillItem, index) => (
                            <span key={index} className="skill-tag">
                              {skillItem.name}
                            </span>
                          ))}
                          <span className="skill-more">+{skill.skills.length - 2} more</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'professional-experience':
        return (
          <div className="spotlight-detail-overlay" onClick={closeSpotlightDetail}>
            <div className="spotlight-detail-content" onClick={(e) => e.stopPropagation()}>
              <div className="detail-header">
                <div className="detail-icon-wrapper">
                  <div className="detail-icon">💼</div>
                  <div className="icon-glow"></div>
                </div>
                <h2 className="detail-title">Professional Experience</h2>
                <button className="detail-close" onClick={closeSpotlightDetail}>
                  <span>×</span>
                </button>
              </div>
              <div className="detail-body">
                <div className="experience-spotlight-timeline">
                  {experience.map((exp, index) => (
                    <div key={index} className="experience-spotlight-item">
                      <div className="experience-glow"></div>
                      <div className="experience-content">
                        <div className="experience-header">
                          <h3 className="job-title">{exp.title}</h3>
                          <span className="duration-badge">{exp.duration}</span>
                        </div>
                        <div className="company-name">{exp.company}</div>
                        <div className="experience-details">
                          {exp.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="detail-item">
                              <span className="detail-bullet">→</span>
                              <span className="detail-text">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="spotlight-detail-overlay" onClick={closeSpotlightDetail}>
            <div className="spotlight-detail-content" onClick={(e) => e.stopPropagation()}>
              <div className="detail-header">
                <div className="detail-icon-wrapper">
                  <div className="detail-icon">🎓</div>
                  <div className="icon-glow"></div>
                </div>
                <h2 className="detail-title">Education</h2>
                <button className="detail-close" onClick={closeSpotlightDetail}>
                  <span>×</span>
                </button>
              </div>
              <div className="detail-body">
                <div className="education-spotlight-grid">
                  {education.map((edu, index) => (
                    <div key={index} className="education-spotlight-item">
                      <div className="education-glow"></div>
                      <div className="education-content">
                        <h3 className="degree-title">{edu.degree}</h3>
                        <div className="institution-name">{edu.institution}</div>
                        <div className="year-badge">{edu.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderSkillDetail = () => {
    if (!selectedSkillCategory) return null;

    const skill = skills[selectedSkillCategory];
    if (!skill) return null;

    return (
      <div className="skill-detail-overlay" onClick={closeSkillDetail}>
        <div className="skill-detail-content" onClick={(e) => e.stopPropagation()}>
          <div className="skill-detail-header">
            <h3 className="skill-detail-title">{skill.title}</h3>
            <button className="skill-detail-close" onClick={closeSkillDetail}>
              <span>×</span>
            </button>
          </div>
          <div className="skill-detail-body">
            <p className="skill-detail-description">{skill.description}</p>
            <div className="skills-list-detailed">
              {skill.skills.map((skillItem, index) => (
                <div key={index} className="skill-item-detailed">
                  <div className="skill-item-name">{skillItem.name}</div>
                  <div className="skill-proficiency">
                    <span className="proficiency-label">Proficiency</span>
                    <div className="proficiency-bar">
                      <div 
                        className="proficiency-fill" 
                        style={{ width: `${skillItem.proficiency}%` }}
                      ></div>
                    </div>
                    <span className="proficiency-percentage">{skillItem.proficiency}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mainpage">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <button className="back-btn" onClick={() => window.history.back()}>
            ← Back
          </button>
          <div className="nav-logo">
            <span className="logo-text">AK</span>
          </div>
          <div className="nav-links">
            <button className="nav-link" onClick={() => window.location.href = '/'}>Home</button>
            <button className="nav-link" onClick={() => window.location.href = '/profile'}>About</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="mainpage-container">
        <div className="page-header">
          <h1 className="mainpage-title">Portfolio Overview</h1>
          <p className="mainpage-description">
            Explore different aspects of my professional journey and technical expertise
          </p>
        </div>
        
        <div className="spotlight-grid">
          {portfolioSections.map((section, index) => (
            <div 
              key={section.id}
              className={`spotlight-item ${section.color}`}
              onClick={() => handleSpotlightClick(section.id)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="spotlight-glow"></div>
              <div className="spotlight-content">
                <div className="spotlight-icon">
                  <div className="icon-wrapper">
                    {section.icon}
                  </div>
                  <div className="icon-pulse"></div>
                </div>
                <div className="spotlight-text">
                  <h3 className="spotlight-title">{section.title}</h3>
                  <p className="spotlight-description">{section.description}</p>
                  <div className="spotlight-features">
                    {section.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="spotlight-action">
                  <button className="spotlight-btn">
                    <span>Explore</span>
                    <div className="btn-arrow">→</div>
                  </button>
                </div>
              </div>
              <div className="spotlight-shine"></div>
            </div>
          ))}
        </div>

        {selectedSection && renderSpotlightDetail()}
        {selectedSkillCategory && renderSkillDetail()}
      </div>
    </div>
  );
}

export default Mainpage;