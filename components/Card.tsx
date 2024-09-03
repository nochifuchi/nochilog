import type { CardProps } from '@/types/types';
import { getDate, getMultiSelect, getText } from '@/utils/property';
import Link from 'next/link';
import type { FC } from 'react';

const Card: FC<CardProps> = ({ page }) => {
  return (
    <Link href={`/articles/${getText(page.properties.slug.rich_text)}`}>
      <div className="max-w-sm rounded p-4 shadow-lg bg-primary-light-gray">
        {/* image */}
        {/* <div>
          <Image
            className="w-full static h-auto"
            src={getCover(page.cover)}
            alt=""
            objectFit="cover"
            width={400}
            height={225}
            quality={30}
          />
        </div> */}

        {/* title & date*/}
        <div className="flex items-start gap-x-3">
          <div className="p-3 bg-white rounded-lg text-4xl leading-none">{page.icon.emoji}</div>
          <div>
            <h2 className="text-base font-medium mb-3 ">{getText(page.properties.name.title)}</h2>
            <p className="text-gray-700 text-xs">{getDate(page.properties.published.date)}</p>
          </div>
        </div>

        {/* tag */}
        <div>
          {getMultiSelect(page.properties.tags.multi_select).map((tag, index) => (
            <span
              key={index}
              className="text-sm px-2 py-1 font-normal bg-white rounded-lg break-words mr-2 mb-2"
            >
              {`#${tag}`}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
