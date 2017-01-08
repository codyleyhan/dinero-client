import React from 'react';
import RestaurantForm from './RestaurantForm';
import Restaurant from './Restaurant';

const Restaurants = (props) => {
  const { restaurants, user, createRestaurant } = props;

  const renderLoader = ({fetching}) => {
    if(fetching) {
      return (
        <div className="loader">Loading...</div>
      )
    }
  }

  const renderRestaurants = ({restaurants}) => {
    return restaurants.map((restaurant) => {
      return (
        <Restaurant restaurant={restaurant} key={restaurant.id} />
      )
    });
  }

  return (
    <div>
      <h2>Restaurants</h2>
      { renderLoader(restaurants) }
      { renderRestaurants(restaurants) }
      <RestaurantForm user={user} restaurants={restaurants} createRestaurant={createRestaurant} />
    </div>
  )
}

export default Restaurants;
