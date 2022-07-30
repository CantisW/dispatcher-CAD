import styled from "styled-components";
import { COLORS } from "../../utils/consts";

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 10%;
    width: 100%;
    background-color: ${COLORS.FOREGROUND};
    color: ${COLORS.TEXT}
`

export default Header;