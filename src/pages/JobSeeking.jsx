import React, { Component } from 'react';
import ReactHooks from '../components/ReactHooks';
import  AlignItemsList  from '../components/ListyItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button } from 'reactstrap';
import SearchInput, {createFilter} from 'react-search-input';



import Container from '@material-ui/core/Container';


const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name', 'user.age'];
const jobs = [
    
  {
     'id': '1',
     'user': {
         'name': 'Domestic Cleaner',
         'age': '29'

     },
     'subject': 'This is a long subject that must be changed and edited and can be searched for! ' 
 },
 {
     'id': '1',
     'user': {
         'name': 'Engineer',
         'age': '27'

     },
     'subject': 'Subject' 
 },
 {
     'id': '1',
     'user': {
         'name': 'Masturbator',
         'age': '24'
     },
     'subject': 'Subject' 
 },
 {
     'id': '1',
     'user': {
         'name': 'Gymer',
         'age': '22'

     },
     'subject': 'Feeling so disparaged! My friend I am all alone and always on the fence' 
 },
 {
     'id': '1',
     'user': {
         'name': '@TotFiddler',
         'age': '23'

     },
     'subject': 'Have you read the letters that I sent?' 
 },
 

];



export default class JobSeeking extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }


  
  searchUpdated (term) {
    this.setState({searchTerm: term})
  } 

  render() {
    const filteredEmails = jobs.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredEmails.map(email => {
          return (
            <div className="mail" key={email.id}>
              <List key={email.id}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={email.user.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
               {email.subject}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      
    </List>
              
            </div>
          )
        })}
      </div>
    )
      
}}
  
    