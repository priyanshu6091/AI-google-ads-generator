const { GoogleAdsClient } = require('google-ads-api');

const client = new GoogleAdsClient({
  client_id: '',
  client_secret: '',
  developer_token: '',
});

const createCampaign = async (campaign) => {
  const customer = await client.loadFromStorage('path/to/credentials.json');
  const campaignService = customer.campaignService;

  const campaignOperation = {
    create: {
      name: campaign.businessName,
      advertisingChannelType: 'SEARCH',
      status: 'PAUSED',
      budget: {
        amountMicros: 5000000, // $50
        deliveryMethod: 'STANDARD',
      },
      targeting: {
        geoTarget: {
          countries: ['US'],
        },
        languages: ['en'],
        keywords: campaign.keywords,
      },
    },
  };

  const response = await campaignService.mutateCampaigns([campaignOperation]);
  return response;
};

module.exports = { createCampaign };