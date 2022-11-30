import { languages } from './../../localization/languages';

export default {
  title: 'Localized File',
  type: 'object',
  name: 'localizedFile',
  fields: languages.map((val) => ({
    name: val.name,
    title: val.title,
    type: 'fileDownload',
  })),
};
