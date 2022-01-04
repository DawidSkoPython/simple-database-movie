import styled from 'styled-components';

const LoadableImageStyled = styled.img`
    display: block;
    height: 100%;
    width: 100%;
    margin: auto;
    background-color: #dbdbdb;

    @media (max-width: 768px) {
        flex: 100%;
        max-width: 100%;
        height: auto;
    }
`

export default LoadableImageStyled;