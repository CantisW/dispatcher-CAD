import styled from "styled-components";
import { COLORS } from "../../utils/consts";

// an absolute shit name for a component
// too bad!
// if anyone has a better name hmu

const MainWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 90%;
    background-color: ${COLORS.BACKGROUND2};
    color: ${COLORS.TEXT};
`

export default MainWrapper;