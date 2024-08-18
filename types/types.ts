import type { ParsedUrlQuery } from 'querystring';
import type { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

export type PageProps = {
  slug: string;
  name: string;
  author: string;
  cover: string;
  published: string;
  tags: string[];
  content: string;
};

export type CardProps = {
  page: PageProps;
};

export type ArticleProps = CardProps;
export type ArticleMetaProps = CardProps;

export type Params = ParsedUrlQuery & {
  slug: string;
};

export type FileType = {
  file?: { url: string };
  external?: { url: string };
};

export type AnnotationType = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};

export type RichTextType = {
  plain_text: string;
  href: string | null;
  annotations: AnnotationType;
};

export type PropertyType = {
  name: { title: RichTextType[] };
  slug: { rich_text: RichTextType[] };
  Published: {
    date: {
      start: string;
    };
  };
  isPublic: { checkbox: boolean };
  tags: {
    multi_select: [
      {
        name: string;
      },
    ];
  };
};

export type PageType = {
  id: string;
  cover: FileType | null;
  properties: PropertyType;
};
