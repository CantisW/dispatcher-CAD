import styled from "styled-components";
import { COLORS } from "../../utils/consts";

const TableHeader = styled.th`
    width: 100%;
    padding: 20px;
    border: 3px solid black;
    border-collapse: collapse;
    background-color: ${COLORS.BACKGROUND};
`

export default TableHeader;