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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  const personalInfo = {
    name: 'AKHIN K',
    location: 'Calicut',
    phone: '+91 7012120461',
    email: 'akhinkakhin@gmail.com',
    role: 'Full Stack & Mobile App Developer'
  };

  const skillCategories = [
    {
      id: 'mobile',
      icon: '📱',
      title: 'Mobile Development',
      description: 'Cross-platform mobile application development using modern frameworks',
      skills: [
        { name: 'React Native', description: 'Cross-platform mobile development framework', proficiency: 85 },
        { name: 'FlutterFlow', description: 'Visual app development platform for Flutter', proficiency: 75 }
      ]
    },
    {
      id: 'frontend',
      icon: '🎨',
      title: 'Frontend Technologies',
      description: 'Modern web technologies for creating responsive user interfaces',
      skills: [
        { name: 'HTML, CSS, JavaScript', description: 'Core web technologies and modern ES6+ features', proficiency: 90 },
        { name: 'React.js', description: 'Popular JavaScript library for building user interfaces', proficiency: 88 },
        { name: 'Bootstrap', description: 'CSS framework for responsive web design', proficiency: 85 }
      ]
    },
    {
      id: 'backend',
      icon: '⚙️',
      title: 'Backend Technologies',
      description: 'Server-side development and database management',
      skills: [
        { name: 'Python Programming', description: 'Object-oriented programming and automation', proficiency: 85 },
        { name: 'Django Framework', description: 'High-level Python web framework', proficiency: 80 }
      ]
    },
    {
      id: 'tools',
      icon: '🔧',
      title: 'Development Tools & Concepts',
      description: 'Modern development practices and methodologies',
      skills: [
        { name: 'Full Stack Development', description: 'End-to-end web application development', proficiency: 85 },
        { name: 'Cross-platform Mobile Applications', description: 'Building apps for multiple platforms', proficiency: 80 },
        { name: 'Responsive Web Design', description: 'Creating adaptive layouts for all devices', proficiency: 88 }
      ]
    },
    {
      id: 'management',
      icon: '📊',
      title: 'Project Management & Version Control',
      description: 'Project management tools and collaborative development',
      skills: [
        { name: 'Git & GitLab', description: 'Version control and collaborative development', proficiency: 85 },
        { name: 'Taiga', description: 'Agile project management platform', proficiency: 75 },
        { name: 'Jira', description: 'Issue tracking and agile project management', proficiency: 70 }
      ]
    }
  ];

  const professionalExperience = [
    {
      title: 'Mobile App Developer',
      company: 'Tegain Private Limited',
      duration: '1.5 Years',
      responsibilities: [
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
      responsibilities: [
        'Developed end-to-end web applications using modern technology stack',
        'Built responsive frontend interfaces using HTML, CSS, JavaScript, Bootstrap, and React.js',
        'Implemented backend solutions using Python and Django framework',
        'Gained hands-on experience in React Native for mobile development',
        'Managed code repositories using Git and GitLab for version control'
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

  const handleCardClick = (sectionId) => {
    setSelectedSection(sectionId);
  };

  const closeModal = () => {
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

  const renderPersonalInfoModal = () => (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Personal Information</h2>
          <button className="close-button" onClick={closeModal}>×</button>
        </div>
        
        <div className="detail-section">
          <div className="detail-icon">👤</div>
          
          <div className="personal-info-grid">
            <div className="info-item">
              <div className="info-label">Full Name</div>
              <div className="info-value">{personalInfo.name}</div>
            </div>
            
            <div className="info-item">
              <div className="info-label">Location</div>
              <div className="info-value">{personalInfo.location}</div>
            </div>
            
            <div className="info-item">
              <div className="info-label">Phone</div>
              <div className="info-value phone">{personalInfo.phone}</div>
            </div>
            
            <div className="info-item">
              <div className="info-label">Email</div>
              <div className="info-value email">{personalInfo.email}</div>
            </div>
            
            <div className="info-item">
              <div className="info-label">Professional Role</div>
              <div className="info-value role">{personalInfo.role}</div>
            </div>
          </div>
          
          <div className="contact-actions">
            <button className="contact-btn" onClick={handleEmailClick}>
              Send Email
            </button>
            <button className="contact-btn" onClick={handlePhoneClick}>
              Call Now
            </button>
            <a 
              href="/AKHIN K Mobile App Developer.pdf" 
              className="contact-btn download-cv-btn"
              download="AKHIN_K_Mobile_App_Developer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSkillDetailModal = () => (
    <div className="skills-detail-modal" onClick={closeSkillDetail}>
      <div className="skills-detail-content" onClick={(e) => e.stopPropagation()}>
        <div className="skills-detail-header">
          <div className="skills-detail-title">
            {selectedSkillCategory.title}
          </div>
          <button className="skills-detail-close" onClick={closeSkillDetail}>×</button>
        </div>
        
        <div className="skills-list-detailed">
          {selectedSkillCategory.skills.map((skill, index) => (
            <div key={index} className="skill-item-detailed">
              <div className="skill-item-name">{skill.name}</div>
              <div className="skill-item-description">{skill.description}</div>
              <div className="skill-proficiency">
                <span className="proficiency-label">Proficiency:</span>
                <div className="proficiency-bar">
                  <div 
                    className="proficiency-fill" 
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <span className="proficiency-label">{skill.proficiency}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTechnicalSkillsModal = () => {
    if (selectedSkillCategory) {
      return renderSkillDetailModal();
    }

    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">Technical Skills</h2>
            <button className="close-button" onClick={closeModal}>×</button>
          </div>
          
          <div className="detail-section">
            <div className="detail-icon">🛠️</div>
            
            <div className="skills-grid">
              {skillCategories.map((category) => (
                <div 
                  key={category.id} 
                  className="skill-category"
                >
                  <h4 className="skill-category-title">{category.title}</h4>
                  <p className="skill-category-description">{category.description}</p>
                  <button 
                    className="expand-chevron-btn"
                    aria-label={`View details for ${category.title}`}
                    onClick={(e) => { e.stopPropagation(); handleSkillCategoryClick(category); }}
                  >
                    <span className="chevron-circle">›</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderExperienceModal = () => (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Professional Experience</h2>
          <button className="close-button" onClick={closeModal}>×</button>
        </div>
        
        <div className="detail-section">
          <div className="experience-timeline">
            {professionalExperience.map((job, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <h4 className="job-title">{job.title}</h4>
                  <div className="company-info">{job.company}</div>
                  <div className="duration">{job.duration}</div>
                </div>
                <ul className="experience-details">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderEducationModal = () => (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Education</h2>
          <button className="close-button" onClick={closeModal}>×</button>
        </div>
        
        <div className="detail-section">
          <div className="detail-icon">🎓</div>
          
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <h4 className="degree-title">{edu.degree}</h4>
                <div className="institution">{edu.institution}</div>
                <div className="year">{edu.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderModal = () => {
    switch(selectedSection) {
      case 'personal-info':
        return renderPersonalInfoModal();
      case 'technical-skills':
        return renderTechnicalSkillsModal();
      case 'professional-experience':
        return renderExperienceModal();
      case 'education':
        return renderEducationModal();
      default:
        return null;
    }
  };

  return (
    <div className="mainpage-container">
      <h1 className="mainpage-title">Portfolio Overview</h1>
      <p className="mainpage-description">
        Explore different aspects of my professional journey and technical expertise
      </p>
      
      <div className="portfolio-grid">
        {portfolioSections.map((section) => (
          <div 
            key={section.id}
            className="grid-card"
            onClick={() => handleCardClick(section.id)}
          >
            <div className="card-icon">
              {section.icon}
            </div>
            <h3 className="card-title">{section.title}</h3>
            <p className="card-description">{section.description}</p>
            <ul className="card-features">
              {section.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="view-more-btn">
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedSection && renderModal()}
    </div>
  );
}

export default Mainpage;