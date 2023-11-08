import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import { Button } from "../Flter.styled";
import MultipleSelectCheckmarks from "./MultipleSelectCheckmarks";
import MultiInputs from './MultiInputs/MultiInputs';

const FilterForm = () => {
    const [selectItem, setSelectItem] = useState<string[]>([]);

    return <FormControl  sx={{marginLeft: 18 }}>
        <div style={{ display: "flex", position: "relative" }}>
            <MultipleSelectCheckmarks selectItem={selectItem} setSelectItem={setSelectItem} />
            <MultiInputs selectItem ={selectItem} />
            <Button style={{ width: "143px", marginLeft: 316}}>Find</Button>
        </div>
    </FormControl>
}
export default FilterForm