import styled from 'styled-components';

// export const Menu = styled.div`
//     align-items: center;
//     background-color: #4f88ef;
//     display: flex;
//     flex-direction: column;
//     font-family: Proxima Nova;
//     font-size: 24px;
//     font-weight: 400;
//     height: 100vh;
//     justify-content: center;
//     padding-bottom: 30px;

//     @media only screen and (min-width: 960px) {
//     }
// `;

export const MenuList = styled.ul`
    color: white;
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    margin-top: 60px;
    font-family: Proxima Nova;
    font-size: 24px;
    line-height: 24px;
    list-style: none;
    padding: 0;
    text-align: center;
    height: 100vh;

    @media only screen and (min-width: 960px) {
        display: flex;
        flex-direction: row;
        justify-content: start;
    }

    li {
        margin: 20px;
    }

    a {
        color: white;
        text-decoration: none;
        padding: 10px;
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
