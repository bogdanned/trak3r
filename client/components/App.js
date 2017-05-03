import React from 'react';
import Navbar from './Navbar.js';
import {Grid} from 'semantic-ui-react';
import CardExampleCard from './Card.js';


class App extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid.Row>
          <Grid.Column computer={5} padded>
            <CardExampleCard />
          </Grid.Column>
          <Grid.Column computer={5}>
            <CardExampleCard />
          </Grid.Column>
          <Grid.Column computer={5}>
            <CardExampleCard />
          </Grid.Column>
          {this.children}
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
