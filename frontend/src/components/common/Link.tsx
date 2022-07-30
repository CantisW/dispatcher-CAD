import styled from "styled-components"

const Link = styled.a<{ color?: string | undefined, hoverColor?: string | undefined }>`
    text-decoration: none;
    cursor: pointer;
    color: ${props => (props.color !== undefined ? props.color : '#ffffff')};
    transition: color 100ms;
    :hover {
        color: ${props => (props.hoverColor !== undefined ? props.hoverColor : '')}
    }
`

export default Link;