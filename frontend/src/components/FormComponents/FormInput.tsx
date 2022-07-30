import styled from "styled-components";
import { COLORS } from "../../utils/consts";

const FormInput = styled.input`
    height: 9%;
    width: 100%;
    margin: 5px 0px 15px 0;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 2px 5px 5px;
    border-radius: 2px;
    border: none;
    background-color: ${COLORS.INPUT};
`

export default FormInput;