import React, { useState } from "react";
import { useSelector } from "react-redux";

import { fabIcon } from "../../../assets/fab-icons";

import downloadCSV from "../../../unils/dowloadCSV";
import { selectCharacters } from "../../../store/characters/charactersSelectors";

import { FabWrap, FabItem, FabItemBig } from "./Fab.styled";
import HistoryModal from "./HistoryModal/HistoryModal";

type FabProps = {
    download: boolean
}
const Fab: React.FC<FabProps> = ({download}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const list = useSelector(selectCharacters);

    const onHistoryFab = () => {
        setIsHistoryOpen(true);
    };
    return <FabWrap>
        {isOpen ? <>
            <FabItem onClick={() => onHistoryFab()}>
                <img src={fabIcon.historyIcon} alt="history icon" />
            </FabItem>
            <FabItem  disabled={!download} onClick={() => downloadCSV(list)}>
                <img src={fabIcon.downloadIcon} alt="download icon" />
            </FabItem>
        </> : null}
        <FabItemBig onClick={() => setIsOpen(!isOpen)} >
            <img src={isOpen ? fabIcon.crossIcon : fabIcon.openIcon} alt="menu switcher" />
        </FabItemBig>
        {isHistoryOpen ? <HistoryModal setIsHistoryOpen={setIsHistoryOpen} /> : null}
    </FabWrap>;
};
export default Fab;