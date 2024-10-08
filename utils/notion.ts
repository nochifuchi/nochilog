import { Client } from '@notionhq/client';

const apiKey = process.env.NOTION_API_KEY as string;
const databaseId = process.env.NOTION_DATABASE_ID as string;

const notion = new Client({ auth: apiKey });

export const fetchPages = async ({ slug, tag }: { slug?: string; tag?: string }) => {
  const filterOption: any = [
    {
      property: 'isPublic',
      checkbox: {
        equals: true,
      },
    },
    {
      property: 'slug',
      rich_text: {
        is_not_empty: true,
      },
    },
  ];

  if (slug) {
    filterOption.push({
      property: 'slug',
      rich_text: {
        equals: slug,
      },
    });
  }

  if (tag) {
    filterOption.push({
      property: 'tags',
      multi_select: {
        contains: tag,
      },
    });
  }

  return await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: filterOption,
    },
    sorts: [
      {
        property: 'published',
        direction: 'descending',
      },
    ],
  });
};

export const fetchBlocksByPageId = async (pageId: string) => {
  const data = [];
  let cursor = undefined;

  /* eslint no-constant-condition: "off" */
  while (true) {
    const { results, next_cursor }: any = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });
    data.push(...results);
    if (!next_cursor) break;
    cursor = next_cursor;
  }

  return { results: data };
};
