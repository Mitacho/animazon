import React from "react";

import { useParams } from "react-router-dom";
import { useQuery, gql, DocumentNode } from "@apollo/client";

import Card from "../../components/Card";

import animals from "../../assets/images";

import {
  Centered,
  Main,
  ProductList,
  Text,
  Title
} from "./styles";

interface Animal {
  image: keyof typeof animals;
  rating: number;
  price: string;
  slug: string;
  title: string;
  description: Array<string>;
  stock: number;
};

interface Params {
  slug: string;
};

const CATEGORIES_QUERY: DocumentNode = gql`
  query Query($slug: String!) {
    category(slug: $slug) {
      id
      slug
      category
      animals {
        image
        rating
        price
        slug
        title
      }
    }
  }
`;

export default function ProductsPage(): JSX.Element {
  const params: Params = useParams();

  const { loading, error, data } = useQuery(CATEGORIES_QUERY, {
    variables: {
      slug: params.slug
    }
  });

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
      <Title>{data.category.category}</Title>

      <ProductList>
        {
          data.category.animals.map((animal: Animal, index: number) => {
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