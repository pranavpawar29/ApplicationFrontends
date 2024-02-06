import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlace } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [errorState , setErrorState] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      const places = await fetchAvailablePlace();
      try {
        
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setErrorState({message : error.message || "Could not fetch places, please try again later."})
      }
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);

  if(errorState) {
    return (
      <Error title="An error occured!" message={errorState.message}/>
    );
  }

  // useEffect(() => {
  //   fetch('http://localhost:3000/places').then((response) => {
  //   return response.json();
  // }).then((resData) => {
  //   setAvailablePlaces(resData.places)
  // })}, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
