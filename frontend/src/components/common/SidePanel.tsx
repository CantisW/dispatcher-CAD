import styled from "styled-components";
import { COLORS } from "../../utils/consts";

const SidePanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 90%;
    width: 10%;
    background-color: ${COLORS.BACKGROUND};
    color: ${COLORS.TEXT};
`

export default SidePanel;