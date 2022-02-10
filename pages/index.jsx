import { Header } from "../src/components/header/Header.tsx";
import GlobalStyle from "../global";
import { Main } from "../src/components/main/Main";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
};

export default Homepage;
