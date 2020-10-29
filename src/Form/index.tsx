import React, { FC, FormEvent, ChangeEvent } from "react";

import { options } from "../types";

type Props = {
  value: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;

  handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Form: FC<Props> = ({
  handleSubmit,
  value,
  handleInputChange,
  handleSelectChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="placeholder text"
        value={value}
        onChange={handleInputChange}
      />

      <br />
      <br />
      <select id="option" name="option" onChange={handleSelectChange}>
        {options.map(({ id, name }) => {
          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>

      <br />
      <br />

      <button>Submit</button>
    </form>
  );
};

export default Form;
