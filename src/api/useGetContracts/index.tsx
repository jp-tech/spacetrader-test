import { useState } from 'react';
import { get } from '../makeRequest';
import { ENDPOINTS } from '../endpoints';
import { useGetUserToken } from '../../hooks/useGetUserToken';

const useGetContracts = () => {
  const [data, setData] = useState<any>(); // TODO: Add types on state fields
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {getToken} = useGetUserToken();

  const fetch = (): Promise<any> =>  {
    setIsLoading(true);
    return get(ENDPOINTS.CONTRACTS, getToken())
      .then((response) => response.json())
      .then((body) => {
        // just for presentational sake, to have three versions
        setData([...body.data, ...body.data ]);
        console.log(body.data);
        setIsLoading(false);
        return body;
      })
      .catch((error) => {
        // HANDLE ERROR BETTER
        console.log(error);
        setIsLoading(false);
      })
  };

  return { data, fetch, isLoading };
};

export default useGetContracts;
