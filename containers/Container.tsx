import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-inline: auto;
  width: min(117.625rem, 93%);
`;

function Container({ children }) {
	return (
		<StyledContainer>
			{ children }
		</StyledContainer>
	)
}

export default Container;
