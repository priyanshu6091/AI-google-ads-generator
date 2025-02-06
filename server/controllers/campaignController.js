const Campaign = require('../models/Campaign');
const { generateAdContent } = require('../api/ai');
const { createCampaign } = require('../services/googleAdsService');
exports.createCampaign = async (req, res) => {
    try {
      const { businessName, businessType, targetAudience, marketingGoal, uniqueSellingPoints } = req.body;
  
      const aiResponse = await generateAdContent(businessName, businessType, targetAudience, marketingGoal, uniqueSellingPoints);
  
      const campaign = new Campaign({
        businessName,
        businessType,
        targetAudience,
        marketingGoal,
        uniqueSellingPoints,
        headlines: aiResponse.headlines,
        descriptions: aiResponse.descriptions,
        keywords: aiResponse.keywords,
      });
  
      await campaign.save();
  
      const googleAdsResponse = await createCampaign(campaign);
      console.log('Google Ads Campaign Created:', googleAdsResponse);
  
      res.status(201).send(campaign);
    } catch (error) {
      res.status(400).send(error);
    }
  };

exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).send(campaigns);
  } catch (error) {
    res.status(500).send(error);
  }
};