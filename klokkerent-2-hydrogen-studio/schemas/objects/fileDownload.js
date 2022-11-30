const fileDownload  =  {
  type: 'object',
  name: 'fileDownload',
  title: 'Nedlastbar fil',

  fields: [
    {
      name: 'buttonText',
      title: 'Knapptekst',
      type: 'string',
      initialValue: 'Last ned',
    },
    {
      type: 'file',
      name: 'download',
      title: 'Nedlastbar fil',
    },
  ],
};

export default fileDownload;