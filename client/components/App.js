import React from 'react';
import {Route} from 'react-router';
import {Grid} from 'semantic-ui-react';
import CardExampleCard from './Card.js';
import About from './About.js';
import Home from './Home.js';
import SignupPage from './SignupPage.js';
import FlashMessageList from './FlashMessageList.js';
import Navbar from './Navbar.js';


/* App */
class App extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid.Row textAlign="center">
          <Grid.Column computer={16}>
            <Navbar />
          </Grid.Column>
          <Grid.Column computer={16}>
            <FlashMessageList />
          </Grid.Column>
          <Grid.Column computer={16}>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={SignupPage} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}


export default App;
