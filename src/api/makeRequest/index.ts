import { BASE_API_URL } from '../endpoints';

const makeRequest = (
  httpMethod = "GET",
  endpoint: string,
  authToken = '',
  urlParams: unknown = {},
) => {
  return fetch(
    `${BASE_API_URL}${endpoint}`,
    {
      headers: {
        "accept": 'application/json',
        "Content-Type": "application/json",
        ...(authToken && {
          "Authorization": `Bearer ${authToken}`
        })
      },
      method: httpMethod,
      ...(httpMethod == "POST" && {body: JSON.stringify(urlParams)})
    },
  );
};

export const post = (
  endpoint: string,
  authToken?: string,
  payload?: unknown,
) => 
  {
    return makeRequest('POST', endpoint, authToken, payload)
  }

export const get = (
  endpoint: string,
  authToken?: string,
) => 
  {
    return makeRequest('GET', endpoint, authToken || '')
  }
