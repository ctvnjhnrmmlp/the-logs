import Link from 'next/link';
import styled from 'styled-components';
import WeblogCard from '../components/WeblogCard';
import Container from '../containers/Container';
import ContainerContent from '../containers/ContainerContent';

const StyledContainerBlogs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vw 0 5vw 0;
  gap: min(5.5vw, 1.8rem);
`;

function WeblogCards({ allPostsData }) {
  return (
    <Container>
      <ContainerContent gap='' margin=''>
        <h2>Readings for the People</h2>
        <StyledContainerBlogs>
          {allPostsData.map(({ id, title, subtitle, date }) => {
            return (
              <Link key={id} href={`/posts/${id}`}>
                <WeblogCard
                  key={id}
                  title={title}
                  subtitle={subtitle}
                  date={date}
                />
              </Link>
            );
          })}
        </StyledContainerBlogs>
      </ContainerContent>
    </Container>
  );
}

export default WeblogCards;
