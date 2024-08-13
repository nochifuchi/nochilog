import Card from '@/components/Card';
import Layout from '@/components/Layout';
import { siteConfig } from '@/site.config';
import { sampleCards } from '@/utils/sample';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-full pt-12">
        <h1 className="text-5xl mb-8">{siteConfig.title}</h1>
        <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">
          {sampleCards.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
