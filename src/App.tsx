import React, { useState, ChangeEvent, FormEvent } from "react";
import Pets from "./Pets";
import Form from "./Form";

import { Option } from "./types";

const App = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const [selectValue, setSelectValue] = useState<Option["id"]>("option1");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    console.log("LOG: handleInputChange -> ", { value });

    setInputValue(value);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target; // string
    console.log("LOG: handleSelectChange -> value", value);

    const optionValue = value as Option["id"];

    setSelectValue(optionValue);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert(`The following values were submitted: 
          inputValue: ${inputValue}
          selectValue: ${selectValue}
    `);
  };

  return (
    <div>
      <h1>hello, hack reactor</h1>

      <Pets name={"Butters"} age={2} nickname={"Professor Chaos"} />

      <br />
      <br />
      <br />
      <Form
        value={inputValue}
        handleInputChange={handleInputChange}
        handleSubmit={handleFormSubmit}
        handleSelectChange={handleSelectChange}
      />
    </div>
  );
};

export default App;
