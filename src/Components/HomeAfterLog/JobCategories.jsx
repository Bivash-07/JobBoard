import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faChartLine, 
  faBriefcase, 
  faPenNib, 
  faBullhorn, 
  faPaintBrush, 
  faGlobe, 
  faGraduationCap 
} from '@fortawesome/free-solid-svg-icons';
import './JobCategories.css';

const JobCategories = () => {
  const categories = [
    { icon: faCode, title: 'Web & Software Dev', jobs: 122 },
    { icon: faChartLine, title: 'Data Science & Analytics', jobs: 155 },
    { icon: faBriefcase, title: 'Accounting & Consulting', jobs: 300 },
    { icon: faPenNib, title: 'Writing & Translations', jobs: 80 },
    { icon: faBullhorn, title: 'Sales & Marketing', jobs: 120 },
    { icon: faPaintBrush, title: 'Graphics & Design', jobs: 78 },
    { icon: faGlobe, title: 'Digital Marketing', jobs: 90 },
    { icon: faGraduationCap, title: 'Education & Training', jobs: 210 },
  ];

  return (
    <section className="job-category-area">
      <div className="container">
        <div className="heading">
          <h2>Job Categories</h2>
          <p>Explore opportunities across various industries and domains</p>
        </div>
        <div className="job-categories-grid">
          {categories.map((category, index) => (
            <Link key={index} className="category-card">
              <div className="category-icon">
                <FontAwesomeIcon icon={category.icon} />
              </div>
              <div className="category-details">
                <h3>{category.title}</h3>
                <p>{category.jobs} Jobs Available</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="view-all-btn">
          <Link to="/JobCategoriesPage" className="btn theme-btn">View All Categories</Link>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;