import styled from 'styled-components';
import AccountLink from '../components/AccountLink';
import Container from '../containers/Container';
import ContainerContent from '../containers/ContainerContent';
import { media } from '../utilities/media';

const StyledParagraphCopyright = styled.p`
  font-size: clamp(1.09rem, calc(1.05rem + 0.21vw), 1.20rem);
  color: ghostwhite;
  margin: 0 auto;
`;

const StyledContainerAccountLink = styled.div`
  display: flex;
  justify-content: center;
  gap: 2vh;

  @media ${media.tablets} {
    flex-direction: column;
    align-items: center;
    margin: 4vh 0 4vh 0;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  background-color: #0a0a0a;
  padding: 3rem 0 3rem 0;
  margin-bottom: 0;
`;

function Footer() {
	return (
    <StyledFooter>
      <Container>
        <ContainerContent gap='5vh' margin=''>
          <StyledContainerAccountLink>
            <AccountLink
              name='Facebook'
              type='link--facebook'
              url='https://www.facebook.com/ctvnjhnrmmlp/'
            />
            <AccountLink
              name='Twitter'
              type='link--twitter'
              url='https://twitter.com/ctvnjhnrmmlp'
            />
            <AccountLink
              name='Github'
              type='link--github'
              url='https://github.com/ctvnjhnrmmlp'
            />
            <AccountLink
              name='Stack Overflow'
              type='link--stack-overflow'
              url='https://stackoverflow.com/users/16833816/john-rommel-octaviano'
            />
            <AccountLink
              name='LinkedIn'
              type='link--linkedin'
              url='https://www.linkedin.com/in/ctvnjhnrmmlp/'
            />
            <AccountLink
              name='Hashnode'
              type='link--hashnode'
              url='https://ctvnjhnrmmlp.hashnode.dev/'
            />
            <AccountLink name='Dev' type='link--dev' url='https://dev.to/ctvnjhnrmmlp' />
            <AccountLink name='Medium' type='link--medium' url='https://medium.com/@ctvnjhnrmmlp' />
          </StyledContainerAccountLink>
          <StyledParagraphCopyright className='paragraph--footer'>
            © 2022 John Rommel Octaviano. All Rights Reserved.
          </StyledParagraphCopyright>
        </ContainerContent>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
