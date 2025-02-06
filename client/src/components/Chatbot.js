import React, { useState } from 'react';
import axios from 'axios';
import Preview from './Preview';

const Chatbot = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [marketingGoal, setMarketingGoal] = useState('');
  const [uniqueSellingPoints, setUniqueSellingPoints] = useState('');
  const [headlines, setHeadlines] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [preview, setPreview] = useState(false);
  const [campaign, setCampaign] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const campaign = {
      businessName,
      businessType,
      targetAudience,
      marketingGoal,
      uniqueSellingPoints,
      headlines,
      descriptions,
      keywords,
    };
    setCampaign(campaign);
    setPreview(true);
  };

  return (
    <div>
      {!preview ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Business Type"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          />
          <input
            type="text"
            placeholder="Target Audience"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
          />
          <input
            type="text"
            placeholder="Marketing Goal"
            value={marketingGoal}
            onChange={(e) => setMarketingGoal(e.target.value)}
          />
          <input
            type="text"
            placeholder="Unique Selling Points"
            value={uniqueSellingPoints}
            onChange={(e) => setUniqueSellingPoints(e.target.value)}
          />
          <input
            type="text"
            placeholder="Headlines"
            value={headlines.join(',')}
            onChange={(e) => setHeadlines(e.target.value.split(','))}
          />
          <input
            type="text"
            placeholder="Descriptions"
            value={descriptions.join(',')}
            onChange={(e) => setDescriptions(e.target.value.split(','))}
          />
          <input
            type="text"
            placeholder="Keywords"
            value={keywords.join(',')}
            onChange={(e) => setKeywords(e.target.value.split(','))}
          />
          <button type="submit">Create Campaign</button>
        </form>
      ) : (
        <Preview campaign={campaign} setCampaign={setCampaign} />
      )}
    </div>
  );
};

export default Chatbot;