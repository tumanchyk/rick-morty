import { useEffect, useState } from "react";
import { InputsWrapper, Input } from "./MultiInputs.styled"

const MultiInputs = ({ selectItem }) => {
    const [currentInput, setCurrentInputs] = useState(new Set());

  useEffect(() => {
    if (selectItem.includes("Location")) {
      currentInput.add("Add Name");
      currentInput.add("Add Type");
      currentInput.add("Add Dimension");
    } else if (selectItem.includes("Character")) {
      currentInput.add("Add Name");
      currentInput.add("Add Status");
      currentInput.add("Add Species");
      currentInput.add("Add Type");
      currentInput.add("Add Gender");
    } else if (selectItem.includes("Episodes")) {
      currentInput.add("Add Name");
      currentInput.add("Add Episodes");
    }

    setCurrentInputs(new Set(currentInput)); 
  }, [selectItem]);

  const inputArray = Array.from(currentInput);

    return <InputsWrapper>
      {selectItem.length >= 1 ? ( inputArray.map(item => <Input type="text" placeholder={item} id={item}  key={item} />)) : <Input type="text" placeholder="Add key words to find"/>}
    </InputsWrapper>
}
export default MultiInputs;

        