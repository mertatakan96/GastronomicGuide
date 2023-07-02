import React from "react";
import { Card, Icon } from 'semantic-ui-react';

export default function Restaurant({ restaurant }) {
  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Card.Header>{restaurant.name}</Card.Header>
          <Card.Meta>{restaurant.address}</Card.Meta>
          <Card.Description>{restaurant.info}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="phone" />
          {restaurant.phone}
        </Card.Content>
      </Card>
    </div>
  );
}
