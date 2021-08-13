import React from "react";

import { useQuery, gql, DocumentNode } from "@apollo/client";

import Categories from "../../components/Categories";
import Card from "../../components/Card";
import Hero from "../../components/Hero";

import animals from "../../assets/images";

import {
  Main,
  ProductList,
  Centered,
  Text,
} from "./styles";

interface Animal {
  image: keyof typeof animals;
  rating: number;
  price: string;
  slug: string;
  title: string;
};

const ANIMALS_QUERY: DocumentNode = gql`
  query {
    animals {
      image
      rating
      price
      slug
      title
    }
  }
`;

export default function HomePage(): JSX.Element {
  const { loading, error, data } = useQuery(ANIMALS_QUERY);

  if(loading) return(
    <Centered>
      <Text>Loading...</Text>
    </Centered>
  );

  if(error) return(
    <Centered>
      <Text>Error on data fetching</Text>
    </Centered>
  );

  return(
    <Main>
      <Hero />

      <Categories />

      <ProductList>
        {
          data.animals.map((animal: Animal, index: number) => {
            return(
              <Card
                key={index}
                animal={animal}
              />
            )
          })
        }
      </ProductList>
    </Main>
  );
};