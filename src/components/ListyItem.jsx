import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));


const styles = {
  // these buttons will be aligned to right side of abbBar
  toolbarButtons: {
    marginLeft: "auto",
    marginRight: -12
  },
  menuButton: {
    marginRight: 20,
    marginLeft: -122
  }
};

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Domestic Cleaner"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Thobile Nqkwakwakwa
              </Typography>
              {" — Clean my room you stupid fucking bitch"}
              <hr/>
            <Button className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Apply
            </Button>
            <Button  className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Contact
            </Button>
            <Button  className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Report
            </Button>
        <hr/>
            </React.Fragment>
          }
        />
        
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Domestic Cleaner"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
              <hr/>
            <Button className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Apply
            </Button>
            <Button  className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Contact
            </Button>
            <Button  className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Report
            </Button>
        <hr/>
            </React.Fragment>
          }
        />
        
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Domestic Cleaner"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
              <hr/>
            <Button className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Apply
            </Button>
            <Button  className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Contact
            </Button>
            <Button  className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Report
            </Button>
        <hr/>
            </React.Fragment>
          }
        />
        
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Domestic Cleaner"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
              <hr/>
            <Button className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Apply
            </Button>
            <Button  className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Contact
            </Button>
            <Button  className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Report
            </Button>
        <hr/>
            </React.Fragment>
          }
        />
        
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
              <hr/>
            <Button className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Apply
            </Button>
            <Button  className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Contact
            </Button>
            <Button  className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Report
            </Button>
        <hr/>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
              <hr/>
            <Button className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Apply
            </Button>
            <Button  className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Contact
            </Button>
            <Button  className={classes.menuButton}  variant="outlined" size="small" color="primary" className={classes.margin}>
              Report
            </Button>
        <hr/>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}