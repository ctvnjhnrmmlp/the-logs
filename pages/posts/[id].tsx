import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../../layouts/Layout';
import { media } from '../../utilities/media';
import { getPostData, getPostsIds } from '../../utilities/posts';

const StyledWeblogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-inline: auto;
  width: 90%;
  margin-bottom: 10vh;
`;

const StyledWeblogTitle = styled.h2`
  margin: 0 0 10vh;
  margin-inline: auto;
  font-size: clamp(4rem, calc(3rem + 2.56vw), 5rem);
  text-align: center;

  @media ${media.tablets} {
    font-size: clamp(1.2rem, calc(1.7rem + 1.83vw), 2.5rem);
  }

  @media ${media.mobilePhones} {
    font-size: clamp(1rem, calc(1.2rem + 0.89vw), 1.3rem);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  font-size: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.5rem);

  & > p {
    text-align: justify;
  }

  p:last-child {
    text-align: center;
  }
`;

function Post({ postData }) {
	return (
    <>
      <Layout>
        <Head>
          <title>The Logs</title>
        </Head>
        <StyledWeblogContainer>
          <StyledWeblogTitle>{postData.title}</StyledWeblogTitle>
          <StyledDiv dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></StyledDiv>
        </StyledWeblogContainer>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default Post;
