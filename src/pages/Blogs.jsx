import React, {useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import heroImage from '../assets/Blogs-header.png';
import '../styles/Blogs.css';


// --- Article Modal Component ---
const ArticleModal = ({ post, onClose }) => {
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
                <img src={post.image} alt={post.title} className="modal-image" />
                <h2>{post.title}</h2>
                <p className="modal-meta">{post.date} • {post.author}</p>
                <div className="modal-body" dangerouslySetInnerHTML={{ __html: post.fullContent }}></div>
            </div>
        </div>
    );
};


// --- Blog Data with FULL Expanded Content ---
const allPosts = [
    { 
        title: "Importance of Proper Tax Planning for Individuals & Businesses", 
        date: "September 15, 2025", 
        author: "CA Rajesh Kandoi", 
        excerpt: "Tax planning helps reduce liabilities while ensuring compliance with the Income Tax Act...", 
        category: "Taxation", 
        featured: true, 
        image: "https://placehold.co/800x400/a3b1c6/2d3748?text=Tax+Planning",
        fullContent: `<p>Effective tax planning is not just about saving money at the end of the financial year; it's a strategic, year-round process that ensures compliance with the law, maximizes financial efficiency, and helps you make better-informed decisions for your future. For both individuals and businesses, understanding the nuances of the Income Tax Act is the first step towards building a robust financial foundation. It involves much more than simply filing returns on time; it's about structuring your investments, expenses, and income in the most tax-efficient manner possible.</p><p>For businesses, particularly SMEs and startups, strategic tax planning is a critical component of financial health. It directly impacts cash flow, profitability, and long-term sustainability. Key strategies include choosing the right business structure (e.g., sole proprietorship, partnership, LLP, or private limited company), as each has different tax implications. Furthermore, businesses can leverage deductions for operational expenses, claim depreciation on assets, and take advantage of government schemes and incentives designed for specific industries. A common oversight is the failure to properly manage Goods and Services Tax (GST) compliance, which can lead to significant penalties. Proactive GST planning, including timely filing and accurate invoice matching, is essential.</p><p>For individuals, tax planning revolves around optimizing deductions under various sections of the Income Tax Act, such as Section 80C (for investments in PPF, ELSS, life insurance), 80D (for health insurance premiums), and HRA (House Rent Allowance). It's crucial to look beyond these common options and explore other avenues like contributions to the National Pension System (NPS) or tax-loss harvesting in stock market investments. A well-structured plan not only reduces your tax liability but also aligns with your long-term financial goals, such as retirement planning, wealth creation, or funding your children's education. By taking a proactive and informed approach, tax planning transforms from a daunting annual chore into a powerful tool for financial empowerment.</p>`
    },
    { 
        title: "Common GST Filing Mistakes and How to Avoid Them", 
        date: "September 10, 2025", 
        author: "Team RKA", 
        excerpt: "Late filing, mismatched invoices, or incorrect HSN codes are some of the most common GST mistakes...", 
        category: "GST & Compliance", 
        image: "https://placehold.co/400x300/e2e8f0/2d3748?text=GST", 
        fullContent: `<p>The introduction of the Goods and Services Tax (GST) was a landmark reform for the Indian economy, but navigating its compliance requirements can be challenging. Many businesses, especially small and medium-sized enterprises (SMEs), inadvertently make errors that can lead to penalties, loss of input tax credit (ITC), and legal complications. One of the most frequent mistakes is the late filing of GST returns. Procrastination or lack of organization often leads to missing deadlines for GSTR-1 and GSTR-3B, attracting late fees and interest. To avoid this, businesses should maintain a strict compliance calendar and utilize automated reminders. Another critical error is invoice mismatching between GSTR-1 and GSTR-2A/2B. This discrepancy often arises from data entry errors or miscommunication with suppliers, and it can result in the denial of ITC. Implementing a robust invoice reconciliation process, where purchase records are regularly matched with supplier filings, is crucial to prevent this issue. Using accounting software with built-in reconciliation features can automate and streamline this process significantly, reducing the chances of human error and ensuring that you claim the full ITC you are entitled to. Adopting these best practices not only ensures compliance but also improves your business's financial discipline and efficiency.</p>` 
    },
    { 
        title: "Why Auditing is Essential for Startups and SMEs", 
        date: "September 5, 2025", 
        author: "CA Rajesh Kandoi", 
        excerpt: "Startups often ignore audits, but they provide credibility to investors and financial institutions...", 
        category: "Audit & Assurance", 
        image: "https://placehold.co/400x300/a3b1c6/2d3748?text=Auditing", 
        fullContent: `<p>For many startups and Small and Medium Enterprises (SMEs), the idea of a financial audit can seem like a daunting and unnecessary expense. However, viewing an audit merely as a compliance requirement is a missed opportunity. A thorough audit is one of the most powerful tools a growing business can have, providing immense value far beyond simply checking the books. Firstly, audited financial statements lend significant credibility to your business. When you approach investors for funding, apply for a bank loan, or enter into a partnership, having financials verified by an independent third party provides a level of trust and assurance that self-prepared statements cannot. It signals that your company is transparent, well-managed, and serious about its financial governance. This credibility can be the deciding factor in securing the capital needed for expansion. Secondly, an audit provides invaluable insights into your internal operations. Auditors don't just look for errors; they assess your internal controls, risk management processes, and operational efficiencies. They can identify weaknesses you might have overlooked, such as inadequate inventory management, vulnerabilities to fraud, or inefficient cash flow processes. The recommendations from an audit report can help you strengthen your business from the inside out, leading to cost savings, reduced risk, and improved profitability. In essence, an audit acts as a comprehensive health check for your company, providing a clear roadmap for financial improvement and sustainable growth.</p>` 
    },
    { 
        title: "Benefits of Outsourcing Accounting & Compliance Services", 
        date: "August 28, 2025", 
        author: "Team RKA", 
        excerpt: "Many SMEs waste resources managing accounts internally. Outsourcing ensures professional accuracy...", 
        category: "Business Advisory", 
        image: "https://placehold.co/400x300/e2e8f0/2d3748?text=Outsourcing", 
        fullContent: `<p>In today's competitive business landscape, efficiency and expertise are paramount. For many small and medium-sized enterprises (SMEs), managing in-house accounting and compliance can be a significant drain on resources, both in terms of time and money. This is where outsourcing to a specialized firm offers a powerful strategic advantage. The most immediate benefit is cost-effectiveness. Hiring, training, and retaining a full-time accounting team involves substantial overheads, including salaries, benefits, and infrastructure. Outsourcing converts these fixed costs into a variable, predictable expense, often at a fraction of the cost. More importantly, it provides access to a pool of specialized knowledge. A professional firm brings a team of experts in taxation, GST, payroll, and corporate law—expertise that is difficult for a single in-house employee to match. This ensures not only accuracy in your financial records but also guarantees compliance with the latest regulations, minimizing the risk of costly penalties. Furthermore, outsourcing frees up your valuable time and internal resources. By entrusting your financial operations to experts, you and your team can focus on your core business activities—innovation, customer service, and strategic growth. This shift in focus can be a game-changer, allowing your business to scale more efficiently and confidently, knowing that the financial backbone is in capable hands.</p>` 
    },
    { 
        title: "Latest Income Tax Updates for FY 2025-26", 
        date: "August 20, 2025", 
        author: "CA Rajesh Kandoi", 
        excerpt: "Every financial year brings new updates in income tax rules. This blog highlights recent changes...", 
        category: "Taxation", 
        image: "https://placehold.co/400x300/a3b1c6/2d3748?text=Tax+Updates", 
        fullContent: `<p>Staying abreast of the latest income tax regulations is crucial for every taxpayer. For the Financial Year 2025-26, several key amendments have been introduced that will impact both individuals and businesses. One of the most discussed changes is the rationalization of the new tax regime. While the slab rates remain unchanged, the standard deduction of ₹50,000 has been extended to this regime, making it a more attractive option for salaried individuals who do not have significant investments for deductions under the old regime. For businesses, there's a renewed focus on digital transactions and compliance. The threshold for mandatory e-invoicing under GST has been further lowered, bringing more small businesses into the digital fold. On the direct tax front, there are updates related to Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) provisions, particularly for e-commerce operators and on foreign remittances under the Liberalised Remittance Scheme (LRS). Additionally, there are clarifications on the taxation of capital gains from certain debt mutual funds, which taxpayers need to factor into their investment strategies. It is essential to consult with a tax advisor to understand how these specific changes affect your financial situation and to ensure you remain fully compliant while optimizing your tax liability for the year.</p>` 
    },
    { 
        title: "The Role of Internal Audit in Risk Management", 
        date: "August 15, 2025", 
        author: "Team RKA", 
        excerpt: "Internal audits go beyond compliance — they help organizations identify risks, streamline operations...", 
        category: "Audit & Assurance", 
        image: "https://placehold.co/400x300/e2e8f0/2d3748?text=Internal+Audit", 
        fullContent: `<p>An internal audit function is a cornerstone of effective corporate governance and a proactive tool for robust risk management. Often misunderstood as a mere policing activity, its true role is that of a strategic partner to the management. Unlike statutory audits, which focus on historical financial data and compliance, internal audits take a forward-looking, holistic view of an organization's operations. The primary objective is to identify and assess risks across all business functions—be it financial, operational, or technological. By systematically evaluating the effectiveness of internal controls, an internal audit helps an organization protect its assets, ensure the accuracy of its records, and promote operational efficiency. For instance, an internal audit might uncover inefficiencies in the supply chain, vulnerabilities in the IT systems, or gaps in regulatory compliance before they escalate into major problems. This proactive identification of risks allows management to implement corrective actions promptly, mitigating potential losses and reputational damage. Furthermore, the insights and recommendations provided by internal auditors help streamline processes, reduce costs, and improve overall business performance. In an increasingly complex and volatile business environment, a strong internal audit function is not a luxury but a necessity for sustainable growth and long-term success, providing the board and management with the confidence to navigate challenges effectively.</p>` 
    },
    { 
        title: "How to Prepare for a Tax Audit in India", 
        date: "August 8, 2025", 
        author: "CA Rajesh Kandoi", 
        excerpt: "Tax audits can be stressful without proper preparation. This article guides you through documentation...", 
        category: "Taxation", 
        image: "https://placehold.co/400x300/a3b1c6/2d3748?text=Tax+Audit", 
        fullContent: `<p>Receiving a notice for a tax audit from the Income Tax Department can be a stressful experience for any taxpayer. However, with systematic preparation and a clear understanding of the process, it can be managed smoothly and efficiently. The first and most critical step is to organize your documentation meticulously. This includes gathering all your financial statements (Profit & Loss Account, Balance Sheet), bank statements for all accounts, books of accounts (ledgers, cash book), and supporting documents like invoices, bills, and receipts for all major expenses claimed. Ensure that your TDS certificates (Form 16/16A) and Form 26AS are reconciled, and any discrepancies are explained. The second step is to conduct a self-review before the official audit begins. Go through your tax return with a fine-toothed comb, paying special attention to areas that are often scrutinized, such as high-value transactions, large refund claims, or significant changes in income or expenses compared to previous years. This self-assessment helps you anticipate the questions the tax officer might ask and prepare logical explanations backed by evidence. Finally, it is highly advisable to seek professional assistance from a Chartered Accountant. A CA can act as your authorized representative, help you prepare the necessary submissions in the required format, and guide you through the legal and procedural aspects of the audit. Their expertise can be invaluable in presenting your case clearly and effectively, ensuring a fair and compliant outcome.</p>` 
    },
    { 
        title: "Digital Transformation in Accounting & Finance", 
        date: "August 1, 2025", 
        author: "Team RKA", 
        excerpt: "From cloud-based accounting tools to AI-powered bookkeeping, technology is transforming the finance industry...", 
        category: "Business Advisory", 
        image: "https://placehold.co/400x300/e2e8f0/2d3748?text=Tech", 
        fullContent: `<p>The accounting and finance industry is undergoing a profound digital transformation, moving away from manual ledgers and spreadsheets towards automated, intelligent systems. This shift is not just about adopting new technology; it's about fundamentally changing how financial data is captured, processed, and analyzed. Cloud-based accounting software like Zoho Books, QuickBooks, and TallyPrime on Cloud are at the forefront of this revolution. They offer businesses real-time access to their financial data from anywhere, facilitate seamless collaboration between teams, and automate routine tasks like invoicing and bank reconciliation. This automation frees up accounting professionals from mundane data entry, allowing them to focus on higher-value activities such as strategic analysis and business advisory. Another significant trend is the rise of Artificial Intelligence (AI) and Machine Learning (ML). AI-powered tools can now automate bookkeeping, categorize expenses with high accuracy, and even detect anomalies and potential fraud in financial transactions. Furthermore, data analytics tools are empowering businesses to derive actionable insights from their financial data. Instead of just looking at historical performance, companies can now use predictive analytics to forecast cash flow, model different business scenarios, and make more informed strategic decisions. Embracing this digital transformation is no longer optional; it is essential for businesses that want to enhance efficiency, improve accuracy, and gain a competitive edge in a data-driven world.</p>` 
    },
    { 
        title: "Common Payroll Compliance Challenges for Businesses", 
        date: "July 28, 2025", 
        author: "Team RKA", 
        excerpt: "Managing payroll involves TDS, PF, ESI, and other statutory obligations. We explain common payroll compliance errors...", 
        category: "GST & Compliance", 
        image: "https://placehold.co/400x300/a3b1c6/2d3748?text=Payroll", 
        fullContent: `<p>Payroll management is one of the most critical yet complex functions for any business. It goes far beyond simply calculating and disbursing salaries; it involves a web of statutory obligations that demand precision and timeliness. A common challenge businesses face is the accurate calculation and deduction of Tax Deducted at Source (TDS) from employees' salaries. This requires a thorough understanding of investment declarations, applicable tax slabs, and exemptions, and any miscalculation can lead to incorrect tax filings and notices from the tax department. Another major area of concern is compliance with social security contributions, namely Provident Fund (PF) and Employee State Insurance (ESI). Businesses must ensure correct calculation of both employee and employer contributions, timely deposit of these funds, and filing of monthly and annual returns. Failure to do so can attract hefty penalties and interest. Furthermore, different states have varying regulations for Professional Tax, which adds another layer of complexity. Keeping track of these multiple deadlines, calculation methods, and filing procedures can be overwhelming, especially for SMEs without a dedicated HR or finance team. Many businesses also struggle with maintaining accurate records and generating the necessary reports for audits and employee queries. Automating the payroll process using reliable software or outsourcing it to a professional firm can help mitigate these challenges, ensuring accuracy, compliance, and peace of mind.</p>` 
    },
    { 
        title: "Understanding Corporate Tax in India: A Guide for Businesses", 
        date: "July 20, 2025", 
        author: "CA Rajesh Kandoi", 
        excerpt: "Corporate taxation is complex, with multiple exemptions, deductions, and MAT provisions...", 
        category: "Taxation", 
        image: "https://placehold.co/400x300/e2e8f0/2d3748?text=Corporate+Tax", 
        fullContent: `<p>Corporate taxation in India is a dynamic and multifaceted domain that every business must navigate carefully to ensure compliance and optimize financial health. The primary levy is the corporate income tax, the rate of which depends on the company's turnover and whether it opts for the new concessional tax regime. Domestic companies with a turnover up to a specified limit enjoy a lower tax rate, while larger corporations are taxed at a higher rate. A key aspect of corporate tax is the concept of Minimum Alternate Tax (MAT). MAT is levied on companies that have high book profits but low taxable income due to various exemptions and deductions. It ensures that all profitable companies pay a minimum amount of tax to the government. Another critical area is the array of deductions and exemptions available under the Income Tax Act. These are designed to promote investment in specific sectors and activities. For example, deductions are available for capital expenditure on research and development, investments in new plants and machinery, and profits from certain types of businesses like startups recognized under the Startup India initiative. Understanding and correctly claiming these deductions can significantly reduce a company's tax liability. Additionally, businesses must be mindful of compliance requirements such as advance tax payments, TDS/TCS provisions, and the timely filing of annual income tax returns. Given the complexity, it is imperative for businesses to engage in proactive tax planning and seek professional guidance to navigate the corporate tax landscape effectively.</p>` 
    },
    { 
        title: "The Importance of Compliance in Company Formation", 
        date: "July 12, 2025", 
        author: "Team RKA", 
        excerpt: "Starting a company is not just about registration — it requires ongoing compliance with MCA, GST...", 
        category: "Startup Guides", 
        image: "https://placehold.co/400x300/a3b1c6/2d3748?text=Compliance", 
        fullContent: `<p>For an entrepreneur, the journey of starting a new company is exhilarating, but it's crucial to understand that company formation is not a one-time event of registration. It's the beginning of a continuous journey of legal and financial compliance. Right from the moment a Company Incorporation Number (CIN) is issued by the Ministry of Corporate Affairs (MCA), the company becomes a separate legal entity with a set of mandatory obligations. One of the first post-incorporation steps is to hold the first board meeting within 30 days and to file for commencement of business. Subsequently, the company must adhere to a strict calendar of annual filings with the Registrar of Companies (ROC), which includes filing annual returns and financial statements. Failure to comply can lead to heavy penalties and even disqualification of directors. Beyond MCA regulations, a new company must immediately register for other applicable licenses and taxes, such as GST registration if its turnover is expected to cross the threshold, and Professional Tax registration. Maintaining statutory registers, minutes of board meetings, and proper books of accounts are also non-negotiable legal requirements. For startups seeking investment, a clean compliance record is a prerequisite. Investors conduct thorough due diligence, and any non-compliance can be a major red flag, potentially jeopardizing funding opportunities. Therefore, building a strong foundation of compliance from day one is not just about avoiding penalties; it's about building credibility, ensuring smooth operations, and paving the way for future growth.</p>` 
    },
    { 
        title: "Audit vs. Assurance: What’s the Difference?", 
        date: "July 5, 2025", 
        author: "CA Rajesh Kandoi", 
        excerpt: "While both audit and assurance improve financial credibility, they are not the same...", 
        category: "Audit & Assurance", 
        image: "https://placehold.co/400x300/e2e8f0/2d3748?text=Audit+vs+Assurance", 
        fullContent: `<p>In the world of finance and accounting, the terms "audit" and "assurance" are often used interchangeably, but they represent distinct services with different scopes and objectives. Understanding this difference is crucial for business owners and stakeholders. An audit is a specific, highly structured type of assurance engagement. Its primary purpose is to provide an independent opinion on the fairness and reliability of a company's historical financial statements. The auditor examines financial records, transactions, and internal controls based on established standards (like the Standards on Auditing) to conclude whether the financial statements are free from material misstatement. The end product of a statutory audit is a formal audit report, which provides a high level of confidence to investors, lenders, and regulators. Assurance, on the other hand, is a much broader concept. An assurance service is any independent professional service that improves the quality of information for decision-makers. While an audit is a form of assurance, not all assurance services are audits. Assurance engagements can cover a wide range of subject matters beyond historical financial data. For example, a practitioner could provide assurance on a company's cybersecurity controls, its compliance with environmental regulations, or the efficiency of its supply chain processes. The level of confidence provided in an assurance report can also vary, from a high level (like in an audit) to a more moderate level of assurance. In essence, you can think of audit as a specialized subset, while assurance is the overarching category of services designed to enhance trust and confidence in information.</p>` 
    },
    { 
        title: "Navigating International Taxation for Businesses", 
        date: "June 28, 2025", 
        author: "Team RKA", 
        excerpt: "With globalization, cross-border taxation has become crucial. We explain DTAA, transfer pricing...", 
        category: "Taxation", 
        image: "https://placehold.co/400x300/a3b1c6/2d3748?text=Intl.+Tax", 
        fullContent: `<p>As businesses expand their operations globally, they enter the complex realm of international taxation. This field of tax law governs how transactions between different countries are taxed, and navigating it is essential to avoid double taxation and ensure compliance with multiple jurisdictions. A cornerstone of international tax is the Double Taxation Avoidance Agreement (DTAA). A DTAA is a tax treaty signed between two or more countries to prevent the same income from being taxed twice. It lays out the rules for allocating taxing rights between the source country (where the income is generated) and the residence country (where the taxpayer resides). Understanding the provisions of the relevant DTAA is the first step for any business with cross-border dealings. Another critical aspect is Transfer Pricing. This pertains to the pricing of transactions between related parties, such as two subsidiaries of the same multinational company. Tax authorities worldwide are vigilant about transfer pricing to ensure that companies do not manipulate prices to shift profits to low-tax jurisdictions. Businesses must ensure that their inter-company transactions are conducted at an "arm's length price"—the price that would be charged between unrelated parties. This requires maintaining detailed documentation and conducting benchmarking studies. Furthermore, the rise of the digital economy has introduced new challenges like the equalization levy or "Google tax" on digital services provided by non-resident companies. Navigating this landscape requires expert guidance to structure international operations in a tax-efficient and compliant manner.</p>` 
    },
    { 
        title: "Why Every Business Needs a CFO Advisory Service", 
        date: "June 20, 2025", 
        author: "CA Rajesh Kandoi", 
        excerpt: "Not every SME can afford a full-time CFO, but advisory services can provide financial strategy...", 
        category: "Business Advisory", 
        image: "https://placehold.co/400x300/e2e8f0/2d3748?text=CFO+Advisory", 
        fullContent: `<p>A Chief Financial Officer (CFO) plays a pivotal role in a company's success, providing high-level financial strategy, oversight, and foresight. However, for most startups and small to medium-sized enterprises (SMEs), hiring a full-time, experienced CFO is a significant financial commitment that they simply cannot afford. This is where CFO advisory services, often provided by CA firms, bridge a critical gap. A CFO advisory service offers businesses access to top-tier financial expertise on a flexible, part-time, or project basis. Instead of just focusing on historical accounting and compliance, a CFO advisor acts as a strategic partner to the business owner. They help in crucial areas such as financial planning and analysis (FP&A), budgeting, and forecasting, creating a clear financial roadmap for the company's growth. They can develop key performance indicators (KPIs) and Management Information System (MIS) reports that provide actionable insights into the business's performance, helping owners make data-driven decisions. Furthermore, CFO advisors play a vital role in cash flow management, identifying potential shortfalls and optimizing working capital. They can also assist with fundraising activities, preparing financial models and pitch decks for investors, and navigating the complexities of due diligence. By leveraging CFO advisory services, SMEs can gain the strategic financial direction needed to scale their business, manage risks, and improve profitability, all without the overhead of a full-time executive.</p>` 
    },
    { 
        title: "The Future of GST in India: What Businesses Should Expect", 
        date: "June 10, 2025", 
        author: "Team RKA", 
        excerpt: "GST continues to evolve with updates in e-invoicing, compliance, and reporting...", 
        category: "GST & Compliance", 
        image: "https://placehold.co/400x300/a3b1c6/2d3748?text=Future+of+GST", 
        fullContent: `<p>Since its implementation, the Goods and Services Tax (GST) regime in India has been in a constant state of evolution, and this trend is set to continue. Businesses should prepare for several key developments that will shape the future of GST compliance. One of the most significant ongoing changes is the expansion and refinement of the e-invoicing system. The government is progressively lowering the turnover threshold for mandatory e-invoicing, with the ultimate goal of covering almost all B2B transactions. This move aims to enhance tax transparency, reduce tax evasion, and streamline the process of claiming Input Tax Credit (ITC). Businesses will need to ensure their accounting and ERP systems are fully integrated to handle real-time invoice reporting. Another area of focus will be the use of data analytics and artificial intelligence (AI) by the tax authorities. The GST Network (GSTN) collects a vast amount of data, and the government is increasingly using advanced analytics to identify non-compliant taxpayers, fraudulent ITC claims, and patterns of tax evasion. This means businesses must maintain impeccable records and ensure their filings are accurate and consistent across all returns. There is also ongoing discussion about rationalizing the GST slab rates and bringing currently excluded items like petroleum and electricity under the GST ambit. While these are long-term prospects, businesses should stay informed about these potential structural changes. The future of GST points towards greater digitization, stricter compliance monitoring, and a more integrated tax ecosystem, making proactive and technology-driven compliance more important than ever.</p>` 
    },
];

const Blogs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedPost, setSelectedPost] = useState(null);

    const categories = useMemo(() => ["All", ...new Set(allPosts.map(p => p.category))], []);
    const popularPosts = useMemo(() => allPosts.slice(1, 6), []);
    const recentPosts = useMemo(() => allPosts.slice(0, 3), []);

    const filteredPosts = useMemo(() => {
        return allPosts.filter(post => {
            const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, activeCategory]);

    const featuredPost = allPosts.find(p => p.featured);

    const handleSidebarLinkClick = (postTitle) => {
        setActiveCategory('All');
        setSearchTerm(postTitle);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="blog-page">
            {selectedPost && <ArticleModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
            
            <section className="blog-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="blog-hero-overlay">
                    <div className="blog-hero-content">
                        <h1>Our Insights & Articles</h1>
                        <p className="tagline">Stay updated with taxation, finance, auditing, and compliance trends curated by experts at RKA & Associates.</p>
                        <p className="banner-line">“Knowledge that empowers your business decisions.”</p>
                    </div>
                </div>
            </section>

            <div className="blog-container">
                <main className="blog-main-content">
                    <div className="blog-filters">
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Search by title, keyword, or category..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button><FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                        <div className="category-filters">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={activeCategory === category ? 'active' : ''}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {featuredPost && activeCategory === 'All' && searchTerm === '' && (
                         <section className="featured-blog-section">
                            <h2>Featured Article</h2>
                            <div className="featured-blog-card">
                                <img src={featuredPost.image} alt={featuredPost.title} className="featured-blog-image"/>
                                <div className="featured-blog-content">
                                    <h3>{featuredPost.title}</h3>
                                    <p>{featuredPost.excerpt}</p>
                                    <button onClick={() => setSelectedPost(featuredPost)} className="read-more-btn">
                                        Read Full Article <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </div>
                            </div>
                        </section>
                    )}

                    <section className="blog-grid-section">
                        <h2>{searchTerm ? 'Search Results' : (activeCategory === 'All' ? 'All Articles' : `${activeCategory} Articles`)}</h2>
                        <div className="blog-grid">
                            {filteredPosts.map(post => (
                                <div className="blog-card" key={post.title}>
                                    <img src={post.image} alt={post.title} className="blog-card-image" />
                                    <div className="blog-card-content">
                                        <p className="blog-card-meta">{post.date} • {post.author}</p>
                                        <h4>{post.title}</h4>
                                        <p className="blog-card-excerpt">{post.excerpt}</p>
                                        <button onClick={() => setSelectedPost(post)} className="read-more-btn">Read More</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                <aside className="blog-sidebar">
                    <div className="sidebar-sticky-wrapper">
                        <div className="sidebar-widget">
                            <h4>Popular Blogs</h4>
                            <ul>
                                {popularPosts.map(post => <li key={post.title}><button onClick={() => handleSidebarLinkClick(post.title)}>{post.title}</button></li>)}
                            </ul>
                        </div>
                        <div className="sidebar-widget">
                            <h4>Recent Blogs</h4>
                            <ul>
                                {recentPosts.map(post => <li key={post.title}><button onClick={() => handleSidebarLinkClick(post.title)}>{post.title}</button></li>)}
                            </ul>
                        </div>
                        <div className="sidebar-widget">
                            <h4>Subscribe</h4>
                            <p>Get the latest tax and compliance updates directly in your inbox.</p>
                            <div className="newsletter-form">
                                <input type="email" placeholder="Your email address" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                        <div className="sidebar-widget">
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            
            <section className="blog-cta-section">
                <h2>Need Expert Guidance?</h2>
                <p>Our team of Chartered Accountants and advisors are here to help you with taxation, compliance, and business strategies.</p>
                <div className="cta-buttons">
                    <Link to="/contact" className="cta-button primary">Contact Us Today</Link>
                    <Link to="/contact" className="cta-button secondary">Book a Consultation</Link>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
