import type { ArticleMetaProps } from '@/types/types';
import { getDate, getMultiSelect, getText } from '@/utils/property';
import Link from 'next/link';
import type { FC } from 'react';

const ArticleMeta: FC<ArticleMetaProps> = ({ page }) => {
  return (
    <div className="px-4 py-6 bg-primary-100 rounded-md">
      <div className="flex items-center justify-center h-12 text-5xl leading-none">
        {page.icon.emoji}
      </div>
      <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-center overflow-anywhere">
        {getText(page.properties.name.title)}
      </h1>
      <p className="mt-2 text-center text-xs sm:text-sm text-gray-600">
        {getDate(page.properties.published.date)}に公開
      </p>
      <div className="mt-4 flex justify-center">
        <ul className="inline-flex gap-x-2">
          {getMultiSelect(page.properties.tags.multi_select).map((tag, index) => (
            <li key={index}>
              <Link
                href={`/tags/${tag}`}
                className="py-2 px-4 text-sm sm:text-base rounded-full bg-primary-500 hover:bg-primary-400 text-white transion"
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
