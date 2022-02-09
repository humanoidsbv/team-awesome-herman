import styled from 'styled-components';

export const MenuList = styled.ul`

    ${props => props.isActive ? 'display: flex' : 'display: none'};
    color: white;
    row-gap: 30px;
    flex-direction: column;
    font-family: Proxima Nova;
    font-size: 24px;
    height: 100vh;
    line-height: 24px;
    list-style: none;
    margin-top: 80px;
    padding: 0;
    text-align: center;

    ul {
    }

    li {
        margin: 10px;
    }

    a {
        color: white;
        text-decoration: none;
        padding: 10px;
    }

    @media only screen and (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        justify-content: start;
        list-style-type: none;
        align-items: center;
        font-family: Proxima Nova;
        font-size: 14px;
        margin-top: 0px;
        height: auto;
        row-gap: 0px;
    }

    a:hover {
        background-color: #1166a5;
        color: white;
    }
      
      a:active {
        color: white;
        text-decoration: underline;
      }

`
