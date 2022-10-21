import { getAllPostIds, getPostData } from '../../pages/lib/posts';
import Layout from '../../pages/components/layout';
import Head from 'next/head';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}





export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
        <title>{postData.title}</title>
      </Head>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml }} />
      </Layout>
    );
  }