import styled from "styled-components";

export const PageContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.shadeGrey100};
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;

  @media screen and (max-width: 600px) {
    padding-top: 190px;
  }
`;
