import type { CardProps } from '@/types/types';
import { getDate, getMultiSelect, getText } from '@/utils/property';
import Link from 'next/link';
import type { FC } from 'react';

const Card: FC<CardProps> = ({ page }) => {
  return (
    <Link
      href={`/articles/${getText(page.properties.slug.rich_text)}`}
      className="grid gap-y-4 rounded-lg bg-base-light-gray p-5 shadow-lg transition hover:bg-base-gray"
    >
      <div className="inline-flex h-14 items-center justify-center text-5xl leading-none">
        {page.icon.emoji}
      </div>
      <div className="w-full">
        <h2 className="overflow-anywhere line-clamp-2 text-base font-bold leading-6">
          {getText(page.properties.name.title)}
        </h2>
      </div>
      <div className="self-end">
        <ul className="inline-flex gap-x-2">
          {getMultiSelect(page.properties.tags.multi_select).map((tag, index) => (
            <li
              key={index}
              className="break-words rounded-lg bg-primary-500 px-2 py-1 text-sm font-normal text-white"
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-right text-xs text-gray-700">
          {getDate(page.properties.published.date)}
        </p>
      </div>
    </Link>
  );
};

export default Card;
