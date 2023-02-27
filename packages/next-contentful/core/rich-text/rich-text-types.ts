import { NodeRenderer } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { ReactNode } from 'react';

export type RenderMarksType = {
  [k in MARKS]: (text: ReactNode) => ReactNode;
};

export type Renderers = {
  [key in BLOCKS]?: NodeRenderer;
};

export type BlockClass = {
  [key in BLOCKS]?: string;
};

export type InlineClass = {
  [key in INLINES]?: string;
};

export type RenderMarkClass = {
  [key in MARKS]?: string;
};
