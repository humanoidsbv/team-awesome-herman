import styled from 'styled-components';

export const MenuDesktop = styled.div`

    @media only screen and (max-width: 960px) {
        display: none;
    }

    ul {
        display: flex;
        flex-direction: start;
        list-style-type: none;
        align-items: center;
        font-family: Proxima Nova;
        column-gap: 10px;
        font-size: 14px;

    }

    li {
        color: white;

    }

    a {
        color: white;
        text-decoration: none;
        padding: 8px;
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
