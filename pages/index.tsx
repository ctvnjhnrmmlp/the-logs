import Head from 'next/head';
import Script from 'next/script';
import Layout from '../layouts/Layout';
import WeblogCards from '../containers/WeblogCards';
import { getSortedPostsData } from '../utilities/posts';

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout>
        <Head>
          <title>The Logs</title>
        </Head>
        <Script src='https://kit.fontawesome.com/c34fcef634.js' />
        <WeblogCards allPostsData={allPostsData} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    }
  }
}
