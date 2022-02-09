import styled from 'styled-components';

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 24px;

    @media only screen and (max-width: 960px) {
        display: none;
    }
`
export const ProfileButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding-right: 3px;
    padding-left: 10px;
    border-radius: 40px;
    height: 40px;
`

export const DropdownArrow = styled.div`

    display: flex;
    align-items: center;
    margin-left: 15px;
    filter: brightness(0) invert(1);
    font-weight: bold;
    width: 10px;
    height: 10px;
    `

    export const Avatar = styled.div`
    height: 35px;
    width: 35px;
    border-radius: 30px;
    background-image: url('assets/images/amijs.png');
    margin-left: 8px;

    `
