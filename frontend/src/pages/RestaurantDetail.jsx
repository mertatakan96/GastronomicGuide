import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Card, Icon } from "semantic-ui-react";
import RestaurantService from "../services/restaurantService";
import Restaurant from "../layouts/Restaurant";
import RestaurantMap from "../layouts/RestaurantMap";

export default function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    let restaurantService = new RestaurantService();
    restaurantService.getById(id).then((result) => setRestaurant(result.data));
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>; // handle loading state
  }

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Restaurant restaurant={restaurant} />
          </Grid.Column>
          <Grid.Column width={8}>
            <RestaurantMap restaurant={restaurant} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
