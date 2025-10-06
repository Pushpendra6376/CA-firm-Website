import React, { useState } from 'react';
import '../styles/Compliance-calendar.css';
import dueDates from '../data/dueDates.js';

// --- Helper function to generate Google Calendar URL ---
const generateCalendarUrl = (event) => {
    if (!event.specificDate || !event.specificDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
        return '#';
    }
    const title = encodeURIComponent(`Compliance: ${event.description}`);
    const startDate = event.specificDate.replace(/-/g, '');
    const endDateObj = new Date(event.specificDate);
    endDateObj.setDate(endDateObj.getDate() + 1);
    const endDate = endDateObj.toISOString().slice(0, 10).replace(/-/g, '');
    const details = encodeURIComponent(`Compliance Activity: ${event.description}\nDue Date: ${event.dueDate}\nRemarks: ${event.remarks || 'N/A'}\n\nFor more details, please contact your Chartered Accountant.`);
    const location = encodeURIComponent('India');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
};

// --- Reusable Table Component ---
const ComplianceTable = ({ data, headers }) => (
    <div className="table-container">
        <table>
            <thead>
                <tr>
                    {headers.map(header => <th key={header.key}>{header.label}</th>)}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map(event => (
                    <tr key={event.id}>
                        {headers.map(header => <td key={`${event.id}-${header.key}`}>{event[header.key]}</td>)}
                        <td>
                            <a href={generateCalendarUrl(event)} target="_blank" rel="noopener noreferrer" className={`add-to-calendar-btn ${!event.specificDate ? 'disabled' : ''}`}>
                                Add to Calendar
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// --- Confirmation Modal Component ---
const ConfirmationModal = ({ isOpen, onConfirm, onCancel, sectionName, eventCount }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Confirm Action</h3>
                <p>Are you sure you want to add all {eventCount} {sectionName} due dates to your Google Calendar? This will open multiple tabs.</p>
                <div className="modal-actions">
                    <button onClick={onConfirm} className="btn-confirm">Yes, Add All</button>
                    <button onClick={onCancel} className="btn-cancel">Cancel</button>
                </div>
            </div>
        </div>
    );
};

// --- Main Calendar Component ---
function ComplianceCalendar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sectionToAdd, setSectionToAdd] = useState(null);

    const handleAddAllClick = (sectionName) => {
        setSectionToAdd(sectionName);
        setIsModalOpen(true);
    };

    const handleConfirmAddAll = () => {
        const eventsToAdd = dueDates.filter(event => event.section === sectionToAdd && event.specificDate);
        eventsToAdd.forEach(event => {
            window.open(generateCalendarUrl(event), '_blank');
        });
        setIsModalOpen(false);
        setSectionToAdd(null);
    };

    // Filter data into sections
    const gstMonthly = dueDates.filter(d => d.section === 'GST' && d.category === 'Monthly Filers');
    const gstQuarterly = dueDates.filter(d => d.section === 'GST' && d.category === 'Quarterly Filers');
    const gstAnnual = dueDates.filter(d => d.section === 'GST' && d.category === 'Annual Compliances');
    const itItr = dueDates.filter(d => d.section === 'Income Tax' && d.category === 'ITR Filing');
    const itTds = dueDates.filter(d => d.section === 'Income Tax' && d.category === 'TDS/TCS');
    const itAdvance = dueDates.filter(d => d.section === 'Income Tax' && d.category === 'Advance Tax');
    const clAnnual = dueDates.filter(d => d.section === 'Corporate Law' && d.category === 'Annual Filings');
    const clOther = dueDates.filter(d => d.section === 'Corporate Law' && d.category === 'Other Compliances');

    return (
        <div className="compliance-calendar-page">
            <ConfirmationModal 
                isOpen={isModalOpen}
                onConfirm={handleConfirmAddAll}
                onCancel={() => setIsModalOpen(false)}
                sectionName={sectionToAdd}
                eventCount={dueDates.filter(event => event.section === sectionToAdd && event.specificDate).length}
            />
            <div className="calendar-container">
                <h1 className="main-title">Tax & Corporate Law Due Date Calendar</h1>
                <p className="main-subtitle">
                    Dear Clients, this calendar provides a general guide to key GST, Income Tax, and Corporate Law due dates for FY 2024-25 & AY 2025-26. Please consult with us for personalized advice. Due dates are subject to change by government notifications.
                </p>

                {/* --- GST Section --- */}
                <section className="compliance-section gst">
                    <div className="section-header">
                        <h2>Goods and Services Tax (GST)</h2>
                        <button onClick={() => handleAddAllClick('GST')} className="add-all-btn">Add All GST Dates</button>
                    </div>
                    <div className="subsection">
                        <h3>A. Monthly Filers</h3>
                        <ComplianceTable data={gstMonthly} headers={[{key: 'description', label: 'Compliance Activity'}, {key: 'dueDate', label: 'Due Date'}]} />
                    </div>
                    <div className="subsection">
                        <h3>B. Quarterly Filers (QRMP Scheme)</h3>
                        <ComplianceTable data={gstQuarterly} headers={[{key: 'description', label: 'Compliance Activity'}, {key: 'dueDate', label: 'Due Date'}]} />
                    </div>
                    <div className="subsection">
                        <h3>C. Annual GST Compliances</h3>
                        <ComplianceTable data={gstAnnual} headers={[{key: 'description', label: 'Compliance Activity'}, {key: 'dueDate', label: 'Due Date'}]} />
                    </div>
                </section>
                
                {/* --- Income Tax Section --- */}
                <section className="compliance-section income-tax">
                    <div className="section-header">
                        <h2>II. Income Tax</h2>
                        <button onClick={() => handleAddAllClick('Income Tax')} className="add-all-btn">Add All Income Tax Dates</button>
                    </div>
                    <div className="subsection">
                        <h3>A. Income Tax Return (ITR) Filing (AY 2025-26)</h3>
                        <ComplianceTable data={itItr} headers={[{key: 'description', label: 'Category of Taxpayer'}, {key: 'dueDate', label: 'Due Date'}]} />
                    </div>
                    <div className="subsection">
                        <h3>B. TDS/TCS Compliance</h3>
                        <ComplianceTable data={itTds} headers={[{key: 'description', label: 'Compliance Activity'}, {key: 'dueDate', label: 'Due Date'}]} />
                    </div>
                    <div className="subsection">
                        <h3>C. Advance Tax Payment (FY 2025-26)</h3>
                        <ComplianceTable data={itAdvance} headers={[{key: 'description', label: 'Installment'}, {key: 'dueDate', label: 'Due Date'}]} />
                    </div>
                </section>

                {/* --- Corporate Law Section --- */}
                <section className="compliance-section corporate-law">
                    <div className="section-header">
                        <h2>III. Corporate Law</h2>
                        <button onClick={() => handleAddAllClick('Corporate Law')} className="add-all-btn">Add All Corporate Law Dates</button>
                    </div>
                    <div className="subsection">
                        <h3>A. Annual Filings (Financial Year 2024-25)</h3>
                        <ComplianceTable data={clAnnual} headers={[{key: 'description', label: 'Compliance Activity'}, {key: 'dueDate', label: 'Due Date'}]} />
                    </div>
                    <div className="subsection">
                        <h3>B. Other Important Corporate Compliances</h3>
                        <ComplianceTable data={clOther} headers={[{key: 'description', label: 'Compliance Activity'}, {key: 'dueDate', label: 'Periodicity'}]} />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ComplianceCalendar;