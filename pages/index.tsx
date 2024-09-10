import Card from '@/components/Card';
import Layout from '@/components/Layout';
import { siteConfig } from '@/site.config';
import type { IndexProps } from '@/types/types';
import { fetchPages } from '@/utils/notion';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({});

  return {
    props: {
      pages: results ? results : [],
    },
    revalidate: 10,
  };
};

const Home: NextPage<IndexProps> = ({ pages }) => {
  const title = `トップページ | ${siteConfig.title}`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <div className="mx-auto max-w-screen-md px-4 pb-12 sm:pb-16 lg:px-0">
        <section className="grid w-full gap-y-6 sm:grid-cols-2 sm:gap-6">
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </section>
        {/* <section className="ml-0 md:ml-8 mb-7 md:md-0 shrink-0 md:w-64">サイド</section> */}
      </div>
    </Layout>
  );
};

export default Home;
