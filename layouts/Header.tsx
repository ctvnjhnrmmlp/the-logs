import Link from 'next/link';
import styled from 'styled-components';
import ThemeToggler from '../components/ThemeToggler';
import Container from '../containers/Container';
import ContainerContent from '../containers/ContainerContent';
import SocialMediaIcons from '../containers/SocialMediaIcons';

const StyledHeader = styled.header`
	margin-top: 50vh 0 5vh 0;
`;

const HeadingTitle = styled.h1`
  font-size: clamp(2.8rem, 33vw + -2.83rem, 16.7rem);
  letter-spacing: -0.2vw;
  line-height: 1.025;
  margin-bottom: 0;
`;

const StyledParagraphAuthor = styled.h3`
  text-transform: uppercase;
  line-height: 1;
  margin-top: -0.5em;
`;

function Header() {
  return (
    <StyledHeader>
      <Container>
        <ContainerContent gap='1.88rem' margin='10vh 0 10vh 0'>
          <Link href={`/`}>
            <HeadingTitle>The Logs</HeadingTitle>
          </Link>
          <Link href={'https://ctvnjhnrmmlp.github.io'} target='_blank'>
            <StyledParagraphAuthor>John Rommel Octaviano</StyledParagraphAuthor>
          </Link>
          <SocialMediaIcons />
        </ContainerContent>
      </Container>
    </StyledHeader>
  );
}

export default Header;
