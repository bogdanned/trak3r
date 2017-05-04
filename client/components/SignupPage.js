import React from 'react';
import {Grid, Input, Button} from 'semantic-ui-react';
import SignUpForm from './SignUpForm.js';
import { connect } from 'react-redux';
import userSignupRequest from '../actions/signupActions.js';


class SignUpPage extends React.Component{
  render(){
    const { userSignupRequest } = this.props;
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column computer={8} textAlign="left">
            <SignUpForm userSignupRequest={userSignupRequest} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}


export default connect((state) => { return {} }, {userSignupRequest})(SignUpForm);
