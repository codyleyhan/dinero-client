import React from 'react';
import Errors from './Errors';

const RestaurantForm = React.createClass({
  getInitialState() {
    return {
      restaurant_number: 1,
      address: '',
      name: ''
    }
  },

  render() {
    const { restaurants, user, createRestaurant } = this.props;
    const { errors } = restaurants;

    return (
      <div>
        <h1>Create a Restaurant</h1>
        <Errors errors={errors} />
        <label>Name</label>
        <input type="text" value={this.state.name} placeholder="Name" onChange={(e) => {
          this.setState({
            ...this.state,
            name: e.target.value
          });
        }} />
        <br />

        <label>Address</label>
        <input type="address" value={this.state.address} placeholder="Address" onChange={(e) => {
          this.setState({
            ...this.state,
            address: e.target.value
          });
        }}  />
        <br />

        <label>Restaurant Number</label>
        <input type="number" min="1" value={this.state.restaurant_number} onChange={(e) => {
          this.setState({
            ...this.state,
            restaurant_number: e.target.value
          });
        }}  />
        <br />

        {restaurants.posting ? (
          <span className="loader">Loading...</span>
        ) : (
          <button onClick={e => {
            e.preventDefault();

            const restaurant = {
              ...this.state,
              user
            }

            createRestaurant(restaurant);
          }}>Create restaurant</button>
        )}
      </div>
    )
  }
});

RestaurantForm.propTypes = {
  user: React.PropTypes.object,
  restaurants: React.PropTypes.object
};


export default RestaurantForm;
