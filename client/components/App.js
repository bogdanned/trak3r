import React from 'react';
import Navbar from './Navbar.js';
import {Grid} from 'semantic-ui-react';
import CardExampleCard from './Card.js';
import About from './About.js';
import {Match} from 'react-router';


class App extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid.Row textAlign="center">
          <Grid.Column computer={16}>
            <Navbar />
          </Grid.Column>
          <Grid.Column computer={16}>
            <h3>Children Render Here</h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}


export default App;
