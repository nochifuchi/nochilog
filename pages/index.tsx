import Card from '@/components/Card';
import Layout from '@/components/Layout';
import type { IndexProps } from '@/types/types';
import { fetchPages } from '@/utils/notion';
import type { GetStaticProps, NextPage } from 'next';

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
  return (
    <Layout>
      <div className="flex flex-col md:flex-row max-w-screen-lg lg:mx-auto px-2 lg:px-0 ">
        <section className="grid md:gap-6 md:grid-cols-2 w-full">
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </section>
        <section className="ml-0 md:ml-8 mb-7 md:md-0 shrink-0 md:w-64">サイド</section>
      </div>
    </Layout>
  );
};

export default Home;
