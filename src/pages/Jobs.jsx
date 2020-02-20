import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import JobSeeking from '../pages/JobSeeking';
import People from '../pages/People';

class Jobs extends Component {
  constructor(props){
    super(props);
    this.state = {
      heading: 'People',
      toggled: false,
      body: <People/>,
      searchTerm : ''
    }
  }
  onToggle = e => {
  if(!this.state.toggled)
    this.setState({
      heading: 'Jobs',
      toggled: true,
      body: <JobSeeking />
    });
    else if(this.state.toggled)
    this.setState({
      heading:'People',
      toggled: false,
      body: <People/>
        })  
  }
  render() {
    return (
        <div>
          <div style={{'display': 'inline-block'}}>
          <label>People</label>
         <Switch  onClick={(e) => this.onToggle(e.target.value) } color="primary" />
          <label>Jobs</label>
          </div>
       
      <hr/>
          <h3>{this.state.heading}</h3>
        {this.state.body}
        </div>
    );
  }
}

export default Jobs;