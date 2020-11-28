import React, { useState, ChangeEvent, FormEvent } from "react";
import Pets from "./Pets";
import Form from "./Form";

import { Option } from "./types";

type ChangeValues = {
  input: string;
  option?: Option["id"];
};

const App = () => {
  // const [inputValue, setInputValue] = useState<string>("");

  // const [selectValue, setSelectValue] = useState<Option["id"]>("option1");

  const [inputChange, setInputChange] = useState<ChangeValues>({
    input: "",
    option: "option1",
  });

  const handleAllInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const id = event.currentTarget.id;
    const { value } = event.target;

    const payload = { ...inputChange, [id]: value };

    console.log("LOG ~ file: App.tsx ~ line 32 ~ App ~ ", {
      value,
      id,
      payload,
    });
    setInputChange(payload);
  };

  // const handleInputChange = (
  //   event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { value } = event.target;

  //   // console.log("LOG ~ file: App.tsx ~ line 39 ~ handleInputChange ~ value", value)

  //   console.log("LOG: handleInputChange -> ", { value });

  //   setInputValue(value);
  // };

  // const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   const { value } = event.target; // string
  //   console.log("LOG: handleSelectChange -> value", value);

  //   const optionValue = value as Option["id"];

  //   setSelectValue(optionValue);
  // };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert(`The following values were submitted: 
          inputValue: ${inputChange.input}
          selectValue: ${inputChange.option}
    `);

    // alert(`The following values were submitted:
    //       inputValue: ${inputValue}
    //       selectValue: ${selectValue}
    // `);
  };

  return (
    <div>
      <h1>hello, hack reactor</h1>

      <Pets name={"Butters"} age={2} nickname={"Professor Chaos"} />

      <br />
      <br />
      <br />
      <Form
        // value={inputValue}
        value={inputChange.input}
        handleAllInputChange={handleAllInputChange}
        // handleAllInputChange={handleInputChange}
        // handleInputChange={handleInputChange}
        // handleInputChange={handleInputChange}
        handleSubmit={handleFormSubmit}
        // handleSelectChange={handleSelectChange}
      />
    </div>
  );
};

export default App;
