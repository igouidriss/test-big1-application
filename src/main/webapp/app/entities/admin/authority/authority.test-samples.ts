import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '281c523c-1f52-48a6-a587-d8f8b004a05f',
};

export const sampleWithPartialData: IAuthority = {
  name: '1bded21d-4c5d-48fd-93ba-9aa57d86ea1f',
};

export const sampleWithFullData: IAuthority = {
  name: 'e5b4fd1b-a2b4-4121-b4bd-fd2f7e8eb417',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
