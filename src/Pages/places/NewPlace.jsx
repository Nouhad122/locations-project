import React, { useCallback, useReducer } from 'react'
import Input from '../../Components/shared/FormElements/Input'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../util/validators'
import classes from './NewPlace.module.css'

const formReducer = (state, action) =>{
  switch(action.type){
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for(const inputId in state.inputs){
        if(inputId === action.inputId){
          formIsValid = formIsValid && action.isValid;
        }else{
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {value: action.value, isValid: action.isValid}
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
}

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {value: '', isValid: false},
      description: {value: '', isValid: false}
    },
    isValid: false
  });

  const inputHandler = useCallback((id, value, isValid) =>{
    dispatch({
      type: 'INPUT_CHANGE',
      inputId: id,
      value: value,
      isValid: isValid
    });

  }, []);

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
