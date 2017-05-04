import React from 'react';
import {Grid, Input, Button} from 'semantic-ui-react';
import { connect } from 'react-redux';


class SignUpForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
    this.props.userSignupRequest();
  }

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <Input
          fluid
          name='username'
          label='Username'
          placeholder='Joe Pesci ...'
          value={this.state.username}
          onChange={this.onChange}
        />
        <Input
          fluid
          name='password'
          label='Password'
          placeholder='K1tt3n'
          value={this.state.password}
          onChange={this.onChange}
        />
        <Button type="button" onClick={this.onSubmit}>Log In</Button>
      </form>
    )
  }
}



export default SignUpForm;
