import styled from "styled-components";
import { COLORS } from "../../utils/consts";

const FormButton = styled.button`
    height: 12%;
    width: 100%;
    border-radius: 20px;
    border: none;
    background-color: ${COLORS.BUTTON};
    color: inherit;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 100ms;
    :hover {
        background-color: ${COLORS.BUTTON_HOVER};
    }
`

export default FormButton;