import styled from "styled-components";
import { COLORS } from "../../utils/consts";

const AnnouncementsTable = styled.table`
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
    width: 100%;
    border: 3px solid black;
    border-collapse: collapse;
    color: ${COLORS.TEXT};
    overflow: auto;
`

export default AnnouncementsTable;