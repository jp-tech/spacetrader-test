import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  center?: boolean;
}

export default function Sidebar({children, center = false}: Props) {
  return (
    <Grid
      item
      md={4}
      style={{
        display: 'flex',
        justifyContent: center ? 'center' : 'space-between',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: center ? 'center' : 'space-around'
        }}
      >
        {children}
      </Box>
    </Grid>
  )
}