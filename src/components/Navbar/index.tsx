import React from "react";

import Search from "../Search";

import Cart from "../Icons/Cart";

import {
  Container,
  Nav,
  ResponsiveNav,
  Title,
  List,
  ListItem,
  Anchor,
  Text,
  TextSmall,
  TextMedium,
  CartButton
} from "./styles";

interface Props {};

export default function Navbar(props: Props): JSX.Element {
  return(
    <Container>
      <ResponsiveNav>
        <List>
          <ListItem>
            <Anchor href="/animazon/">
              <Title>
                animazon.com
              </Title>
            </Anchor>
          </ListItem>
          <ListItem>
            <Text>
              <TextSmall>
                Hello, Sign in
              </TextSmall>
              <TextMedium>
                Account &amp; Lists
              </TextMedium>
            </Text>
          </ListItem>
        </List>
      </ResponsiveNav>
      
      <Nav>
        <List>
          <ListItem>
            <Anchor href="/animazon/">
              <Title>
                animazon.com
              </Title>
            </Anchor>
          </ListItem>
          <ListItem>
            <Text>
              <TextSmall>
                Deliver to
              </TextSmall>
              <TextMedium>
                Brazil
              </TextMedium>
            </Text>
          </ListItem>
          <ListItem>
            <Search />
          </ListItem>
          <ListItem>
            <Text>
              <TextSmall>
                Hello, Sign in
              </TextSmall>
              <TextMedium>
                Account &amp; Lists
              </TextMedium>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <TextSmall>
                Returns
              </TextSmall>
              <TextMedium>
                &amp; Orders
              </TextMedium>
            </Text>
          </ListItem>
          <ListItem>
            <CartButton>
              <Cart
                height="28px"
                width="28px"
                fill="var(--text)"
              />
              <TextMedium>
                Cart
              </TextMedium>
            </CartButton>
          </ListItem>
        </List>
      </Nav>
    </Container>
  );
};