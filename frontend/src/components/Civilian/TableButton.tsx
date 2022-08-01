import styled from "styled-components";
import { COLORS } from "../../utils/consts";

const TableButton = styled.button<{color?: string | undefined, hoverColor?: string | undefined}>`
    height: 30px;;
    width: 120px;
    padding: 5px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: ${COLORS.TEXT};
    transition: background-color 100ms;
    background-color: ${props => props.color !== undefined ? props.color : COLORS.FOREGROUND};
    :hover {
        background-color: ${props => props.hoverColor !== undefined ? props.hoverColor : COLORS.BUTTON_HOVER};
    }
`

export default TableButton;