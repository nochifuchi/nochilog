import ArticleMeta from '@/components/ArticleMeta';
import Layout from '@/components/Layout';
import type { ArticleProps, Params } from '@/types/types';
import { fetchBlocksByPageId, fetchPages } from '@/utils/notion';
import type { GetStaticProps, NextPage } from 'next';

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

const Article: NextPage<ArticleProps> = ({ page }) => {
  return (
    <Layout>
      <article className="w-full">
        {/* meta section */}
        <div className="my-12">
          <ArticleMeta page={page} />
        </div>

        {/* article */}
        <div className="my-12">article {page.content}</div>
      </article>
    </Layout>
  );
};

export default Article;
