import React from 'react'
import PlacesList from '../../Components/places/PlacesList'
import newYorkImage from '../../assets/images/new-york.jpg'
import { useParams } from 'react-router-dom'
const UserPlaces = () => {
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

    const params = useParams();
    const userId = params.userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return (
    <PlacesList items={loadedPlaces}/>
  )
}

export default UserPlaces
