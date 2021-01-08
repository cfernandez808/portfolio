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

export default Fullsnack;
