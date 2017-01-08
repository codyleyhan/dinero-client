const restaurantsDefaultState = {
  fetching: false,
  posting: false,
  restaurants: [],
  currentPage: -1,
  totalPages: -1,
  activeRestaurant: null,
  errors: {}
}

const restaurants = (state=restaurantsDefaultState, action) => {
  switch(action.type) {
    case 'FETCHING_RESTAURANT':
    case 'FETCHING_RESTAURANTS':
      return {
        ...state,
        fetching: true
      }

    case 'FETCH_RESTAURANT_ERROR':
    case 'FETCH_RESTAURANTS_ERROR':
      return {
        ...state,
        fetching: false,
        errors: action.errors
      }

    case 'FETCH_RESTAURANTS_SUCCESS':
      return {
        ...state,
        fetching: false,
        restaurants: action.restaurants,
        currentPage: action.meta.page,
        totalPages: action.meta.pages,
      }

    case 'FETCH_RESTAURANT_SUCCESS':
      return {
        ...state,
        fetching: false,
        activeRestaurant: action.restaurant,
      }

    case 'POSTING_RESTAURANT':
      return {
        ...state,
        posting: true
      }

    case 'POST_RESTAURANT_ERROR':
      return {
        ...state,
        posting: false,
        errors: action.errors
      }

    case 'POST_RESTAURANT_SUCCESS':
      return {
        ...state,
        posting: false,
        activeRestaurant: action.restaurant
      }

    default:
      return state;
  }
}

export {
  restaurantsDefaultState,
  restaurants
};

export default restaurants;
