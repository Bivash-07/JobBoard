import React from 'react';
import { Link } from 'react-router-dom';
import './LandingJobProvider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { 
  faSearch, 
  faBriefcase, 
  faUsers, 
  faChartLine,
  faBuilding,
  faGraduationCap,
  faCogs,
  faCode
} from '@fortawesome/free-solid-svg-icons';



const LandingJobProvider = () => {
  const jobCategories = [
    { icon: faBuilding, name: 'Business' },
    { icon: faCode, name: 'Technology' },
    { icon: faGraduationCap, name: 'Education' },
    { icon: faCogs, name: 'Engineering' },
  ];

  const handleFindJobsClick = () => {
    alert("Sign in as Job Seeker");
  };

  return (
    <div className="landing-container">
      <main>
        <section className="hero-section">
          <h1>Find Your Dream Job</h1>
          <p>Connect with top employers and opportunities across various industries</p>
          <div className="search-bar">
            <input type="text" placeholder="Job title, keywords, or company" />
            <input type="text" placeholder="City or zip code" />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} /> Search
            </button>
          </div>
        </section>

        <section className="features-section">
          <h2>Why Choose JobProvider</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FontAwesomeIcon icon={faBriefcase} className="feature-icon" />
              <h3>Diverse Opportunities</h3>
              <p>Access a wide range of job listings across various industries and roles.</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faUsers} className="feature-icon" />
              <h3>Connect with Employers</h3>
              <p>Directly interact with top companies and recruiters.</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faChartLine} className="feature-icon" />
              <h3>Career Growth</h3>
              <p>Find opportunities that align with your career goals and aspirations.</p>
            </div>
          </div>
        </section>

        <section id="Jobs" className="cta-section">
          <h2>Ready to Take the Next Step in Your Career?</h2>
          <p>Join thousands of job seekers who have found their ideal positions through JobProvider.</p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={handleFindJobsClick}>Find Jobs</button>
            {/* <button className="cta-button secondary">Post a Job</button> */}
            <Link to="/PostJob">
                <button className="cta-button secondary">Post a Job</button>
            </Link>
          </div>
        </section>

        <section id="Categories" className="categories-section">
          <h2>Popular Job Categories</h2>
          <div className="categories-grid">
            {jobCategories.map((category, index) => (
              <div key={index} className="category-card">
                <FontAwesomeIcon icon={category.icon} className="category-icon" />
                <h3>{category.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingJobProvider;
