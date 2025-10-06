import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes, faBullseye, faCheckCircle, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import careersImage from '../assets/careers.png' ;

import '../styles/Careers.css';

// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

import allJobData from '../data/allJobData.js';
// --- Reusable Components ---
const SkillsChart = ({ skills }) => {
    const data = {
        labels: skills.labels,
        datasets: [{
            label: 'Required Proficiency',
            data: skills.data,
            backgroundColor: 'rgba(164, 200, 233, 0.16)',
            borderColor: 'rgba(74, 229, 43, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(148, 24, 215, 1)',
        }]
    };
    const options = {
        scales: { r: { angleLines: { color: 'rgba(0, 0, 0, 0.1)' }, grid: { color: 'rgba(0, 0, 0, 0.1)' }, pointLabels: { font: { size: 12 }, color: '#333' }, ticks: { backdropColor: 'transparent', stepSize: 20 }, min: 0, max: 100 } },
        plugins: { legend: { display: false } },
        maintainAspectRatio: false
    };
    return <div className="skills-chart-wrapper"><Radar data={data} options={options} /></div>;
};

const JobDetailsTabs = ({ responsibilities }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="tabs-container">
            <div className="tab-headers">
                {responsibilities.map((resp, index) => (
                    <button key={index} className={`tab-header ${activeTab === index ? 'active' : ''}`} onClick={() => setActiveTab(index)}>
                        {resp.title}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                <p>{responsibilities[activeTab].content}</p>
            </div>
        </div>
    );
};

const JobDetailModal = ({ job, onClose, onApply }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                
                <h2>{job.title}</h2>
                
                <div className="modal-body">
                    <h4>Job Overview</h4>
                    <p>{job.overview}</p>
                    
                    <h4>Core Qualifications</h4>
                    <ul className="qualifications-list">{job.qualifications.map((item, i) => <li key={i}><span>✔</span>{item}</li>)}</ul>
                    
                    <h4>Key Responsibilities</h4>
                    <JobDetailsTabs responsibilities={job.responsibilities} />

                    <h4>Required Skills Profile</h4>
                    <p>A blend of technical and soft skills is crucial for this role. The radar chart illustrates the ideal skill set.</p>
                    <SkillsChart skills={job.skills} />

                    <button onClick={onApply} className="cta-button apply-button">Apply for this Role</button>
                </div>
            </div>
        </div>
    );
};

// --- Main Careers Component ---
function Careers() {
    const [selectedJob, setSelectedJob] = useState(null);

    const handleApplyAndScroll = () => {
        setSelectedJob(null); // Modal band karein
        setTimeout(() => {
            const formSection = document.getElementById('application-form-section');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100); // Thoda delay taaki modal smooth band ho
    };

    return (
        <div className="careers-page">
            {selectedJob && <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} onApply={handleApplyAndScroll} />}

            <section className="careers-hero">
                <img src={careersImage} alt="Careers at Rajesh Kandoi and Associates" className="careers-hero-image" />
                <div className="hero-content-wrapper">
                    <h1>Welcome to Rajesh Kandoi and Associates!</h1>
                    <p>As a leading, tech-driven CA firm in Jaipur, we're innovating financial services with AI and looking for passionate individuals to join our growing team.</p>
                    <a href="#job-openings-section" className="cta-button">View Current Openings</a>
                </div>
            </section>

            <section id="job-openings-section" className="job-openings-section">
                <div className="careers-section-header">
                    <h2>Current Job Openings</h2>
                    <p>Click on any role below to view its detailed job description. Once you find a role that matches your aspirations, you can apply directly through our integrated application form.</p>
                </div>
                <div className="job-listings-grid">
                    {allJobData.map(job => (
                        <div key={job.id} className="job-card">
                            <div className="job-card-header">
                                <h3>{job.title}</h3>
                                <p>{job.shortDesc}</p>
                            </div>
                            <div className="job-card-footer">
                                <button onClick={() => setSelectedJob(job)} className="details-button">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <section id="application-form-section" className="application-form-section">
                <h2>Apply Now</h2>
                <p>Ready to take the next step? Fill out the form below to apply. We look forward to hearing from you.</p>
                
                <form 
                    action="https://formsubmit.co/rajeshkandoionline@gmail.com" 
                    method="POST" 
                    encType="multipart/form-data"
                    className="application-form"
                >
                    {/* FormSubmit.co Configurations */}
                    <input type="hidden" name="_subject" value="New Job Application Received!"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_template" value="table"/>
                    {/* Optional: Redirect to a custom thank you page on your site */}
                    {/* <input type="hidden" name="_next" value="https://yoursite.com/thank-you.html"/> */}

                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="Name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="Email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="Phone" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="position">Applying for</label>
                        <select id="position" name="Applying for Position">
                            {allJobData.map(job => (
                                <option key={job.id} value={job.title}>{job.title}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="resume">Upload Resume (PDF, DOC, DOCX - Max 5MB)</label>
                        <input type="file" id="resume" name="attachment" accept=".pdf,.doc,.docx" required />
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="cover_letter">Cover Letter (Optional)</label>
                        <textarea id="cover_letter" name="Cover Letter" rows="5"></textarea>
                    </div>

                    <div className="form-submit-area">
                        <button type="submit" className="cta-button">Submit Application</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Careers;