import styled from "styled-components";
import { COLORS } from "../../utils/consts";

const PanelButton = styled.button<{ color?: string | undefined, hoverColor?: string | undefined }>`
    height: 30px;
    width: 100%;
    margin-top: 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    background-color: ${props => (props.color !== undefined ? props.color : COLORS.FOREGROUND)};
    color: ${COLORS.TEXT};
    transition: background-color 100ms;
    :hover {
        background-color: ${props => (props.hoverColor !== undefined ? props.hoverColor : COLORS.BUTTON_HOVER)};
    }
`

export default PanelButton;