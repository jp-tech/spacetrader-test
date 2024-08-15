import { useState } from 'react';
import { dummyShipData } from './data';

// Ran out of time so hard coded. :( Should come from SHIP api
const useGetShips = () => {
  const [data, _] = useState<any>(dummyShipData);
  return { data };
};

export default useGetShips;
