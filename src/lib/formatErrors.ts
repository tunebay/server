import { QueryFailedError } from 'typeorm';

const formatErrors = (e: any) => {
  if (e instanceof QueryFailedError) {
    return [{ message: e.message, name: e.name, stack: e.stack }];
  }
  return [{ name: 'unknown', message: 'Something went wrong' }];
};

export default formatErrors;
