export default {
  name: 'videoUrl',
  title: 'Video',
  type: 'object',
  fields: [
    {
      name: 'videoURL',
      title: 'Video URL',
      type: 'string',
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
};
