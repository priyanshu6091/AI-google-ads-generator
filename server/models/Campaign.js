const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  businessName: String,
  businessType: String,
  targetAudience: String,
  marketingGoal: String,
  uniqueSellingPoints: String,
  headlines: [String],
  descriptions: [String],
  keywords: [String],
});

module.exports = mongoose.model('Campaign', campaignSchema);