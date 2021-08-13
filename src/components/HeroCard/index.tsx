import React from "react";

import animals from "../../assets/images";

import {
  Card,
  Figcaption,
  FigcaptionText,
  Image,
} from "./styles";

interface Props {
  image: keyof typeof animals;
  title: string;
};

export default function HeroCard(props: Props): JSX.Element {
  return(
    <Card>
      <div>
        <figure>
          <Figcaption>
            <FigcaptionText>
              {props.title}
            </FigcaptionText>
          </Figcaption>

          <Image
            src={animals[props.image]}
            alt="animal"
          />
        </figure>
      </div>
    </Card>    
  );  
};