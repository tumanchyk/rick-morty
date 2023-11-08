import { useState } from "react";
import HistoryModal from "./HistoryModal/HistoryModal";
import { fabIcon } from "../../../assets/fab-icons";
import { FabWrap, FabItem } from "./Fab.styled";
import downloadCSV from "../../../unils/dowloadCSV";


const Fab = ({download, list}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const onHistoryFab = () => {
        setIsHistoryOpen(true)
    }
    return <FabWrap>
        {isOpen ? <>
            <FabItem size={"40px"} onClick={() => onHistoryFab()}>
                <img src={fabIcon.historyIcon} alt="history icon" />
            </FabItem>
            <FabItem size={"40px"} disabled={!download} onClick={() => downloadCSV(list)}>
                <img src={fabIcon.downloadIcon} alt="download icon" />
            </FabItem>
        </> : null}
        <FabItem onClick={() => { setIsOpen(!isOpen) }} size={"56px"}><img src={isOpen ? fabIcon.crossIcon : fabIcon.openIcon} alt="menu switcher" /></FabItem>
        {isHistoryOpen ? <HistoryModal setIsHistoryOpen={setIsHistoryOpen} /> : null}
    </FabWrap>
}
export default Fab;