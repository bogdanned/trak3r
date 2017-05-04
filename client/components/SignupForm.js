import React from 'react';
import {Grid, Input, Button} from 'semantic-ui-react';


class SignUpForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {}
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
    const self = this;
    e.preventDefault();
    this.props.userSignupRequest(this.state)
      .then(function(res){
        self.setState({
          ...this.state,
          errors: res.body
        })
      })
      .catch(function(error){
        console.log(error);
      });
  }

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <Input
          fluid
          name='email'
          label='email'
          placeholder='yo@putmebackin.com'
          value={this.state.email}
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
        <Input
          fluid
          name='passwordConfirmation'
          label='Password Confirmation'
          placeholder='Confirmantion'
          value={this.state.passwordConfirmation}
          onChange={this.onChange}
        />
        <Button type="button" onClick={this.onSubmit}>Log In</Button>
      </form>
    )
  }
}



export default SignUpForm;
