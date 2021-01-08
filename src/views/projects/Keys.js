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
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Short description
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                  and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
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
