import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="Gastronomic Guide"/>
          <Menu.Item name="home" as={NavLink} to="/" />
        </Container>
      </Menu>
    </div>
  );
}
