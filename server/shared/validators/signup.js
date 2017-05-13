import Validator from 'validator';
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data){
  let errors = {};

  if(Validator.isEmpty(data.email)){
    errors.email = 'Email is required.';
  }

  if(!Validator.isEmail(data.email)){
    errors.email = 'The email address is not valid.';
  }

  if(Validator.isEmpty(data.password)){
    errors.password = 'Password is required.';
  }

  if(Validator.isEmpty(data.passwordConfirmation)){
    errors.password = 'Password is required.';
  }

  if(!Validator.equals(data.password, data.passwordConfirmation)){
    errors.passwordConfirmation = 'The password must match.'
  }

  return{
    errors,
    isValid: isEmpty(errors)
  }
}