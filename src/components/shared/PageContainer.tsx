import { ReactNode } from "react";

import * as Styled from "./PageContainer.styled";

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return <Styled.PageContainer>{children}</Styled.PageContainer>;
};
