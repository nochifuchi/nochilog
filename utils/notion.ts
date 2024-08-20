import { Client } from '@notionhq/client';

const apiKey = process.env.NOTION_API_KEY as string;
const databaseId = process.env.NOTION_DATABASE_ID as string;

const notion = new Client({ auth: apiKey });

export const fetchPages = async ({ slug }: { slug?: string }) => {
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
  return await notion.blocks.children.list({ block_id: pageId });
};
