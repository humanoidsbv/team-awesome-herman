import styled from "styled-components";

export const PageContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.shadeGrey100};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 50px;
  max-width: 1000px;
  padding: 0px 10px 20px;

  @media only screen and (${({ theme }) => theme.tablet}) {
    padding: 0px 10px;
  }
`;
