const { InferenceApi } = require('@huggingface/inference');

const inference = new InferenceApi({
  token: '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',
});

const generateAdContent = async (businessName, businessType, targetAudience, marketingGoal, uniqueSellingPoints) => {
  const prompt = `
    Business Name: ${businessName}
    Business Type: ${businessType}
    Target Audience: ${targetAudience}
    Marketing Goal: ${marketingGoal}
    Unique Selling Points: ${uniqueSellingPoints}

    Generate ad content.
  `;

  const response = await inference.textGeneration({
    inputs: prompt,
    model: 'gpt2', // Using the gpt2 model for text generation
  });

  return response;
};

module.exports = { generateAdContent };