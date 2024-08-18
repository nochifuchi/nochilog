import { Client } from '@notionhq/client';

const apiKey = process.env.NOTION_API_KEY as string;
const databaseId = process.env.NOTION_DATABASE_ID as string;

const notion = new Client({ auth: apiKey });

export const fetchPages = async () => {
  return await notion.databases.query({
    database_id: databaseId,
  });
};
