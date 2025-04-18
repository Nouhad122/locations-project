import React, { useEffect, useReducer } from 'react'
import classes from './Input.module.css'
import { validate } from '../../../util/validators'

const inputReducer = (state, action) =>{
  switch(action.type){
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      }

    case 'TOUCH':
      return{
        ...state,
        isTouched: true
      }

    default:
      return state;
  }
}

const Input = (props) => {

  const [inputState, dispatch] = useReducer(inputReducer,
    {
      value: props.initialValue || '', 
      isValid: props.initialValid || false, 
      isTouched: false
    }
  );

  const { id, onInput } = props;
  const { value, isValid } = inputState;
  
  useEffect(() =>{
    onInput(id, value, isValid);
  },[id, onInput, value, isValid]);

  const changeHandler = (event) =>{
    dispatch({ 
      type: 'CHANGE',
      val: event.target.value, 
      validators: props.validators 
    });
  }

  const touchHandler = () =>{
    dispatch({
      type: 'TOUCH',
    })
  }

  const element = props.isTextArea ? 
    <textarea
     id={props.id} 
     rows={props.rows || 3} 
     onChange={changeHandler}
     onBlur={touchHandler}
     value={inputState.value}
    /> :
    <input
     id={props.id} 
     type={props.type} 
     placeholder={props.placeholder} 
     onChange={changeHandler}
     onBlur={touchHandler} 
     value={inputState.value}
    />
  return (
    <div className={`${classes['form-control']} ${!inputState.isValid && inputState.isTouched && classes['form-control__invalid']}`}>
      <label htmlFor={props.id}>{props.label}</label>
      { element }
      { !inputState.isValid && inputState.isTouched &&
       <p className={classes['form-control__error-text']}>
        {props.errorText}
       </p>
      }
    </div>
  )
}

export default Input
