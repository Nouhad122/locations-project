import React, { useState } from 'react'
import Input from '../../Components/shared/FormElements/Input'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../util/validators'
import  useForm  from '../../hooks/useForm'
import Card from '../../Components/shared/UI/Card'
import classes from './Auth.module.css'
const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  }, false);

  const switchModeHandler = () => {
    if(!isLoginMode){
        setFormData({
            ...formState.inputs,
            name: undefined
        }, formState.inputs.email.isValid && formState.inputs.password.isValid
        )
    }
    else{
        setFormData({
            ...formState.inputs,
            name: {value: '', isValid: false}
        }, false
        )
    }
    setIsLoginMode((prevMode) => !prevMode);
  }

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  }

  return (
    <Card className={classes['authentication']}>
        <h2>Login Required</h2>
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
         <Input
          id="name"
          type="text" 
          label="Name" 
          validators={[VALIDATOR_MINLENGTH(1)]}
          errorText="Please enter a valid name."
          onInput={inputHandler}
         />
        )}

        <Input
         id="email"
         type="email" 
         label="Email" 
         validators={[VALIDATOR_EMAIL()]}
         errorText="Please enter a valid email address."
         onInput={inputHandler}
        />

        <Input
         id="password"
         type="password" 
         label="Password" 
         validators={[VALIDATOR_MINLENGTH(6)]}
         errorText="Please enter a valid password, at least 6 characters."
         onInput={inputHandler}
        />
        <button type="submit" className={classes['auth-button']} disabled={!formState.isValid}>{isLoginMode ? 'Login' : 'Signup'}</button>
        <button type="button" className={classes['switch-mode-button']} onClick={switchModeHandler}>Switch to {isLoginMode ? 'Signup' : 'Login'}</button>
      </form>
    </Card>
  )
}

export default Auth
