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
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HttpIcon from '@material-ui/icons/Http';
import willy from '../../pub/willy.jpg';
import clsx from 'clsx';

const Fullsnack = (props) => {
  const {classes} = props
  const [fullsnackExpanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!fullsnackExpanded);
  };
  return (
    <React.Fragment>
      <Container component="div" className="CoPass">
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <Card className={classes.root}>
            <CardHeader
              title="Fullsnack"
              subheader="Postgres, Express, React, Node, Stripe API"
            />
            <CardMedia
              className={classes.media}
              image={willy}
              title="Fullsnack Img"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                An E-Commerce store for selling candies, hosted on Heroku; my first agile group project done at Fullstack Academy
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="Github" href="https://github.com/Grace-of-the-Shopper/graceshopper-project">
                <GitHubIcon />
              </IconButton>
              <IconButton aria-label="Website" href="https://fullsnack-sweet-shop.herokuapp.com/">
                <HttpIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: fullsnackExpanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={fullsnackExpanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={fullsnackExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Fullsnack is another web app built as part of the Fullstack curriculum, and was my first agile <u>group</u> project completed there. Here, we were instructed to create a mock e-commmerce website using the FSA tech stack, but style was not a priority. We utilized Postgres, Express, Node, and React in order to fine tune what we were taught at the school.
                </Typography>
                <Typography paragraph>
                  <b>An interesting challenge faced here was creating a robust payment system into our application. What I did in order to solve this problem was I deciphered the Stripe API documentation and implemented a payment portal that finished your checkout through a Stripe hosted webpage. Furthermore, I implemented a currency option on our site where you could choose Japan, USA, or Austrailia, which automatically updates your cart total on Stripe in matching the conversion cost.</b>
                </Typography>
                <Typography paragraph>
                  Additionally, I also gained exposure with managing a project in a collaborative setting where we used <b>GitHub Organizations, Projects, Issues, and Pull Requests</b>.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Slide>
      </Container>
    </React.Fragment>
  )
}

export default Fullsnack;
