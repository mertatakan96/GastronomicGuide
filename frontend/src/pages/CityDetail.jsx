import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';
import RestaurantService from '../services/restaurantService';

export default function CityDetail() {
  const { city } = useParams();
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let restaurantService = new RestaurantService();
    restaurantService.getByCity(city).then((result) => setRestaurants(result.data));
  }, [city]);

  const goToRestaurantDetailPage = (id) => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div>
      <div>
      <h1>
        <img src={"https://rehber.vedatmilor.com/wp-content/themes/foodguide/design/img/categories/location.png"} alt="Location Icon" style={{ marginRight: "10px" }} />
        {city}
      </h1>
    </div>
      <Grid>
        <Grid.Row columns={2}>
          {restaurants.map((restaurant) => (
            <Grid.Column key={restaurant.id} style={{ padding: '10px' }}>
              <Segment style={{cursor: 'pointer'}}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''} 
                onClick={() => goToRestaurantDetailPage(restaurant.id)}>
                {restaurant.name}
              </Segment>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
