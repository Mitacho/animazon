import React from "react";

import { useQuery, gql, DocumentNode } from "@apollo/client";

import HeroCard from "../HeroCard";

import animals from "../../assets/images";

import {
  Cards,
  Centered,
  Image,
  MessageContainer,
  Section,
  Title,
} from "./styles";

interface Card {
  image: keyof typeof animals;
  title: string;
};

interface Props {};

const FETCH_MAIN_CARDS: DocumentNode = gql`
  query {
    mainCards {
      image
      title
    }
  }
`;

export default function Hero(props: Props): JSX.Element {
  const { loading, error, data } = useQuery(FETCH_MAIN_CARDS);

  if(loading) return(
    <Section>
      <MessageContainer>
        <Title>Loading ...</Title>
      </MessageContainer>
    </Section>
  );

  if(error) return(
    <Section>
      <MessageContainer>
        <Title>Error on data fetching</Title>
      </MessageContainer>
    </Section>
  );

  return(
    <Section>
      <MessageContainer>
        <Centered>
          <Title>
            Find your new four-legged best friend
          </Title>
        </Centered>
        <Image
          alt="Rhino image"
          src={animals.rhino}
        />
      </MessageContainer>
      <Cards>
        {
          data.mainCards.map((card: Card, index: number) => {
            return(
              <HeroCard
                key={index}
                image={card.image}
                title={card.title}
              />
            )
          })
        }
      </Cards>
    </Section>
  );
};