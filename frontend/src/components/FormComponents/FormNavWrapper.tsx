import styled from "styled-components";
import { COLORS } from "../../utils/consts";

const FormNavWrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 55%;
    width: 22%;
    margin: auto;
    border-radius: 0px;
    color: ${COLORS.HEADER_TEXT};
    background-color: ${COLORS.FOREGROUND};
    
`
export default FormNavWrapper;