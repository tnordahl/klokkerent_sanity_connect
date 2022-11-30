import React from 'react';

const InternalLinkRender = ({ children }) => <span>{children} 🔗</span>;

export default {
  name: 'internalLink',
  type: 'object',
  title: 'Internal link to another document',
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRender,
  },
  fields: [
    {
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [
        { type: 'page' },
        // other types you may want to link to
      ],
    },
  ],
};
