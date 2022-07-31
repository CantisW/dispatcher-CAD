import styled from "styled-components";

// so apparently centering text looks better than non-centered text
// when everything else adjacent to it is also centered
// so this is the solution!

const HeaderLargeText = styled.h2`
    flex: 1 1 0;
    width: 0;
    text-align: center;
`

export default HeaderLargeText;