import styled from 'styled-components';
import SocialMediaIcon from '../components/SocialMediaIcon';
import { media } from '../utilities/media';

const StyledSocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 1.2vw 0;
  gap: max(2vh, 0.5rem);

  @media ${media.mobilePhones} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: min(4vh, 1rem);
    grid-row-gap: min(4vh, 1rem);
  }
`;

function SocialMediaIcons() {
	return (
    <StyledSocialMediaIcons>
      <SocialMediaIcon
        type='fa-facebook'
        url='https://www.facebook.com/ctvnjhnrmmlp/'
      />
      <SocialMediaIcon
        type='fa-twitter'
        url='https://twitter.com/ctvnjhnrmmlp'
      />
      <SocialMediaIcon type='fa-github' url='https://github.com/ctvnjhnrmmlp' />
      <SocialMediaIcon
        type='fa-stack-overflow'
        url='https://stackoverflow.com/users/16833816/john-rommel-octaviano'
      />
      <SocialMediaIcon
        type='fa-linkedin'
        url='https://www.linkedin.com/in/ctvnjhnrmmlp/'
      />
      <SocialMediaIcon
        type='fa-hashnode'
        url='https://ctvnjhnrmmlp.hashnode.dev/'
      />
      <SocialMediaIcon type='fa-dev' url='https://dev.to/ctvnjhnrmmlp' />
      <SocialMediaIcon
        type='fa-medium'
        url='https://medium.com/@ctvnjhnrmmlp'
      />
    </StyledSocialMediaIcons>
  );
}

export default SocialMediaIcons;
