import styled from 'styled-components';

const StyledContainerContent = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	gap: ${props => props.gap ? props.gap : ''};
	padding: 1.5vw 0;
	margin-inline: auto;
	margin: ${props => props.margin ? props.margin : ''};
`;

function ContainerContent({ gap, children, margin }) {
	return (
		<StyledContainerContent gap={gap} margin={margin}>
			{ children }
		</StyledContainerContent>
	)
}

export default ContainerContent;
