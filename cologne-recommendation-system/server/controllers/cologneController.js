const Cologne = require('../models/Cologne');

exports.searchCologne = async (req, res) => {
  const { query } = req.query;
  try {
    const colognes = await Cologne.find({ name: { $regex: query, $options: 'i' } });
    res.json(colognes);
  } catch (error) {
    res.status(500).send('Error searching colognes');
  }
};

exports.getRecommendations = async (req, res) => {
  try {
    // Dummy recommendation logic
    const colognes = await Cologne.find().limit(10);
    res.json(colognes);
  } catch (error) {
    res.status(500).send('Error fetching recommendations');
  }
};
