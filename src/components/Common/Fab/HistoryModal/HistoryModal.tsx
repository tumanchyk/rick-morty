import React from "react";

import { useSelector } from "react-redux";

import { RootState } from "../../../../store/store";

import { HistoryCard, Title, CloseBtn } from "./HistoryModal.styled";

type HistoryProps = {
    setIsHistoryOpen: (item: boolean) => void;
}
const HistoryModal: React.FC<HistoryProps> = ({ setIsHistoryOpen }) => {
    const storedActions = useSelector((state: RootState ) => state.history.storedList);
    

    return <HistoryCard>
        <Title>History</Title>
        <ul>
            {storedActions.map((action: string, index: number) =>
                <li key={index} style={{ marginBottom: "10px" }}>{action}</li>)}
        </ul>
        <CloseBtn onClick={() => setIsHistoryOpen(false)}>Close</CloseBtn>
    </HistoryCard>;
};
export default HistoryModal;