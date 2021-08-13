import React from "react";

import Loupe from "../../components/Icons/Loupe";

import {
  Form,
  Select,
  Input,
  SearchButton
} from "./styles";

interface Props {};

export default function Search(props: Props): JSX.Element {
  return(
    <Form
      onSubmit={(event) => event.preventDefault()}
    >
      <Select>
        <option value="All">All</option>
        <option value="cats">Cats</option>
        <option value="mammals">Mammals</option>
        <option value="reptiles">Reptiles</option>
        <option value="ocean-creatures">Ocean Creatures</option>
      </Select>
      <Input />
      <SearchButton>
        <Loupe
          height="28px"
          width="28px"
          fill="#333333"
        />
      </SearchButton>
    </Form>
  );
};