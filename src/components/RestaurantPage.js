import React from 'react';

import Restaurant from './Restaurant';

const RestaurantPage = (props) => {
  const { restaurants } = props;

  
  return (
    <div>
      { restaurants.fetching ? (
        <div className="loader">Loading...</div>
      ) : (
        <div>
          <h1>Restaurant id:{props.params.id}</h1>
          <Restaurant restaurant={restaurants.activeRestaurant} />
        </div>
      )}
    </div>
  )
}

export default RestaurantPage;
