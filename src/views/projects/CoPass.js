import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Slide from '@material-ui/core/Slide';
import Container from '@material-ui/core/Container';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import cov from '../../pub/cov.jpeg';
import clsx from 'clsx';

const CoPass = (props) => {
  const {classes} = props
  const [copassExpanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!copassExpanded);
  };
  return (
    <React.Fragment>
      <Container component="div" className="CoPass">
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <Card className={classes.root} >
            <CardHeader
              title="CoPass"
              subheader="S3, DynamoDB, Cognito, Rekognition, React Native"
            />
            <CardMedia
              className={classes.media}
              image={cov}
              title="CoPass Image"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" >
                A B2B application which helps small businesses adjust to the environmental change caused by COVID-19
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="Github" href="https://github.com/Irelias-Ideopraxists/capstone">
                <GitHubIcon />
              </IconButton>
              <IconButton aria-label="Youtube" href="https://www.youtube.com/watch?v=6CMxFFUU2OY">
                <YouTubeIcon/>
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: copassExpanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={copassExpanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={copassExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  I hold this project in a special place in my heart. Besides it being my Capstone at Fullstack, I originally came up with the idea around April 2020. The global pandemic affected my friends and even my own family's small business. Walking into my favorite chicken wing restaurant, I got my temperature scanned and I thought of this idea that could act as another layer of protection for small businesses in preventing outbreaks at their establishment. <b>At its current state, our application leverages AWS's deep learning capabilities for facial recognition. Employees wouldn't need to come in close proximity to scan temperatures of customers that aren't quarantining, who previously dinged high temperatures at another business on our ecosystem. We look to integrate Flir's thermal camera that you could add to your iphone, and integrate their API so the whole facial and temperature scan could be done with one button press, from a distance, as an added feature to our app.</b>
                </Typography>
                <Typography paragraph>
                  Although I started the idea and researched what technologies to use going into Capstone,<b>my teammates Josie Chen and Romina Ionascu</b> helped fine tune the concept and make it even better than what I originally planned. This application is far from what I had in mind at Day 0, for the better, and it's all because of these two.
                </Typography>
                <Typography paragraph>
                  A challenge faced here was with the robust stack we used, which was completely different from what Fullstack taught us in a 2.5 week agile sprint. <b>Instead of using the PERN stack we used AWS S3, DynamoDB, Cognito, Rekognition, Amplify, React Native, and Xcode to name a few</b>. Our first week alone was dedicated to learning the relevant AWS technoligies to use and <b>how</b> to implement them.
                </Typography>
                <Typography paragraph>
                  <b>Another challenge faced was creating a user friendly experience, so the businesses of our application could track other businesses in their area who have been increasing in cases. I solved this by leveraging the Mapbox and Foursquare APIs, along with our DynamoDB back end. Upon doing so, our application has an interactive map with millions of businesses both on and off our ecosystem. If a business is apart of our application, you could click on their map marker and see how many cases they've had in recent weeks.</b>
                </Typography>
                <Typography paragraph>
                  Ultimately, our job here is not done! We believe this application could truly help small businesses, including my friends and family who got affected. We are currently in our Alpha testing stages and are cleaning up our UI/UX experiences with one goal in sight: deployment on the iOS store.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Slide>
      </Container>
    </React.Fragment>
  )
}

export default CoPass;
