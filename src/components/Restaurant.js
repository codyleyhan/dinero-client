import React from 'react';

const Restaurant = (props) => {
  const { restaurant } = props;

  return (
    <p>
      <span>Name: {restaurant.name} # {restaurant.restaurant_number}</span>
      <span> | ID: {restaurant.id}</span>
      <span> | address: {restaurant.address}</span>
      <span> | owner: {restaurant.owner.name}</span>
    </p>
  )
};

export default Restaurant;
