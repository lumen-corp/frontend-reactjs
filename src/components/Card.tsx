import React, { VFC } from "react";

type CardProps = {
    title: string;
}

const Card: VFC<CardProps> = ({title}) => {
  return <div>Card - {title}</div>;
};

export default Card;