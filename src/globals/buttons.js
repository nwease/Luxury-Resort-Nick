import styled from 'styled-components';
import { setColor, setRem, setLetterSpacing, setFont, setBorder, setTransition } from '../styles/styles';

export const PrimaryBtn = styled.button `
    display: inline-block;
    background: ${setColor.primaryColor};
    color: ${setColor.mainWhite};
    text-transform: capitalize;
    font-size: ${setRem(18)};
    
    ${setFont.mainFont};
    
    padding: ${setRem(17)} ${setRem(36)};
    
    ${setBorder({color: setColor.primaryColor})};
    ${setLetterSpacing()};
    ${setTransition()};
    
    &:hover {
        background: transparent;
        color: ${setColor.primaryColor};
    }
    
    ${props => `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}}`};
    
    text-decoration: none;
    cursor: pointer;
`;