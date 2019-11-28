import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from './frame/AppBar'

const useStyles = makeStyles(theme => ({
  card: {
      maxWidth: 345,
      backgroundColor: "pink",
      marginLeft: "10px",
      marginTop: "10px"
  },
  card1: {
      maxWidth: 345,
      backgroundColor: "pink",
      marginLeft: "10px",

  },
  card2: {
      maxWidth: 345,
      backgroundColor: "pink",
      marginLeft: "10px",

  },
  container1: {
      height: 300,
      backgroundColor: "Black",
      marginBottom: "50px",
      
  },
  media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
  },
  expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
      }),
  },
  expandOpen: {
      transform: 'rotate(180deg)',
  },
  avatar: {
      backgroundColor: red[500],
  },
}));


class UserFeed extends Component {
  constructor(props) {
    super(props);
  }

CardExampleGroups = () => (
  <div>
            
  <Container style={{ height: 300,
      backgroundColor: "Black",
      marginBottom: "50px", }}>

  </Container>
  <Grid container spacing={3}>
<Grid item xs={12} sm={4}>
  <Card style={{ maxWidth: 345,
      backgroundColor: "pink",
      marginLeft: "10px",
      marginTop: "10px" }}>
      <CardHeader
          avatar={
              <Avatar aria-label="recipe" style={{ backgroundColor: red[500]}}>
                  Y
                                  </Avatar>
          }
          action={
              <IconButton aria-label="settings">
                  <MoreVertIcon />
              </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
      />
      <CardMedia
          className={useStyles.media}
          image="photos/images.jpg"
          title="Paella dish"
      />

      <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
                              </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
              <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
              <ShareIcon />
          </IconButton>
         
      </CardActions>
      
  </Card>

  </Grid>
  <Grid item xs={12} sm={4}>
  <Card style={{ maxWidth: 345,
      backgroundColor: "pink",
      marginLeft: "10px",
      marginTop: "10px" }}>
      <CardHeader
          avatar={
              <Avatar aria-label="recipe" className={useStyles.avatar}>
                  M
                                  </Avatar>
          }
          action={
              <IconButton aria-label="settings">
                  <MoreVertIcon />
              </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
      />
      <CardMedia
          className={useStyles.media}
          image="photos/images.jpg"
          title="Paella dish"
      />

      <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
                              </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
              <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
              <ShareIcon />
          </IconButton>
          
      </CardActions>
      
  </Card>
</Grid>
<Grid item xs={12} sm={4}>
<Card style={{ maxWidth: 345,
      backgroundColor: "pink",
      marginLeft: "10px",
      marginTop: "10px" }}>
      <CardHeader
          avatar={
              <Avatar aria-label="recipe" className={useStyles.avatar}>
                  A
                                  </Avatar>
          }
          action={
              <IconButton aria-label="settings">
                  <MoreVertIcon />
              </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
      />
      <CardMedia
          className={useStyles.media}
          image="photos/images.jpg"
          title="Paella dish"
      />

      <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
                              </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
              <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
              <ShareIcon />
          </IconButton>
      </CardActions>
      
  </Card>
</Grid>
<Grid item xs={12} sm={4}>
<Card style={{ maxWidth: 345,
      backgroundColor: "pink",
      marginLeft: "10px",
      marginTop: "10px" }}>
      <CardHeader
          avatar={
              <Avatar aria-label="recipe" className={useStyles.avatar}>
                  Y
                                  </Avatar>
          }
          action={
              <IconButton aria-label="settings">
                  <MoreVertIcon />
              </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
      />
      <CardMedia
          className={useStyles.media}
          image="photos/images.jpg"
          title="Paella dish"
      />

      <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
                              </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
              <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
              <ShareIcon />
          </IconButton>
         
      </CardActions>
      
  </Card>

  </Grid>
  <Grid item xs={12} sm={4}>
  <Card style={{ maxWidth: 345,
      backgroundColor: "pink",
      marginLeft: "10px",
      marginTop: "10px" }}>
      <CardHeader
          avatar={
              <Avatar aria-label="recipe" className={useStyles.avatar}>
                  M
                                  </Avatar>
          }
          action={
              <IconButton aria-label="settings">
                  <MoreVertIcon />
              </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
      />
      <CardMedia
          className={useStyles.media}
          image="photos/images.jpg"
          title="Paella dish"
      />

      <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
                              </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
              <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
              <ShareIcon />
          </IconButton>
          
      </CardActions>
      
  </Card>
</Grid>
<Grid item xs={12} sm={4}>
<Card style={{ maxWidth: 345,
      backgroundColor: "pink",
      marginLeft: "10px",
      marginTop: "10px" }}>
      <CardHeader
          avatar={
              <Avatar aria-label="recipe" className={useStyles.avatar}>
                  A
                                  </Avatar>
          }
          action={
              <IconButton aria-label="settings">
                  <MoreVertIcon />
              </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
      />
      <CardMedia
          className={useStyles.media}
          image="photos/images.jpg"
          title="Paella dish"
      />

      <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
                              </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
              <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
              <ShareIcon />
          </IconButton>
      </CardActions>
      
  </Card>
</Grid>
  </Grid>



</div>
)


    

    render() {
        return (
          <div>
            <div>
            <AppBar/>
            </div>
              <this.CardExampleGroups/>
           
            </div>
        )
    }
}
export default UserFeed;