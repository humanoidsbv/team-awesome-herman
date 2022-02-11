import styled from "styled-components";

export const Profile = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
  margin-right: 24px;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ProfileButton = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 40px;
  display: flex;
  height: 40px;
  padding-left: 10px;
  padding-right: 3px;
`;

export const DropdownArrow = styled.div`
  align-items: center;
  display: flex;
  filter: brightness(0) invert(1);
  font-weight: bold;
  height: 10px;
  margin-left: 15px;
  width: 10px;
`;
export const Avatar = styled.div`
  background-image: url("assets/images/amijs.png");
  border-radius: 30px;
  height: 35px;
  margin-left: 8px;
  width: 35px;
`;
