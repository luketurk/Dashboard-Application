import React, { Component } from 'react';
import Card from '../components/Card';
import Grid from '../components/Grid';

class Cards extends Component {
  render() {
    return (
        <div style={{'display': 'inline' }}>
          <h2>Cards</h2>
          <Card></Card>
        </div>
    );
  }
}

export default Cards;