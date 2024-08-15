import { useState } from 'react';
import { post } from '../makeRequest';
import { ENDPOINTS } from '../endpoints';
import { useGetUserToken } from '../../hooks/useGetUserToken';

const useAcceptContract = () => {
  const [data, setData] = useState<any>(); // TODO: Add types on stat fields
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {getToken} = useGetUserToken();

  const accept = (contractId: string): Promise<any> =>  {
    setIsLoading(true);
    return post(ENDPOINTS.ACCEPT_CONTRACT(contractId), getToken())
      .then((response) => response.json())
      .then((body) => {
        setData(body);
        setIsLoading(false);
        location.reload(); //Hack to refresh state 
        return body;
      })
      .catch((error) => {
        // HANDLE ERROR BETTER
        console.log(error);
        setError(error);
        setIsLoading(false);
      })
  };

  return { data, accept, isLoading, error};
};

export default useAcceptContract;
