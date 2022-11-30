import { languages } from './../../localization/languages';

export default {
  title: 'Localized Texts',
  type: 'object',
  name: 'localizedText',
  fields: languages.map((val, key) => ({
    key,
    name: val.name,
    title: val.title,
    type: 'portableText',
    // hidden: () => key > 0
  })),
};
