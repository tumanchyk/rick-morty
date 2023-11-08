import { useSelector } from "react-redux";
import { HistoryCard, Title, CloseBtn } from "./HistoryModal.styled";

const HistoryModal = ({ setIsHistoryOpen }) => {
    const storedActions = useSelector(state => state.history.storedList);
    

    return <HistoryCard>
        <Title>History</Title>
        <ul>
            {storedActions.map((action: string, index: number) => <li key={index} style={{marginBottom: "10px"}}>{action}</li>)}
        </ul>
        <CloseBtn onClick={() => setIsHistoryOpen(false)}>Close</CloseBtn>
    </HistoryCard>
}
export default HistoryModal;