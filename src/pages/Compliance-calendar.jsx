import React, { useState } from 'react';
import '../styles/Compliance-calendar.css';

// --- Data for all due dates (extracted directly from your HTML file) ---
const dueDates = [
    // GST Monthly Filers
    { id: 'gst-monthly-gstr1', section: 'GST', category: 'Monthly Filers', description: 'GSTR-1 (Outward Supplies)', dueDate: '11th of every succeeding month', specificDate: '2025-10-11', remarks: 'For previous month. Non-editable GSTR-3B from July 1, 2025, requires GSTR-1 accuracy.' },
    { id: 'gst-monthly-gstr3b', section: 'GST', category: 'Monthly Filers', description: 'GSTR-3B (Summary Return & Payment)', dueDate: '20th of every succeeding month', specificDate: '2025-10-20', remarks: 'For previous month. Auto-populated GSTR-3B will be non-editable from July 1, 2025, emphasizing GSTR-1 accuracy.' },
    { id: 'gst-monthly-gstr7', section: 'GST', category: 'Monthly Filers', description: 'GSTR-7 (TDS Return)', dueDate: '10th of every succeeding month', specificDate: '2025-10-10', remarks: 'If applicable for government departments/notified entities.' },
    { id: 'gst-monthly-gstr8', section: 'GST', category: 'Monthly Filers', description: 'GSTR-8 (TCS Return)', dueDate: '10th of every succeeding month', specificDate: '2025-10-10', remarks: 'If applicable for E-commerce Operators.' },
    { id: 'gst-monthly-gstr6', section: 'GST', category: 'Monthly Filers', description: 'GSTR-6 (ISD Return)', dueDate: '13th of every succeeding month', specificDate: '2025-10-13', remarks: 'If applicable for Input Service Distributors.' },
    { id: 'gst-monthly-gstr5', section: 'GST', category: 'Monthly Filers', description: 'GSTR-5 (Non-Resident Taxable Person)', dueDate: 'Earlier of: 20 days after month end OR 7 days after validity of registration', specificDate: '2025-10-20', remarks: 'For non-resident taxable persons.' },
    { id: 'gst-monthly-gstr5a', section: 'GST', category: 'Monthly Filers', description: 'GSTR-5A (OIDAR Services)', dueDate: '20th of every succeeding month', specificDate: '2025-10-20', remarks: 'If applicable for OIDAR service providers.' },
    { id: 'gst-monthly-gstr11', section: 'GST', category: 'Monthly Filers', description: 'GSTR-11 (UIN Holders)', dueDate: '28th of every succeeding month', specificDate: '2025-10-28', remarks: 'If applicable for UIN holders furnishing details of inward supply.' },

    // GST Quarterly Filers (QRMP Scheme)
    { id: 'gst-qrmp-gstr1-q1', section: 'GST', category: 'Quarterly Filers', description: 'GSTR-1 (Outward Supplies) - April-June 2025', dueDate: 'July 13, 2025', specificDate: '2025-07-13', remarks: 'Optional: IFF can be used monthly by 13th for B2B invoices.' },
    { id: 'gst-qrmp-gstr1-q2', section: 'GST', category: 'Quarterly Filers', description: 'GSTR-1 (Outward Supplies) - July-Sept 2025', dueDate: 'October 13, 2025', specificDate: '2025-10-13', remarks: 'Optional: IFF can be used monthly by 13th for B2B invoices.' },
    { id: 'gst-qrmp-gstr1-q3', section: 'GST', category: 'Quarterly Filers', description: 'GSTR-1 (Outward Supplies) - Oct-Dec 2025', dueDate: 'January 13, 2026', specificDate: '2026-01-13', remarks: 'Optional: IFF can be used monthly by 13th for B2B invoices.' },
    { id: 'gst-qrmp-gstr1-q4', section: 'GST', category: 'Quarterly Filers', description: 'GSTR-1 (Outward Supplies) - Jan-March 2026', dueDate: 'April 13, 2026', specificDate: '2026-04-13', remarks: 'Optional: IFF can be used monthly by 13th for B2B invoices.' },

    { id: 'gst-qrmp-gstr3b-q1', section: 'GST', category: 'Quarterly Filers', description: 'GSTR-3B (Summary Return & Payment) - April-June 2025', dueDate: 'July 22 / 24, 2025', specificDate: '2025-07-22', remarks: 'Staggered due dates based on state (22nd for Category A, 24th for Category B).' },
    { id: 'gst-qrmp-gstr3b-q2', section: 'GST', category: 'Quarterly Filers', description: 'GSTR-3B (Summary Return & Payment) - July-Sept 2025', dueDate: 'October 22 / 24, 2025', specificDate: '2025-10-22', remarks: 'Staggered due dates based on state (22nd for Category A, 24th for Category B).' },
    { id: 'gst-qrmp-gstr3b-q3', section: 'GST', category: 'Quarterly Filers', description: 'GSTR-3B (Summary Return & Payment) - Oct-Dec 2025', dueDate: 'January 22 / 24, 2026', specificDate: '2026-01-22', remarks: 'Staggered due dates based on state (22nd for Category A, 24th for Category B).' },
    { id: 'gst-qrmp-gstr3b-q4', section: 'GST', category: 'Quarterly Filers', description: 'GSTR-3B (Summary Return & Payment) - Jan-March 2026', dueDate: 'April 22 / 24, 2026', specificDate: '2026-04-22', remarks: 'Staggered due dates based on state (22nd for Category A, 24th for Category B).' },

    { id: 'gst-qrmp-cmp08-q1', section: 'GST', category: 'Quarterly Filers', description: 'CMP-08 (Composition Scheme Payment) - April-June 2025', dueDate: 'July 18, 2025', specificDate: '2025-07-18', remarks: 'For taxpayers under the Composition Scheme.' },
    { id: 'gst-qrmp-cmp08-q2', section: 'GST', category: 'Quarterly Filers', description: 'CMP-08 (Composition Scheme Payment) - July-Sept 2025', dueDate: 'October 18, 2025', specificDate: '2025-10-18', remarks: 'For taxpayers under the Composition Scheme.' },
    { id: 'gst-qrmp-cmp08-q3', section: 'GST', category: 'Quarterly Filers', description: 'CMP-08 (Composition Scheme Payment) - Oct-Dec 2025', dueDate: 'January 18, 2026', specificDate: '2026-01-18', remarks: 'For taxpayers under the Composition Scheme.' },
    { id: 'gst-qrmp-cmp08-q4', section: 'GST', category: 'Quarterly Filers', description: 'CMP-08 (Composition Scheme Payment) - Jan-March 2026', dueDate: 'April 18, 2026', specificDate: '2026-04-18', remarks: 'For taxpayers under the Composition Scheme.' },

    { id: 'gst-qrmp-pmt06', section: 'GST', category: 'Quarterly Filers', description: 'PMT-06 (QRMP Monthly Tax Payment)', dueDate: '25th of the next month', specificDate: '2025-07-25', remarks: 'For monthly tax payment by QRMP taxpayers, for each of the first two months of the quarter.' },

                
    // GST Annual Compliances
    { id: 'gst-annual-gstr9', section: 'GST', category: 'Annual Compliances', description: 'GSTR-9 (Annual Return)', dueDate: 'December 31, 2025', specificDate: '2025-12-31', remarks: 'Mandatory for all regular taxpayers for FY 2024-25.' },
    { id: 'gst-annual-gstr9c', section: 'GST', category: 'Annual Compliances', description: 'GSTR-9C (Reconciliation Statement)', dueDate: 'December 31, 2025', specificDate: '2025-12-31', remarks: 'For FY 2024-25, if turnover > ₹5 Crore. Certified by CA/CMA.' },
    { id: 'gst-annual-gstr9b', section: 'GST', category: 'Annual Compliances', description: 'GSTR-9B (E-commerce Operators)', dueDate: 'December 31, 2025', specificDate: '2025-12-31', remarks: 'For FY 2024-25, filed by e-commerce operators.' },
    { id: 'gst-annual-itc04', section: 'GST', category: 'Annual Compliances', description: 'ITC-04 (Job Work)', dueDate: 'April 25, 2026', specificDate: '2026-04-25', remarks: 'For FY 2025-26. For taxpayers sending goods for job work.' },

    // Income Tax ITR Filing
    { id: 'it-itr-non-audit', section: 'Income Tax', category: 'ITR Filing', description: 'ITR Filing (Non-Audit Cases)', dueDate: 'September 15, 2025', specificDate: '2025-09-15', remarks: 'For Individuals, HUFs, AOPs, BOIs (not required to maintain audited books of accounts) for AY 2025-26 / FY 2024-25.' },
    { id: 'it-itr-audit', section: 'Income Tax', category: 'ITR Filing', description: 'ITR Filing (Audit Cases)', dueDate: 'October 31, 2025', specificDate: '2025-10-31', remarks: 'For Businesses/Professionals subject to Tax Audit (u/s 44AB) for AY 2025-26 / FY 2024-25.' },
    { id: 'it-itr-tp', section: 'Income Tax', category: 'ITR Filing', description: 'ITR Filing (Transfer Pricing Cases)', dueDate: 'November 30, 2025', specificDate: '2025-11-30', remarks: 'For Businesses involved in international or specified domestic transactions for AY 2025-26 / FY 2024-25.' },
    { id: 'it-itr-belated-revised', section: 'Income Tax', category: 'ITR Filing', description: 'Filing of Belated / Revised Return', dueDate: 'December 31, 2025', specificDate: '2025-12-31', remarks: 'For AY 2025-26 / FY 2024-25. Can be filed with late fees/interest if original missed or for corrections.' },
    { id: 'it-itr-updated', section: 'Income Tax', category: 'ITR Filing', description: 'Filing of Updated Return (u/s 139(8A))', dueDate: 'March 31, 2028', specificDate: '2028-03-31', remarks: 'For AY 2025-26 / FY 2024-25. Within 24 months from end of relevant AY, with additional tax.' },

    // Income Tax TDS/TCS Compliance
    { id: 'it-tds-tcs-deposit', section: 'Income Tax', category: 'TDS/TCS', description: 'Deposit of TDS/TCS', dueDate: '7th of every succeeding month', specificDate: '2025-10-07', remarks: 'For previous month. E.g., for September 2025, due Oct 7, 2025.' },
    { id: 'it-tds-certificates', section: 'Income Tax', category: 'TDS/TCS', description: 'Issuance of TDS Certificates (Form 16B, 16C, 16D)', dueDate: '15th of next month', specificDate: '2025-07-15', remarks: 'For TDS deducted in previous month (e.g., May 2025 deductions due July 15, 2025).' },
    { id: 'it-15g-15h', section: 'Income Tax', category: 'TDS/TCS', description: 'Uploading Form 15G/15H Declarations', dueDate: 'July 15, 2025', specificDate: '2025-07-15', remarks: 'For declarations received during April-June 2025 quarter.' },
    { id: 'it-tcs-return-q2', section: 'Income Tax', category: 'TDS/TCS', description: 'Quarterly TCS Return (Form 27EQ) - Q2', dueDate: 'October 15, 2025', specificDate: '2025-10-15', remarks: 'For July-Sept 2025 quarter.' },
    { id: 'it-tds-return-q2', section: 'Income Tax', category: 'TDS/TCS', description: 'Quarterly TDS Return (Forms 24Q, 26Q, 27Q) - Q2', dueDate: 'October 31, 2025', specificDate: '2025-10-31', remarks: 'For July-Sept 2025 quarter.' },
    { id: 'it-tcs-certificate-q2', section: 'Income Tax', category: 'TDS/TCS', description: 'Issuance of TCS Certificate (Form 27D) - Q2', dueDate: 'October 30, 2025', specificDate: '2025-10-30', remarks: 'For July-Sept 2025 quarter.' },
    { id: 'it-form16', section: 'Income Tax', category: 'TDS/TCS', description: 'Issuance of Form 16 (Salary TDS Certificate)', dueDate: 'June 15, 2026', specificDate: '2026-06-15', remarks: 'For FY 2025-26.' },
    { id: 'it-form16a', section: 'Income Tax', category: 'TDS/TCS', description: 'Issuance of Form 16A (Non-Salary TDS Certificate)', dueDate: 'May 31, 2026', specificDate: '2026-05-31', remarks: 'For FY 2025-26.' },

    // Income Tax Advance Tax
    { id: 'it-advance-tax-q1', section: 'Income Tax', category: 'Advance Tax', description: 'First Installment of Advance Tax', dueDate: 'June 15, 2025', specificDate: '2025-06-15', remarks: '15% of tax liability for FY 2025-26 / AY 2026-27.' },
    { id: 'it-advance-tax-q2', section: 'Income Tax', category: 'Advance Tax', description: 'Second Installment of Advance Tax', dueDate: 'September 15, 2025', specificDate: '2025-09-15', remarks: '45% of tax liability for FY 2025-26 / AY 2026-27.' },
    { id: 'it-advance-tax-q3', section: 'Income Tax', category: 'Advance Tax', description: 'Third Installment of Advance Tax', dueDate: 'December 15, 2025', specificDate: '2025-12-15', remarks: '75% of tax liability for FY 2025-26 / AY 2026-27.' },
    { id: 'it-advance-tax-q4', section: 'Income Tax', category: 'Advance Tax', description: 'Fourth Installment of Advance Tax / Presumptive Tax', dueDate: 'March 15, 2026', specificDate: '2026-03-15', remarks: '100% of tax liability for FY 2025-26 / AY 2026-27.' },

    // Corporate Law Annual Filings
    { id: 'cl-aoc4', section: 'Corporate Law', category: 'Annual Filings', description: 'Form AOC-4 (Financial Statements)', dueDate: 'Within 30 days of AGM', specificDate: '2025-10-30', remarks: 'For FY 2024-25. E.g., if AGM is Sept 30, 2025, due Oct 30, 2025.' },
    { id: 'cl-mgt7', section: 'Corporate Law', category: 'Annual Filings', description: 'Form MGT-7/7A (Annual Return)', dueDate: 'Within 60 days of AGM', specificDate: '2025-11-29', remarks: 'For FY 2024-25. E.g., if AGM is Sept 30, 2025, due Nov 29, 2025.' },
    { id: 'cl-llp11', section: 'Corporate Law', category: 'Annual Filings', description: 'LLP Form 11 (Annual Return)', dueDate: 'May 30, 2025', specificDate: '2025-05-30', remarks: 'For FY 2024-25.' },
    { id: 'cl-dpt3', section: 'Corporate Law', category: 'Annual Filings', description: 'Form DPT-3 (Return of Deposits)', dueDate: 'June 30, 2025', specificDate: '2025-06-30', remarks: 'For FY 2024-25. All companies (except NBFCs).' },
    { id: 'cl-dir3kyc', section: 'Corporate Law', category: 'Annual Filings', description: 'Form DIR-3 KYC / Web KYC', dueDate: 'September 30, 2025', specificDate: '2025-09-30', remarks: 'Annual KYC for all individuals holding a DIN as of March 31, 2025.' },
    { id: 'cl-pas6-h2', section: 'Corporate Law', category: 'Annual Filings', description: 'Form PAS-6 (Share Capital Reconciliation) - H2 FY24-25', dueDate: 'May 30, 2025', specificDate: '2025-05-30', remarks: 'For Oct 2024-Mar 2025. For unlisted public companies, Section 8, and private companies (demat mandatory).' },
    { id: 'cl-pas6-h1', section: 'Corporate Law', category: 'Annual Filings', description: 'Form PAS-6 (Share Capital Reconciliation) - H1 FY25-26', dueDate: 'November 29, 2025', specificDate: '2025-11-29', remarks: 'For Apr 2025-Sep 2025. For unlisted public companies.' },
    { id: 'cl-fc4', section: 'Corporate Law', category: 'Annual Filings', description: 'Form FC-4 (Annual Return of Foreign Co.)', dueDate: 'May 30, 2025', specificDate: '2025-05-30', remarks: 'For FY 2024-25.' },
    { id: 'cl-msme1-h2', section: 'Corporate Law', category: 'Annual Filings', description: 'Form MSME-1 (Outstanding Dues to MSMEs) - H2 FY24-25', dueDate: 'April 30, 2025', specificDate: '2025-04-30', remarks: 'For Oct 2024-Mar 2025. Half-yearly return.' },
    { id: 'cl-msme1-h1', section: 'Corporate Law', category: 'Annual Filings', description: 'Form MSME-1 (Outstanding Dues to MSMEs) - H1 FY25-26', dueDate: 'October 31, 2025', specificDate: '2025-10-31', remarks: 'For Apr 2025-Sep 2025. Half-yearly return.' },

    // Corporate Law Other Compliances
    { id: 'cl-board-meetings', section: 'Corporate Law', category: 'Other Compliances', description: 'Board Meetings', dueDate: 'Ongoing (At least 4 per year)', remarks: 'Minimum 4 board meetings in a calendar year, one every quarter.' },
    { id: 'cl-agm', section: 'Corporate Law', category: 'Other Compliances', description: 'Annual General Meeting (AGM)', dueDate: 'September 30, 2025', specificDate: '2025-09-30', remarks: 'Within 6 months of the financial year end for FY 2024-25.' },
    { id: 'cl-statutory-audit', section: 'Corporate Law', category: 'Other Compliances', description: 'Statutory Audit Report', dueDate: 'Before AGM', specificDate: '2025-09-20', remarks: 'Auditor\'s report needs to be finalized before AGM.' },
    { id: 'cl-registers', section: 'Corporate Law', category: 'Other Compliances', description: 'Maintenance of Statutory Registers', dueDate: 'Ongoing', specificDate: '2025-07-31', remarks: 'Companies must regularly maintain various statutory registers.' },
    { id: 'cl-csr', section: 'Corporate Law', category: 'Other Compliances', description: 'CSR Committee Meeting & Report', dueDate: 'As per internal policy', specificDate: '2025-09-30', remarks: 'For companies meeting CSR criteria. Report is part of Board\'s Report.' },
    { id: 'cl-fema-fla', section: 'Corporate Law', category: 'Other Compliances', description: 'FEMA Compliances (e.g., FLA Return)', dueDate: 'July 15, 2025', specificDate: '2025-07-15', remarks: 'Depending on foreign investments/transactions.' },
];


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

