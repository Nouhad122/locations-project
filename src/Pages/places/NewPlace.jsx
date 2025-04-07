import React from 'react'
import Input from '../../Components/shared/FormElements/Input'
import classes from './NewPlace.module.css'

const NewPlace = () => {
  return (
    <form className={classes['place-form']}>
      <Input
       type="text" 
       label="title" 
       validators={[]} 
       errorText="Please enter a valid title."
      />
    </form>
  )
}

export default NewPlace
