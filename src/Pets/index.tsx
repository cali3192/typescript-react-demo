import React, { FC } from "react";

type Props = {
  name: string;
  age: number;
  nickname?: string;
};

const Pets: FC<Props> = ({ name, age, nickname }) => {
  return (
    <div>
      <span>{`My pet is named ${name} and they are ${age} years old`}</span>

      <span>{nickname && `They also answer to ${nickname}`}</span>
    </div>
  );
};

export default Pets;
