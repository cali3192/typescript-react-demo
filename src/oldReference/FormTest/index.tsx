import React, { FC, ChangeEvent, FormEvent } from "react";

import { options } from "../../types";

type Props = {
  value: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;

  handleOptionChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Form: FC<Props> = ({
  value,
  handleInputChange,
  handleSubmit,
  handleOptionChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Input Form Example</label>
      <br />
      <input
        type="text"
        placeholder="default placeholder"
        value={value}
        onChange={handleInputChange}
      />

      <br />
      <br />

      <select id="option" name="option" onChange={handleOptionChange}>
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
