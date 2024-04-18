import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 13892,
  login: '3BxK',
};

export const sampleWithPartialData: IUser = {
  id: 17713,
  login: 'Ennj',
};

export const sampleWithFullData: IUser = {
  id: 1704,
  login: 'R1bj+s@efBk-\\ijUa\\^oYH\\UO3QJu',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
