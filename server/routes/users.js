import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty'

let router = express.Router();

function validateInput(data){
  let errors = {};

  console.log(data, 'data');

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

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);
  if(!isValid){
    res.status(400).json(errors);
  }
});


export default router;
