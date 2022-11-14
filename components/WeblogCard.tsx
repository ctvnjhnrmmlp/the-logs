import styled from 'styled-components';
import { media } from '../utilities/media';

const StyledWeblogCardContainer = styled.div`
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  gap: 1.5vw;
  width: min(65rem, 95%);
  padding: max(3vw, 1.5rem);
  outline: 1px solid #0a0a0a;
  transition: 0.5s ease;

  &:hover {
    box-shadow: rgba(14, 30, 37, 0.4) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.4) 0px 2px 16px 0px;
  }
`;

const StyledWeblogHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 0.1rem;
`;

const StyledWeblogCardHeader = styled.h4`
  line-height: 1;
  font-size: clamp(1.57rem, calc(1.55rem + 2.56vw), 2.68rem);
  text-align: center;

  @media ${media.smallTablets} {
    font-size: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.5rem);
  }
`;

const StyledWeblogCardSubtitle = styled.p`
  font-size: clamp(1.09rem, calc(1.05rem + 0.21vw), 1.2rem);
`;

const StyledWeblogCardDate = styled.p`
  font-size: clamp(0.91rem, calc(0.89rem + 0.10vw), 0.96rem);

`;

function WeblogCard({ title, subtitle, date }) {
  return (
    <StyledWeblogCardContainer>
      <StyledWeblogHeaderContainer>
      <StyledWeblogCardHeader>{title}</StyledWeblogCardHeader>
      <StyledWeblogCardDate>{date}</StyledWeblogCardDate>
      </StyledWeblogHeaderContainer>
      <StyledWeblogCardSubtitle>{subtitle}</StyledWeblogCardSubtitle>
    </StyledWeblogCardContainer>
  );
}

export default WeblogCard;
