import React, {useEffect, useRef} from 'react';
import Rating from '@material-ui/lab/Rating';
import StarsIcon from '@material-ui/icons/Stars';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import anime from 'animejs/lib/anime.es.js';


export default function Skills() {

  useEffect(() => {
    anime.timeline({loop: true})
      .add({
        targets: '.ml2 .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
      }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
  })
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" style={{height: "100%"}}>
        <Typography
          component="div"
          variant="h1"
          align="center"
          style={{color: "white"}}
        >
          <SportsEsportsRoundedIcon style={{fontSize: '8rem', position: 'relative', paddingTop: 50}}/>Skills
        </Typography>
        <Typography component="div" style={{ backgroundColor: '#37393F', height: '100%', borderRadius: 30, color: "white"}}>
        <br />
        <br />

        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography variant="h2" component="legend">Proficient</Typography>
          <Rating
            className= "ml2"
            name="customized-empty"
            defaultValue={5}
            size="large"
            readOnly={true}
            precision={0.5}
            icon={<StarsIcon className="letter" fontSize="inherit" />}
          />
          <Typography align="center">
            Amazon Web Services, Amplify, Rekognition, S3, DynamoDB, JavaScript, Node.js, React-Redux, Express, Sequelize, Postgres, React Native, Expo, REST API, Xcode, Firestore, Git, GitHub, HTML, CSS, Object-oriented Programming
          </Typography>
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography variant="h3" component="legend">Knowledgable</Typography>
          <Rating
            name="customized-empty"
            className="ml2"
            defaultValue={3}
            readOnly={true}
            size="large"
            precision={0.5}
            icon={<StarsIcon className="letter" fontSize="inherit" />}
          />
          <Typography align="center">
            Typescript, AWS Lambda, Cognito, GraphQL API, OAuth, Firebase, Vue, Vuex, Vuetify
          </Typography>
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography variant="h4" component="legend">Familiar</Typography>
          <Rating
            name="customized-empty"
            defaultValue={2}
            size="large"
            className="ml2"
            readOnly={true}
            precision={0.5}
            icon={<StarsIcon className="letter" fontSize="inherit" />}
          />
          <Typography align="center">
            Swift, ARKit, Python, JQuery, Mocha, Chai, Jasmine, Tableau, STATA
          </Typography>
        </Box>
        <br/>
        <br/>
        <Typography align="center">
          <i>(This website is hosted on <b>AWS, and uses Cognito, S3, DyanmoDB, and Lambda</b>... by the way)</i><br /> <br />
        </Typography>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
