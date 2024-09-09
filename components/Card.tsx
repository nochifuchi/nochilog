import type { CardProps } from '@/types/types';
import { getDate, getMultiSelect, getText } from '@/utils/property';
import Link from 'next/link';
import type { FC } from 'react';

const Card: FC<CardProps> = ({ page }) => {
  return (
    <Link
      href={`/articles/${getText(page.properties.slug.rich_text)}`}
      className="grid gap-y-4 p-5 transition bg-base-light-gray hover:bg-base-gray shadow-lg rounded-lg"
    >
      <div className="inline-flex items-center justify-center h-14 text-5xl leading-none">
        {page.icon.emoji}
      </div>
      <div className="w-full">
        <h2 className="text-base overflow-anywhere font-bold leading-6 line-clamp-2">
          {getText(page.properties.name.title)}
        </h2>
      </div>
      <div className="self-end">
        <ul className="inline-flex gap-x-2">
          {getMultiSelect(page.properties.tags.multi_select).map((tag, index) => (
            <li
              key={index}
              className="text-sm text-white px-2 py-1 font-normal bg-primary-500 rounded-lg break-words"
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="text-right mt-3 text-gray-700 text-xs">
          {getDate(page.properties.published.date)}
        </p>
      </div>
    </Link>
  );
};

export default Card;
