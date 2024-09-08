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
      <div className="max-w-screen-md mx-auto pb-12 sm:pb-16 px-4 lg:px-0 ">
        <section className="grid gap-y-6 sm:gap-6 sm:grid-cols-2 w-full">
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
