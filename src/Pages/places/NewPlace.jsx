import React, { useCallback, useReducer } from 'react'
import Input from '../../Components/shared/FormElements/Input'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../util/validators'
import classes from './PlaceForm.module.css'
import useForm from '../../hooks/useForm'

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '', 
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      }
    },
    false
);


  const placeSubmitHandler = (event) =>{
    event.preventDefault();
    console.log(formState.inputs); //backend code will be here
  }
  return (
    <form className={classes['place-form']} onSubmit={placeSubmitHandler}>
      <Input
       id='title'
       type="text" 
       label="title" 
       validators={[VALIDATOR_REQUIRE()]} 
       errorText="Please enter a valid title."
       onInput={inputHandler}
      />

      <Input
       id='description'
       isTextArea
       type="text" 
       label="description" 
       validators={[VALIDATOR_MINLENGTH(5)]} 
       errorText="Description should be minimum 5 characters long."
       onInput={inputHandler}
      />
      <Input
       id='address'
       type="text" 
       label="address"
       validators={[VALIDATOR_REQUIRE()]}
       errorText="Please enter a valid address."
       onInput={inputHandler}
      />
      <button className={classes['place-form__button']} type="submit" disabled={!formState.isValid}>ADD PLACE</button>
    </form>
  )
}

export default NewPlace
