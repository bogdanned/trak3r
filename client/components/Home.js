import React from 'react';
import {Grid} from 'semantic-ui-react';



class Home extends React.Component{
  render(){
    return(
      <Grid>
        <Grid.Column computer={5}>
          <CardExampleCard />
        </Grid.Column>
        <Grid.Column computer={5}>
          <CardExampleCard />
        </Grid.Column>
        <Grid.Column computer={5}>
          <CardExampleCard />
        </Grid.Column>
      </Grid>
    )
  }
}


export default Home;
