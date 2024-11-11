import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Events');

  const tabs = [
    'Events',
    'Resource Toolbox',
    'Community Hub',
    'Mapping of Youth Organizations',
    'Youth Journalism and Expression',
    'Mentorship and Leadership Opportunities',
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Events':
        return (
          <div className="content-container">
            <div className="card">
              <h3>Youth Climate Action Workshop</h3>
              <p>Date: 2024-11-25</p>
              <p>Location: Nairobi, Kenya</p>
              <button className="register-button">Register</button>
            </div>
            <div className="card">
              <h3>Digital Skills Training</h3>
              <p>Date: 2024-12-05</p>
              <p>Location: Cape Town, South Africa</p>
              <button className="register-button">Register</button>
            </div>
            <div className="card">
              <h3>Leadership Development Summit</h3>
              <p>Date: 2024-12-15</p>
              <p>Location: Lagos, Nigeria</p>
              <button className="register-button">Register</button>
            </div>
          </div>
        );
      case 'Resource Toolbox':
        return (
          <div className="content-container">
            <div className="card">
              <h3>Child Protection Guide</h3>
              <p>A comprehensive guide on child protection measures.</p>
            </div>
            <div className="card">
              <h3>Climate Action Toolkit</h3>
              <p>Resources to help you advocate for climate action.</p>
            </div>
            <div className="card">
              <h3>Mental Health Resources</h3>
              <p>Materials to support mental health awareness.</p>
            </div>
          </div>
        );
      case 'Community Hub':
        return (
          <div className="content-container">
            <div className="card">
              <h3>Networking Opportunities</h3>
              <p>Connect with like-minded youth in your area.</p>
            </div>
            <div className="card">
              <h3>Campaign Showcase</h3>
              <p>Highlight your achievements and ongoing projects.</p>
            </div>
          </div>
        );
      case 'Mapping of Youth Organizations':
        return (
          <div className="content-container">
            <div className="card">
              <h3>Green Youth Foundation</h3>
              <p>Location: Nairobi, Kenya</p>
            </div>
            <div className="card">
              <h3>Digital Innovators</h3>
              <p>Location: Cape Town, South Africa</p>
            </div>
            <div className="card">
              <h3>Leadership Advocates</h3>
              <p>Location: Lagos, Nigeria</p>
            </div>
          </div>
        );
      case 'Youth Journalism and Expression':
        return (
          <div className="content-container">
            <div className="card">
              <h3>My Journey as a Youth Leader</h3>
              <p>A personal story on youth empowerment.</p>
            </div>
            <div className="card">
              <h3>Climate Change Awareness</h3>
              <p>Articles on climate advocacy.</p>
            </div>
          </div>
        );
      case 'Mentorship and Leadership Opportunities':
        return (
          <div className="content-container">
            <div className="card">
              <h3>Career Development Mentorship</h3>
              <p>Connect with mentors in various fields.</p>
            </div>
            <div className="card">
              <h3>Leadership Skills Workshop</h3>
              <p>Workshops to enhance leadership skills.</p>
            </div>
          </div>
        );
      default:
        return <div>Select a tab to view content.</div>;
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-layout">
        <div className="dashboard-sidebar">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`dashboard-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="dashboard-content">
          <h1>Welcome to YouthConnect</h1>
          <p>Connect, collaborate, and create positive change in your community</p>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
