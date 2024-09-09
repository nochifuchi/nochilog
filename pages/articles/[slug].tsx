import ArticleMeta from '@/components/ArticleMeta';
import Layout from '@/components/Layout';
import type { ArticleProps, Params } from '@/types/types';
import { fetchBlocksByPageId, fetchPages } from '@/utils/notion';
import { getText } from '@/utils/property';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NotionBlocks } from 'notion-block-renderer';

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await fetchPages({});
  const paths = results.map((page: any) => {
    return {
      params: {
        slug: getText(page.properties.slug.rich_text),
      },
    };
  });
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as Params;

  const { results } = await fetchPages({ slug });
  // ページ情報（配列で返ってくるので最初の配列を取得）
  const page = results[0];
  const pageId = page.id;
  // ページの中身（blocks）
  const { results: blocks } = await fetchBlocksByPageId(pageId);

  return {
    props: {
      page,
      blocks,
    },
    revalidate: 10,
  };
};

const Article: NextPage<ArticleProps> = ({ page, blocks }) => {
  return (
    <Layout>
      <article className="mx-auto max-w-screen-md px-4 lg:px-0">
        {/* meta section */}
        <ArticleMeta page={page} />

        {/* article */}
        <div className="py-8">
          <NotionBlocks blocks={blocks} isCodeHighlighter={true} />
        </div>
      </article>
    </Layout>
  );
};

export default Article;
