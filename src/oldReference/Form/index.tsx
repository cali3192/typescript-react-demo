import React, { FC, ChangeEvent, FormEvent } from "react";

import { options } from "../../types";

type Props = {
  value: string;
  handleChangeTextInput: (event: ChangeEvent<HTMLInputElement>) => void;

  textAreaValue: string;
  handleChangeTextAreaInput: (event: ChangeEvent<HTMLTextAreaElement>) => void;

  rangeValue: number;
  hanldeChangeRangeInput: (event: ChangeEvent<HTMLInputElement>) => void;

  // optionValue: Option["id"];
  handleChangeOption: (event: ChangeEvent<HTMLSelectElement>) => void;

  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const Form: FC<Props> = ({
  value,
  handleChangeTextInput,
  textAreaValue,
  handleChangeTextAreaInput,
  rangeValue,
  hanldeChangeRangeInput,
  handleChangeOption,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Demo Form</label>

      <br />
      <br />

      <label>text input</label>
      <br />
      <input
        type="text"
        placeholder="enter something!"
        value={value}
        onChange={handleChangeTextInput}
      />

      <br />
      <br />

      <label>text area input</label>
      <br />
      <textarea
        id="hrnycdemo"
        name="textarea-demo"
        rows={5}
        cols={20}
        value={textAreaValue}
        onChange={handleChangeTextAreaInput}
      >
        {/* here is a long text area input to show for the demo */}
      </textarea>

      <br />
      <br />

      {/* slider - TS to number */}
      <input
        type="range"
        min={0}
        max={10}
        value={rangeValue}
        onChange={hanldeChangeRangeInput}
      />

      <br />
      <br />

      <select name="options" id="options" onChange={handleChangeOption}>
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

      <button>Submit!</button>
    </form>
  );
};

export default Form;
