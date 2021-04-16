import { mockedResponse } from './mockedResponse';

export const mockedApiCall = () => {
  return mockedResponse;
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(mockedResponse);
  //   }, 2000);
  // });
};
