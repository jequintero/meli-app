import Product from '../models/product';

const all = async (req, res) => {
  const { q } = req.query;
  try {
    const results = await Product.find(q);
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

module.exports = {
  all
};
