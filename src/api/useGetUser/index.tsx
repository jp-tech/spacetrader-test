import { useState } from 'react';
import { get } from '../makeRequest';
import { ENDPOINTS } from '../endpoints';
import { useGetUserToken } from '../../hooks/useGetUserToken';


const useGetUser = () => {
  const [data, setData] = useState<any>(); // TODO: Add types on state fields
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {getToken} = useGetUserToken();

  const fetch = (): Promise<any> =>  {
    setIsLoading(true);
    return get(ENDPOINTS.REGISTER_AGENT, getToken())
      .then((response) => response.json())
      .then((body) => {
        setData(body.data);
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

export default useGetUser;
