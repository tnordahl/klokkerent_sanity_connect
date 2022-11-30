import React from 'react';
import { MdBrush, MdSubtitles } from 'react-icons/md';

const garamondRenderer = ({ children }) => <span style={{ backgroundColor: 'pink' }}> {children} </span>;

const tovRenderer = ({ children }) => <span style={{ fontSize: '2rem' }}>{children}</span>;

export default {
  title: 'Portable Text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H3', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Underline', value: 'underline' },
          { title: 'Bullet', value: 'bullet' },
          { title: 'Garamond', value: 'garamond', blockEditor: { render: garamondRenderer, icon: MdBrush } },
          { title: 'VideoText', value: 'textOverVideo', blockEditor: { render: tovRenderer, icon: MdSubtitles } },
        ],
        annotations: [{ type: 'link' }, { type: 'internalLink' }],
      },
    },
    { type: 'figure' },
    { type: 'embedHTML' },
    { type: 'videoUrl' },
  ],
};
