import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    color: #ffffff;
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    font-family: Bello;
    font-size: 26px;
    margin: 1rem;
    

    @media only screen and (min-width: 1000px) {
        flex-basis: 0;
        flex-grow: 0;
        min-width: 150px;
    }
`

