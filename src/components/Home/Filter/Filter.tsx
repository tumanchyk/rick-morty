import FilterForm from "./FilterForm/FilterForm";
import { Button, FilterEl } from "./Flter.styled";
import { useState } from "react";

const Filter = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return <FilterEl>
        <Button onClick={()=> setIsFilterOpen(!isFilterOpen)}>{!isFilterOpen ? "remove filter" : "filter"}</Button>
        {isFilterOpen ? <FilterForm/> : null}
    </FilterEl>
}
export default Filter;