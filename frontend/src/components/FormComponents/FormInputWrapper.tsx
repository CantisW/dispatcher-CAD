import styled from "styled-components";
import { COLORS } from "../../utils/consts";

const FormInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    height: 100%;
    width: 80%;
    color: ${COLORS.TEXT};
`

export default FormInputWrapper;