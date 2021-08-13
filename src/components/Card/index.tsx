import React from "react";

import { Link } from "react-router-dom";

import animals from "../../assets/images";

import Star from "../Icons/Star";

import {
  CardContainer,
  Figure,
  Image,
  Figcaption,
  FigcaptionText,
  Stars,
  Price,
  Currency,
  Amount,
  Shipping,
  PrimeText,
  Text,
  TextBold,
} from "./styles";

interface Animal {
  image: keyof typeof animals;
  rating: number;
  price: string;
  slug: string;
  title: string;
};

interface Props {
  animal: Animal;
};

export default function Card(props: Props): JSX.Element {
  return(
    <CardContainer>
      <Link
        to={`/product/${props.animal.slug}`}
      >
        <Figure>
          <Image
            src={animals[props.animal.image]}
            alt="animal"
          />
        </Figure>
        <Figcaption>
          <FigcaptionText>
            {props.animal.title}
          </FigcaptionText>
        </Figcaption>
      </Link>
      <div>
        <Stars>
          <Star height="28px" width="28px" fill="var(--star)" />
          <Star height="28px" width="28px" fill="var(--star)" />
          <Star height="28px" width="28px" fill="var(--star)" />
          <Star height="28px" width="28px" fill="var(--star)" />
          <Star height="28px" width="28px" fill="var(--star)" />
        </Stars>
      </div>
      <Price>
        <Currency>CAD$</Currency>
        <Amount>{props.animal.price}</Amount>
      </Price>
      <Shipping>
        <PrimeText>prime</PrimeText>
        <Text> FREE delivery by </Text>
        <TextBold>
          {
            (new Date()).toLocaleString("en-US", {
              weekday: "long",
              month: "short",
              day: "2-digit"
            })
          }
        </TextBold>
      </Shipping>
    </CardContainer>
  );
};