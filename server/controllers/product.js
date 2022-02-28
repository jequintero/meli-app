import { find, findDescriptionById, findDetailsById } from '../models/product';
import { list, one, description } from '../formatter/product';

export const all = async (req, res) => {
  const { q } = req.query;
  try {
    const results = await find(q);
    const formattedResults = list(results);
    res.status(200).json(formattedResults);
  } catch (error) {
    res.status(400).json({
      message: error.message,
      error: true
    });
  }
};

export const detailsWithDescriptionById = async (req, res) => {
  const { id } = req.params;
  try {
    const detailsResults = await findDetailsById(id);
    const descriptionResults = await findDescriptionById(id);
    res
      .status(200)
      .json({ ...one(detailsResults), ...description(descriptionResults) });
  } catch (error) {
    res.status(400).send({
      message: error.message,
      error: true
    });
  }
};
