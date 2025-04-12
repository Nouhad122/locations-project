import React from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../Components/shared/FormElements/Input'
import useForm from '../../hooks/useForm'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../util/validators'
import newYorkImage from '../../assets/images/new-york.jpg'
import classes from './PlaceForm.module.css'

const UpdatePlace = () => {
    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: 'Empire State Building',
            description: 'One of the most famous skyscrapers in the world!',
            imageUrl: newYorkImage,
            address: '20 W 34th St, New York, NY 10001',
            location: {
                lat: 40.7484405,
                lng: -73.9856644
            },
            creator: 'u1'
        },
        {
            id: 'p2',
            title: 'Empire State Building',
            description: 'One of the most famous skyscrapers in the world!',
            imageUrl: newYorkImage,
            address: '20 W 34th St, New York, NY 10001',
            location: {
                lat: 40.7484405,
                lng: -73.9856644
            },
            creator: 'u2'
        },

    ]

    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(place => place.id === placeId);

    const [formState, inputHandler] = useForm(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true
          },
          description: {
            value: identifiedPlace.description, 
            isValid: true
          }
        },
        true
    );

    const placeUpdateSubmitHandler = event =>{
        event.preventDefault();
        console.log(formState.inputs); // backend code goes here
    }

    if(!identifiedPlace){
        return (
           <div className='center'>
              <h2>Could not find place!</h2>
           </div> 
        ) 
    }

  return (
    <form className={classes['place-form']} onSubmit={placeUpdateSubmitHandler}>
      <Input 
        id='title'
        type="text" 
        label="title" 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText="Please enter a valid title."
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
        onInput={inputHandler}
      />

      <Input 
        id='description'
        isTextArea
        type="text" 
        label="description" 
        validators={[VALIDATOR_MINLENGTH(5)]} 
        errorText="Description should be minimum 5 characters long."
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
        onInput={inputHandler}
      />

      <button className={classes['place-form__button']} type="submit" disabled={!formState.isValid}>Update PLACE</button>
    </form>
  )
}

export default UpdatePlace
