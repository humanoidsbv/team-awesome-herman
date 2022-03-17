import { ReactNode, useContext } from "react";
import { StoreContext } from "../../providers/StoreProvider";

import * as Styled from "./PageContainer.styled";

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  const state = useContext(StoreContext);
  const [isMenuVisible] = state.isMenuVisible;

  return <Styled.PageContainer isMenuVisible={isMenuVisible}>{children}</Styled.PageContainer>;
};
