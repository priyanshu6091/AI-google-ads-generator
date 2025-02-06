import React from 'react';
import axios from 'axios';

const Preview = ({ campaign, setCampaign }) => {
  const handleEdit = (field, value) => {
    setCampaign({ ...campaign, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/campaigns', campaign);
      alert('Campaign launched successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Preview Campaign</h1>
      <div>
        <label>Business Name:</label>
        <input
          type="text"
          value={campaign.businessName}
          onChange={(e) => handleEdit('businessName', e.target.value)}
        />
      </div>
      <div>
        <label>Business Type:</label>
        <input
          type="text"
          value={campaign.businessType}
          onChange={(e) => handleEdit('businessType', e.target.value)}
        />
      </div>
      <div>
        <label>Target Audience:</label>
        <input
          type="text"
          value={campaign.targetAudience}
          onChange={(e) => handleEdit('targetAudience', e.target.value)}
        />
      </div>
      <div>
        <label>Marketing Goal:</label>
        <input
          type="text"
          value={campaign.marketingGoal}
          onChange={(e) => handleEdit('marketingGoal', e.target.value)}
        />
      </div>
      <div>
        <label>Unique Selling Points:</label>
        <input
          type="text"
          value={campaign.uniqueSellingPoints}
          onChange={(e) => handleEdit('uniqueSellingPoints', e.target.value)}
        />
      </div>
      <div>
        <label>Headlines:</label>
        <input
          type="text"
          value={campaign.headlines.join(',')}
          onChange={(e) => handleEdit('headlines', e.target.value.split(','))}
        />
      </div>
      <div>
        <label>Descriptions:</label>
        <input
          type="text"
          value={campaign.descriptions.join(',')}
          onChange={(e) => handleEdit('descriptions', e.target.value.split(','))}
        />
      </div>
      <div>
        <label>Keywords:</label>
        <input
          type="text"
          value={campaign.keywords.join(',')}
          onChange={(e) => handleEdit('keywords', e.target.value.split(','))}
        />
      </div>
      <button onClick={handleSubmit}>Launch Campaign</button>
    </div>
  );
};

export default Preview;