import React, { Component } from 'react';
import ReactHooks from '../components/ReactHooks';
import  AlignItemsList  from '../components/ListyItem';
import  {createFilter} from 'react-search-input'
import SearchInput from '../components/SearchFilter';


const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name', 'user.age'];
const jobs = [
    
  {
     'id': '1',
     'user': {
         'name': 'Luke Mark Turk',
         'age': '29'

     },
     'subject': 'This is a long subject that must be changed and edited and can be searched for! ' 
 },
 {
     'id': '1',
     'user': {
         'name': 'Roland Fuchs',
         'age': '27'

     },
     'subject': 'Subject' 
 },
 {
     'id': '1',
     'user': {
         'name': 'A',
         'age': '24'
     },
     'subject': 'Subject' 
 },
 {
     'id': '1',
     'user': {
         'name': 'SuckItFatBoy',
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

class People extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
  render() {
    const filteredEmails = jobs.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      
      
        <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />

        {filteredEmails.map(email => {
          return (
            <div className="mail" key={email.id}>
              <hr/>
              <div className="from">Username: {email.user.name}</div>
              <div className="subject">Subject: {email.subject}</div>
              <div className="age">Age: {email.user.age}</div>
              
            </div>
          )
        })}
        </div>
    );
  }
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default People;