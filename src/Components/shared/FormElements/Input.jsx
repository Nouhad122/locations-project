import React, { useReducer } from 'react'
import classes from './Input.module.css'

const inputReducer = (state, action) =>{
  switch(action.type){
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: true
      }
    default:
      return state;
  }
}

const Input = (props) => {

  const [inputState, dispatch] = useReducer(inputReducer, {value: '', isValid: false}); 

  const changeHandler = (event) =>{
    dispatch({ type: 'CHANGE', value: event.target.value });
  }

  const element = props.isTextArea ? 
    <textarea
     id={props.id} 
     rows={props.rows || 3} 
     onChange={changeHandler} 
    /> :
    <input
     id={props.id} 
     type={props.type} 
     placeholder={props.placeholder} 
     onChange={changeHandler}
    />
  return (
    <div className={`${classes['form-control']} ${!inputState.isValid && 'form-control__invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      { element }
      { !inputState.isValid &&
       <p className={classes['form-control__error-text']}>
        {props.errorText}
       </p>
      }
    </div>
  )
}

export default Input
