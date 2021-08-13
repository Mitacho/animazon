import React from "react";

import { useQuery, gql, DocumentNode } from "@apollo/client";

import animals from "../../assets/images";

import {
  Section,
  Card,
  Figure,
  Figcaption,
  FigcaptionText,
  Image,
  Text,
} from "./styles";
import { Centered } from "../Hero/styles";
import { Link } from "react-router-dom";

interface Category {
  image: keyof typeof animals;
  slug: string;
  category: string;
};

interface Props {};

const ANIMALS_QUERY: DocumentNode = gql`
  query {
    categories {
      image
      slug
      category
    }
  }
`;

export default function Categories(props: Props): JSX.Element {
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
    <Section>
      {
        data.categories.map((category: Category, index: number) => {
          return(
            <Link
              key={index}
              to={`/products/${category.slug}`}
            >
              <Card>
                <div>
                  <Figure>
                    <Image
                      src={animals[category.image]}
                      alt="animal"
                    />

                    <Figcaption>
                      <FigcaptionText>
                        {category.category}
                      </FigcaptionText>
                    </Figcaption>
                  </Figure>
                </div>
              </Card>
            </Link>
          )
        })
      }
    </Section>    
  );
};