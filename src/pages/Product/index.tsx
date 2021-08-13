import React from "react";

import { useParams } from "react-router-dom";
import { useQuery, gql, DocumentNode } from "@apollo/client";

import Star from "../../components/Icons/Star";

import animals from "../../assets/images";

import {
  Main,
  Centered,
  Text,
  ProductDetails,
  Detail,
  Figure,
  Image,
  Title,
  Stars,
  TextRating,
  TextStock,
  ContainerRowSpacedBetween,
  SectionSubtitle,
  Description,
  DescriptionListItem,
  BuySection,
  Price,
  Shipping,
  Button,
  ButtonText,
  Container,
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

const ANIMAL_QUERY: DocumentNode = gql`
  query($slug: String!) {
    animal(slug: $slug) {
      image
      title
      rating
      price
      description
      stock
    }
  }
`;

export default function ProductPage(): JSX.Element {
  const params: Params = useParams();

  const { loading, error, data } = useQuery(ANIMAL_QUERY, {
    variables: {
      slug: params.slug
    }
  });

  const animal: Animal = data ? data.animal : {};

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
      <ProductDetails>
        <Detail>
          <Container>
            <Figure>
              <Image
                src={animals[animal.image]}
                alt="Animal"
              />
            </Figure>
          </Container>
        </Detail>

        <Detail>
          <Container>
            <Title>{animal.title}</Title>
            
            <ContainerRowSpacedBetween>
              <Stars>
                <Star height="28px" width="28px" fill="var(--star)" />
                <Star height="28px" width="28px" fill="var(--star)" />
                <Star height="28px" width="28px" fill="var(--star)" />
                <Star height="28px" width="28px" fill="var(--star)" />
                <Star height="28px" width="28px" fill="var(--star)" />
                <TextRating>1402 ratings</TextRating>
              </Stars>
              
              <TextStock>{animal.stock} in stock</TextStock>
            </ContainerRowSpacedBetween>

            <SectionSubtitle>About this animal</SectionSubtitle>

            <Description>
              {
                animal.description.map((desc, index) => {
                  return(
                    <DescriptionListItem key={index}>
                      {desc}
                    </DescriptionListItem>
                  )
                })
              }
            </Description>
          </Container>
        </Detail>

        <Detail>
          <Container>
            <BuySection>
              <Price>CAD$ {animal.price}</Price>

              <Shipping>
                FREE delivery:{` `}
                {
                  (new Date()).toLocaleString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "2-digit"
                  })
                }
              </Shipping>

              <Button>
                <ButtonText>
                  Add to Cart
                </ButtonText>
              </Button>

              <Button>
                <ButtonText>
                  Buy Now
                </ButtonText>
              </Button>
            </BuySection>
          </Container>
        </Detail>
      </ProductDetails>
    </Main>
  );
};