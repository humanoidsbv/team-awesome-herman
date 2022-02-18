import styled from "styled-components";

export const PageContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.shadeGrey100};
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  padding: 210px 20px 20px;

  @media only screen and (${({ theme }) => theme.tablet}) {
    padding-top: 20px;
  }
`;
