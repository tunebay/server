const formatErrors = (e: Error, models: *) => {
  if (e instanceof models.sequelize.ValidationError) {
    return e.errors.map(x => (({ path, message }) => ({ path, message }))(x));
  }
  return [{ path: 'unknown', message: 'Something went wrong' }];
};

export default formatErrors;
