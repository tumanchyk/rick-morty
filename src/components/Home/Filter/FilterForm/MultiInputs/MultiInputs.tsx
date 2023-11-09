import { InputsWrapper, Input } from "./MultiInputs.styled";

interface MultiInputsProps {
  inputArray: string[];
  selectItem: string[];
}

const MultiInputs: React.FC<MultiInputsProps> = ({ inputArray, selectItem }) => {
    return <InputsWrapper>
      {selectItem.length >= 1 ? ( inputArray.map(item => <Input type="text" placeholder={item} id={item}  key={item} />)) : <Input type="text" placeholder="Add key words to find"/>}
    </InputsWrapper>
}
export default MultiInputs;

        