import React from 'react';
import Navbar from './Navbar.js';
import {Grid} from 'semantic-ui-react';
import CardExampleCard from './Card.js';


class App extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid.Row textAlign="center">
          <Grid.Column computer={16}>
            <Navbar />
            {this.children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
