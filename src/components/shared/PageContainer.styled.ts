import styled from "styled-components";

export const PageContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.shadeGrey100};
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 600px) {
    padding-top: 210px;
  }
`;
