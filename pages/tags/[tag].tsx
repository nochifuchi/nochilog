import Card from '@/components/Card';
import Layout from '@/components/Layout';
import { siteConfig } from '@/site.config';
import type { Params, TagProps } from '@/types/types';
import { fetchPages } from '@/utils/notion';
import { getMultiSelect } from '@/utils/property';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

export const getStaticPaths: GetStaticPaths = async () => {
  const { results }: { results: Record<string, any>[] } = await fetchPages({});

  const pathSet: Set<string> = new Set();
  for (const page of results) {
    for (const tag of getMultiSelect(page.properties.tags.multi_select)) {
      pathSet.add(tag);
    }
  }

  const paths = Array.from(pathSet).map((tag) => {
    return {
      params: {
        tag,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { tag } = ctx.params as Params;
  const { results } = await fetchPages({ tag });

  return {
    props: {
      pages: results ? results : [],
      tag,
    },
    revalidate: 10,
  };
};

const Tag: NextPage<TagProps> = ({ pages, tag }) => {
  const title = `${tag}の記事一覧 | ${siteConfig.title}`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <div className="mx-auto max-w-screen-md px-4 pb-12 sm:pb-16 lg:px-0">
        <h1 className="mb-8 text-center text-4xl">{tag}</h1>
        <section className="grid w-full gap-y-6 sm:grid-cols-2 sm:gap-6">
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Tag;
