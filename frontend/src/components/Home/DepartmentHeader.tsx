import styled from "styled-components";
import { COLORS } from "../../utils/consts";

const DepartmentHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    border-radius: 15px 15px 0px 0px;
    border-bottom: 5px solid ${COLORS.YELLOW};
    color: ${COLORS.HEADER_TEXT};
    background-color: ${COLORS.BLUE};
`

export default DepartmentHeader;