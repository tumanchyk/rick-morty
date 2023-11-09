import FormControl from "@mui/material/FormControl";
import React, { useState, useEffect } from "react";

import { Button } from "../Flter.styled";

import MultipleSelectCheckmarks from "./MultipleSelectCheckmarks";
import MultiInputs from "./MultiInputs/MultiInputs";

const FilterForm: React.FC = () => {
    const [selectItem, setSelectItem] = useState<string[]>([]);
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
    
    return <FormControl  sx={{marginLeft: 18 }}>
        <div style={{ display: "flex", position: "relative" }}>
            <MultipleSelectCheckmarks selectItem={selectItem} setSelectItem={setSelectItem} />
            <MultiInputs inputArray={inputArray as string[]} selectItem={selectItem} />
            <Button style={{ width: "143px", marginLeft: 316}} type="submit">Find</Button>
        </div>
    </FormControl>;
};
export default FilterForm;