import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Sidebar from '../../components/Sidebar';
import useGetUser from '../../api/useGetUser';
import useGetContracts from '../../api/useGetContracts';
import CircularProgress from '@mui/material/CircularProgress';
import DisplayTable from '../../components/DisplayTable';
import useGetShips from '../../api/useGetShips';
import { numberToMonetaryDisplay } from '../../utils';
import ContractTable from '../../components/ContractTable';
import { COPY } from '../../copy';

export default function Gameplay() {
  const {fetch: fetchUser, data: user} =  useGetUser();
  const {fetch: fetchContracts, data: contracts, isLoading} = useGetContracts();
  const {data: userShips} =  useGetShips();
  const {userSummary, ships} = COPY.components.tables;

  useEffect(() => {
    fetchUser();
    fetchContracts();
  }, []);
  
  return (
    <Grid container style={{ minHeight: '100vh'}}>
      <Grid item sm={4} md={8}  sx={{ backgroundColor: 'black' }}>
        <h1>PUT GAME MAP HERE!!!</h1>
      </Grid>
      <Sidebar>
        {isLoading
          ?
            <CircularProgress />
          :
          <>
            <DisplayTable
              headers={userSummary.headers}
              dataRows={[[
                user?.symbol, user?.headquarters, user?.startingFaction, 
                user?.shipCount, numberToMonetaryDisplay(user?.credits) 
              ]]}
            />
            <ContractTable contracts={contracts} />
            <DisplayTable
              headers={ships.headers}
              dataRows={userShips?.map((ship: any) => [
                ship?.name,
                ship?.remaining_fuel,
                ship?.capacity,
                ship?.top_speed,
                ship?.crew_needed,
                ship?.condition,
              ])}
            />
          </>
        }
      </Sidebar>
    </Grid>
  )
}
