import React, {
  FC,
  useState,
  ChangeEvent,
  FormEvent,
  useCallback,
  // MouseEvent
} from "react";

import Pets from "./Pets";
import Form from "./Form";

import { Option } from "../types";

const App: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  // text area value
  const [textAreaInput, setTextAreaInput] = useState<string>(
    "here is some long text area input value before we submit"
  );

  // slider value
  const [rangeValue, setRangeValue] = useState<number>(5);

  // option values
  const [optionValue, setOptionValue] = useState<Option["id"]>("option1");

  const handleChangeInputText = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      // console.log("LOG: handleChangeInputText -> value", value);

      setInputValue(value);
    },
    []
  );

  const handleChangeTextArea = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target;

      setTextAreaInput(value as string);
    },
    [setTextAreaInput]
  );

  const handleChangeRangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      const valueToNumber = parseInt(value, 10) as number;

      setRangeValue(valueToNumber);
    },
    [setRangeValue]
  );

  const handleChangeOption = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;
      console.log("LOG: App:FC -> value", value);

      const optionValue = value as Option["id"];

      setOptionValue(optionValue);
    },
    [setOptionValue]
  );

  console.log("LOG: App:FC ->", {
    inputValue,
    textAreaInput,
    rangeValue,
    optionValue,
  });

  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert(`
      inputValue: ${inputValue} 
      textAreaInput: ${textAreaInput} 
      rangeValue: ${rangeValue} 
      optionValue: ${optionValue} 
    `);
  };

  return (
    <div className="App">
      hello, hack reactor
      <Pets name={"Butters"} age={2} nickName={"Professor Chaos"} />
      {/* form */}
      <Form
        value={inputValue}
        handleChangeTextInput={handleChangeInputText}
        textAreaValue={textAreaInput}
        handleChangeTextAreaInput={handleChangeTextArea}
        rangeValue={rangeValue}
        hanldeChangeRangeInput={handleChangeRangeInput}
        // optionValue={optionValue}
        handleChangeOption={handleChangeOption}
        handleSubmit={submitFormHandler}
      />
      {/* <Form
        value={inputValue}
        handleInputChange={handleChangeInputText}
        handleSubmit={submitFormHandler}
        handleOptionChange={handleChangeOption}
      /> */}
    </div>
  );
};

export default App;
