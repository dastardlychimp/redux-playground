import styled from 'styled-components'

export default styled.input`
    height:  ${ props => props.height || '' };
    width:   ${ props => props.width  || '20%' };
    font-size: 16px;

    padding: 8px;
    margin: 8px;

    border: 1px solid black;
    outline: 0px solid black;

    transition: outline 0s;

    &:focus {
        outline: 2px solid rgb(111, 237, 178);
        transition: outline 0.3s ease;
    }

    ${ props => props.otherStyle ? props.otherStyle : '' }
`