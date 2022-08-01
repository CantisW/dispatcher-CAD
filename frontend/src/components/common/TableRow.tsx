import styled from "styled-components";
import { COLORS } from "../../utils/consts";

const TableRow = styled.tr`
    width: 100%;
    border: 3px solid black;
    border-collapse: collapse;
    background-color: ${COLORS.BACKGROUND};
    :nth-of-type(odd) {
        background-color: ${COLORS.BACKGROUND2};
        color: ${COLORS.TEXT}
    }
`

export default TableRow;