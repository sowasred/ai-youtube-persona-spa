import "server-only";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () =>
    import("../config/dictionaries/en.json").then((module) => module.default),
  // zh: () =>
  //   import("../config/dictionaries/zh.json").then((module) => module.default),
  // ko: () =>
  //   import("../config/dictionaries/ko.json").then((module) => module.default),
  // ja: () =>
  //   import("../config/dictionaries/ja.json").then((module) => module.default),
};

export const getDictionary = async () =>
  dictionaries.en();

export const getDictionarySync = () =>
  dictionaries.en();
