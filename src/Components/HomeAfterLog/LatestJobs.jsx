import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LatestJobs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import NavAfterLog from '../NavAfterLog/NavAfterLog';


const LatestJobs = () => {
  const [activeTab, setActiveTab] = useState('latest');

  const jobs = [
    { type: 'Full Time', title: 'Product Redesign', company: 'Company 1', location: '2708 Scenic Way, IL 62373', logo: 'https://utouchdesign.com/themes/envato/escort/assets/img/company_logo_1.png' },

    { type: 'Full Time', title: 'New Product Mockup', company: 'Company 2', location: '2708 Scenic Way, IL 62373', logo: 'https://utouchdesign.com/themes/envato/escort/assets/img/company_logo_2.png' },

    { type: 'Part Time', title: 'Custom Php Developer', company: 'Company 3', location: '3765 C Street, Worcester', logo: 'https://utouchdesign.com/themes/envato/escort/assets/img/company_logo_3.png' },

    { type: 'Part Time', title: 'Wordpress Developer', company: 'Company 4', location: '2719 Duff Avenue, Winooski', logo: 'https://utouchdesign.com/themes/envato/escort/assets/img/company_logo_4.png' },

    { type: 'Internship', title: 'Web Maintenance', company: 'Company 5', location: '2708 Scenic Way, IL 62373', logo: 'https://utouchdesign.com/themes/envato/escort/assets/img/company_logo_4.png' },

    { type: 'Part Time', title: 'Photoshop Designer', company: 'Company 6', location: '2865 Emma Street, Lubbock', logo: 'https://utouchdesign.com/themes/envato/escort/assets/img/company_logo_6.png' },

    { type: 'Full Time', title: 'HTML5 & CSS3 Coder', company: 'Company 7', location: '2719 Burnside Avenue, Logan', logo: 'https://utouchdesign.com/themes/envato/escort/assets/img/company_logo_7.png' },

    { type: 'Part Time', title: '.Net Developer', company: 'Company 8', location: '3815 Forest Drive, Alexandria', logo: 'https://utouchdesign.com/themes/envato/escort/assets/img/company_logo_7.png' },

  ];

  return (
    <>
      <section className="latest-jobs-section">
        <div className="container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'latest' ? 'active' : ''}`}
              onClick={() => setActiveTab('latest')}
            >
              Latest Jobs
            </button>
            <button
              className={`tab ${activeTab === 'recent' ? 'active' : ''}`}
              onClick={() => setActiveTab('recent')}
            >
              Recent Jobs
            </button>
          </div>

          <div className="jobs-grid">
            {jobs.map((job, index) => (
              <div key={index} className="job-card">
                <span className={`job-type ${job.type.replace(' ', '-').toLowerCase()}`}>
                  {job.type}
                </span>
                <div className="job-like">
                  <FontAwesomeIcon icon={faHeart} className="fa-heart-icon" />
                </div>
                <div className="job-content">
                  <div className="job-avatar">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                    />
                  </div>
                  <h5 className="job-title">{job.title}</h5>
                  <p className="job-location">{job.location}</p>
                </div>
                <p className="apply-btn">Apply Now</p>
              </div>
            ))}
          </div>

          <div className="browse-all-btn">
            {/* <NavAfterLog /> */}
            <Link to="/LatestJobsPage" className="btn">Browse All Jobs</Link>
          </div>
        </div>
      </section>
    </>

  );
};

export default LatestJobs;
