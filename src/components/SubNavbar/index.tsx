import React from "react";

import {
  Container,
  Nav,
  List,
  ListItem,
  Anchor,
  AnchorHeading
} from "./styles";

interface Props {};

export default function SubNavbar(props: Props): JSX.Element {
  return(
    <Container>
      <Nav>
        <List>
          <ListItem>
            <Anchor
              target="_blank"
              rel="noopener noreferrer"
              href="/"
              title="See the GitHub repository on a new tab"
            >
              <AnchorHeading>
                GitHub
              </AnchorHeading>
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtu.be/CFrKTrMJIBY"
              title="See the GraphQL tutorial that was followed to build this page on a new tab"
            >
              <AnchorHeading>
                GraphQL Tutorial
              </AnchorHeading>
            </Anchor>
          </ListItem>
        </List>
      </Nav>
    </Container>
  );
};