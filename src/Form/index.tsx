import React, { FC, FormEvent, ChangeEvent } from "react";

import { options } from "../types";

type Props = {
  value: string;
  // handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;

  // handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleAllInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

const Form: FC<Props> = ({
  handleSubmit,
  value,
  // handleInputChange,
  // handleSelectChange,
  handleAllInputChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="input"
        type="text"
        placeholder="placeholder text"
        value={value}
        // onChange={handleInputChange}
        onChange={handleAllInputChange}
      />

      <br />
      <br />
      <select
        id="option"
        name="option"
        // onChange={handleSelectChange}
        onChange={handleAllInputChange}
      >
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
