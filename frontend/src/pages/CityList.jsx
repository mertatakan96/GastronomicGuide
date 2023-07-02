import React, { useState, useEffect } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import RestaurantService from "../services/restaurantService";

export default function CityList() {
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let restaurantService = new RestaurantService();
    restaurantService.getCities().then((result) => setCities(result.data));
  }, []);

  const goToCityDetailPage = (city) => {
    navigate(`/city/${city}`);
  };

  return (
    <div>
      <Grid>
        <Grid.Row columns={2}>
          {cities.map((city) => (
            <Grid.Column key={city} style={{ padding: '10px' }}>
              <Segment
                style={{cursor: 'pointer'}}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
                onClick={() => goToCityDetailPage(city)}
              >
                {city}
              </Segment>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
