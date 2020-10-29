import React, { FC } from "react";

type Props = {
  name: string;
  age: number;
  nickName?: string;
};

const Pet: FC<Props> = ({ name, age, nickName }) => {
  return (
    <div>
      <span>{`My pets name is ${name} and they are ${age} years old`} </span>
      <br />
      <span> {nickName && `It's nickname is ${nickName}`} </span>
    </div>
  );
};

export default Pet;
