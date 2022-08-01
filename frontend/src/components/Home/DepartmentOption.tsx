import styled from "styled-components";
import { COLORS } from "../../utils/consts";

const DepartmentOption = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 100%;
    margin-top: 5px;
    padding-top: 3px;
    padding-bottom: 3px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    color: ${COLORS.TEXT};
    background-color: ${COLORS.BACKGROUND};
    transition: background-color 100ms;
    :hover {
        background-color: ${COLORS.BUTTON_HOVER};
    }
`

export default DepartmentOption;