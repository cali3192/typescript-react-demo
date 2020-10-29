export type SelectId = "option1" | "option2" | "option3";
export type SelectName = "Option 1" | "Option 2" | "Option 3";

export type Option = {
  id: SelectId;
  name: SelectName;
};

export const options: Option[] = [
  { id: "option1", name: "Option 1" },
  { id: "option2", name: "Option 2" },
  { id: "option3", name: "Option 3" },
];
