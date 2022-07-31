import styled from "styled-components";

// this is such a stupid solution
// but without it, the table won't overflow and size itself properly

const TableWrapper = styled.div`
    max-height: 50%;
    width: 30%;
    overflow: auto;
`

export default TableWrapper;