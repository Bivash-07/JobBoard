import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faBriefcase, faLink, faMapMarkerAlt, faCalendarAlt, faTools, faFileAlt, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { db } from '../../firebase.config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import './PostJob.css';
import NavAfterLog from '../NavAfterLog/NavAfterLog';
import Footer from '../HomeBeforeLog/Footer';
import ScrollToTop from "./ScrollToTop";


const PostJob = () => {
    const [jobData, setJobData] = useState({
        company: '',
        experience: '',
        job_link: '',
        location: '',
        postedOn: '',
        skills: '',
        title: '',
        type: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formattedJobData = {
                ...jobData,
                postedOn: Timestamp.fromDate(new Date(jobData.postedOn)), // Convert to Firebase Timestamp
                skills: jobData.skills.split(',').map(skill => skill.trim()) // Convert skills to an array
            };

            const docRef = await addDoc(collection(db, 'jobs'), formattedJobData);
            console.log('Document written with ID: ', docRef.id);
            setSuccessMessage('Job posted successfully!');
            setJobData({
                company: '',
                experience: '',
                job_link: '',
                location: '',
                postedOn: '',
                skills: '',
                title: '',
                type: ''
            });
            setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
        } catch (error) {
            console.error('Error adding document: ', error);
            setSuccessMessage('Error posting job. Please try again.');
        }
    };


    return (
        <>
            <ScrollToTop />
            <div className="Navbar">
                <NavAfterLog />
            </div>
            <div className="home-container">
                <header className="home-header">
                    <h1>JobProvider</h1>
                    <p>Connect with opportunities, post your dream job</p>
                </header>
                <main className="home-main">
                    <section className="job-post-form">
                        <h2>Post a New Job</h2>
                        {successMessage && <div className="success-message">{successMessage}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faBuilding} className="form-icon" />
                                <input
                                    type="text"
                                    name="company"
                                    value={jobData.company}
                                    onChange={handleInputChange}
                                    placeholder="Company Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faBriefcase} className="form-icon" />
                                <input
                                    type="text"
                                    name="experience"
                                    value={jobData.experience}
                                    onChange={handleInputChange}
                                    placeholder="Experience Required"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faLink} className="form-icon" />
                                <input
                                    type="url"
                                    name="job_link"
                                    value={jobData.jobLink}
                                    onChange={handleInputChange}
                                    placeholder="Job Link"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="form-icon" />
                                <input
                                    type="text"
                                    name="location"
                                    value={jobData.location}
                                    onChange={handleInputChange}
                                    placeholder="Job Location"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faCalendarAlt} className="form-icon" />
                                <input
                                    type="date"
                                    name="postedOn"
                                    value={jobData.postedOn}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faTools} className="form-icon" />
                                <input
                                    type="text"
                                    name="skills"
                                    value={jobData.skills}
                                    onChange={handleInputChange}
                                    placeholder="Required Skills"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faFileAlt} className="form-icon" />
                                <input
                                    type="text"
                                    name="title"
                                    value={jobData.title}
                                    onChange={handleInputChange}
                                    placeholder="Job Title"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faUserClock} className="form-icon" />
                                <select
                                    name="type"
                                    value={jobData.type}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Job Type</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Contract">Contract</option>
                                </select>
                            </div>
                            <button type="submit" className="submit-btn">Post Job</button>
                        </form>
                    </section>
                </main>
            </div>
            <div id="Contact-Us" className="Footer">
                <Footer />
            </div>

        </>
    );
};

export default PostJob;
