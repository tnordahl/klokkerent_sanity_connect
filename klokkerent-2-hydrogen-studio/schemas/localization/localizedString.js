import { languages } from './../../localization/languages';

export default {
  title: 'Localized String',
  type: 'object',
  name: 'localizedString',
  fields: languages.map((val) => ({
    name: val.name,
    title: val.title,
    type: 'string',
  })),
};
