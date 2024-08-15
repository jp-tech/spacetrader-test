import { useState } from 'react';
import { post } from '../makeRequest';
import { ENDPOINTS } from '../endpoints';
import { useGetUserToken } from '../../hooks/useGetUserToken';
import { COPY } from '../../copy';

const useStartGame = () => {
  const [data, setData] = useState<any>(); // TODO: Add types on state fields
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {setToken} = useGetUserToken();

  const startGame = (payload: any): Promise<any> =>  {
    setIsLoading(true);
    return post(ENDPOINTS.GET_USER, '', payload)
      .then((response) => response.json())
      .then((body) => {
        // Errors are also posted in here so need handling
        if(body?.data?.token){
          setToken(body.data.token);
          setData(body);
          setIsLoading(false);
          return body;
        }
        setError(body?.error?.message || COPY.errors.unexpected);
        setIsLoading(false);
      })
      .catch((error) => {
        // HANDLE ERROR BETTER
        console.log(error);
        setError(error);
        setIsLoading(false);
      })
  };

  return { data, startGame, isLoading, error };
};

export default useStartGame;
