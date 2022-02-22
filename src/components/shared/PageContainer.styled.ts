import styled from "styled-components";

export const PageContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.shadeGrey100};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
  padding: 70px 20px 20px;

  @media only screen and (${({ theme }) => theme.tablet}) {
    padding: 0px 20px;
  }
`;
