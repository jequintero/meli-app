export const queryParamValidator = paramName => {
  return (req, res, next) => {
    if (req.query && req.query[paramName]) {
      next();
    } else {
      res.status(400).json({
        message: 'Invalid query param',
        error: true
      });
    }
  };
};

export const productIdValidator = (req, res, next) => {
  if (req.params && req.params.id && req.params.id.startsWith('M')) {
    next();
  } else {
    res.status(400).json({
      message: 'Invalid product id provided',
      error: true
    });
  }
};
