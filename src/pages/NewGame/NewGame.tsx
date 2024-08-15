import React, { FormEvent, useState } from 'react';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import { COPY } from '../../copy';
import useStartGame from '../../api/useStartGame';
import { APPLICATION_URLS } from '../../routing/routes';
import { useNavigate } from "react-router-dom";
import { styles } from './styles';
import Grid from '@mui/material/Grid';
import Sidebar from '../../components/Sidebar';
import CtaButton from '../../components/CtaButton';
import AlertBanner from '../../components/AlertBanner';

// Need to get from API > 'https://api.spacetraders.io/v2/factions
const factions = [
  'GALACTIC',
  'QUANTUM',
  'DOMINION',
]

export default function NewGame() {
  const [factionSelected, setFactionSelected] = useState<string>(factions[0]);
  const [username, setUsername] = useState<string>('');
  const {startGame, isLoading, error} = useStartGame();
  const navigate = useNavigate();

  const handleFactionChange = (event: SelectChangeEvent) => {
    setFactionSelected(event.target.value);
  };

  const {buttons: buttonText, formsFields} = COPY.components;

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startGame({
      symbol: username,
      faction: factionSelected,
    })
    .then((success) => {
      if(success){
        navigate(APPLICATION_URLS.gameplay);
      }
    });
  }
  return (
    <Grid container>
      <Grid item sm={4} md={8} sx={styles.loginBoxContainer} />
      <Sidebar center>
        <Typography component="h1" variant="h5">
          {COPY.pages.startGame.header}
        </Typography>
        <Box component="form" onSubmit={submitForm}>
          <TextField
            required
            fullWidth
            sx={{ input: {...styles.formInput} }}
            margin="normal"
            id="username"
            label={formsFields.userName}
            name="username"
            onChange={handleUsername}
          />
          <Select
            fullWidth
            id="select-faction"
            label="faction"
            value={factionSelected}
            disabled={isLoading}
            onChange={handleFactionChange}
            sx={styles.formInput}
          >
            {factions.map((faction) => 
              <MenuItem key={faction} value={faction}>{faction}</MenuItem>
            )}
          </Select>
          <CtaButton>
            {isLoading ? buttonText.loading : buttonText.startGame}
          </CtaButton>
        </Box>
        {error && 
          <AlertBanner severity="error">
            Error creating game: {error}
          </AlertBanner>
        }
      </Sidebar>
    </Grid>
  )
}
