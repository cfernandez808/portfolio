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
// import YouTubeIcon from '@material-ui/icons/YouTube';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import car from '../../pub/car.jpg';
import clsx from 'clsx';

const Keys = (props) => {
  const {classes} = props
  const [keysExpanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!keysExpanded);
  };
  return (
    <React.Fragment>
      <Container component="div" className="CoPass">
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <Card className={classes.root} >
            <CardHeader
              title="DudeWheresMyKeys"
              subheader="Swift, ARKit, Apple Core Location, Xcode--(Work In Progress)"
            />
            <CardMedia
              className={classes.media}
              image={car}
              title="Wheres My Img"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Augemented reality application to help users find their lost items; right now the application simulates lost keys
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="Github" href="https://github.com/cfernandez808/DudeWheresMyKeys">
                <GitHubIcon />
              </IconButton>
              {/* TODO: Redo video then input link */}
              {/* <IconButton aria-label="share">
                <YouTubeIcon />
              </IconButton> */}
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: keysExpanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={keysExpanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={keysExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  I've always wondered how augmented reality worked, and even more so, I've always wondered where my items went. In fact, leading up to this application, I lost my keys 3 times in a span of two weeks. Same thing goes for my wallet, socks, underwear, and I always hoped I wasn't the only one. Turns out, I'm not!
                </Typography>
                <Typography paragraph>
                  I know there's a company out there called Tile that uses a little chip that you could attach to anything you don't want to lose and you could track its location through their application. Only problem? Once I found the general location of my item, I then played a fun game of hide-and-seek.
                </Typography>
                <Typography paragraph>
                  At its curremt state, this app is a proof of concept. I hard coded the Las Vegas Strip's coordinates which I obtained from a quick Google search, and a set of 2D keys render on your device using augmented reality, and point to where I "lost" my keys (the Las Vegas Strip).
                </Typography>
                <Typography paragraph>
                  In the near future, instead of a set of 2D keys, I will point a 3D arrow to your lost item. And instead of using a chip like Tile, I'll utilize another phone (for now). <b>What this app plans to do is render a 3D arrow on your device that points to your lost item. Once you are in close proximity, a new virtual arrow would render and anchor directly above your item to eliminate that game of hide-and-seek.</b>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Slide>
      </Container>
    </React.Fragment>
  )
}

export default Keys;
