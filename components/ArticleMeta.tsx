import type { ArticleMetaProps } from '@/types/types';
import { getDate, getMultiSelect, getText } from '@/utils/property';
import Link from 'next/link';
import type { FC } from 'react';

const ArticleMeta: FC<ArticleMetaProps> = ({ page }) => {
  return (
    <div className="rounded-md bg-primary-100 px-4 py-6">
      <div className="flex h-12 items-center justify-center text-5xl leading-none">
        {page.icon.emoji}
      </div>
      <h1 className="overflow-anywhere mt-3 text-center text-2xl font-bold sm:text-3xl">
        {getText(page.properties.name.title)}
      </h1>
      <p className="mt-2 text-center text-xs text-gray-600 sm:text-sm">
        {getDate(page.properties.published.date)}に公開
      </p>
      <div className="mt-4 flex justify-center">
        <ul className="inline-flex gap-x-2">
          {getMultiSelect(page.properties.tags.multi_select).map((tag, index) => (
            <li key={index}>
              <Link
                href={`/tags/${tag}`}
                className="transion rounded-full bg-primary-500 px-4 py-2 text-sm text-white hover:bg-primary-400 sm:text-base"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArticleMeta;
