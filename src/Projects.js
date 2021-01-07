import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import CssBaseline from '@material-ui/core/CssBaseline';



export default function ControlledAccordions() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{height: "100%"}}>
        <Typography
              component="div"
              variant="h1"
              align="center"
              gutterBottom= {true}
              style={{color: "white"}}
        >
          <SportsEsportsRoundedIcon
            style={{fontSize: '8rem', position: 'relative', paddingTop: 50}}
          />
          Projects
        </Typography>
      </Container>
    </React.Fragment>
  );
}
