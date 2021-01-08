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

export default CoPass;
