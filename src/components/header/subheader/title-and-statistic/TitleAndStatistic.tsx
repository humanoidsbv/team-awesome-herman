import * as Styled from "../Subheader.styled";

interface TitleAndSubtitleProps {
  title: string;
  subtitle: string;
}

export const TitleAndSubtitle = ({ title, subtitle }: TitleAndSubtitleProps) => {
  return (
    <Styled.TitleAndSubtitle>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Divider>|</Styled.Divider>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </Styled.TitleAndSubtitle>
  );
};
