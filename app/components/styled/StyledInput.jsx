import styled, {keyframes} from 'styled-components'

const kf = keyframes`
    from {
        outline-color: black
    }

    to {
        outline-color: rgb(111, 237, 178);
    }
`

export default styled.input`
    height:  15px;
    width:   400px;
    padding: 10px;
    border: 1px solid black;
    font-size: 14px;

    &:focus {
        outline: 2px solid rgb(111, 237, 178);
        animation: ${kf} 0.5s linear;
    }
`