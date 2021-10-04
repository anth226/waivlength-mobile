// import i18n from "i18n-js";
// import memoize from "lodash.memoize";
// import { I18nManager } from "react-native";
// import * as RNLocalize from "react-native-localize";

// const translationGetters = {
//     en: () => require("../I18n/languages/english.json"),
//     ru: () => require("../I18n/languages/russian.json"),
// };

// export const translate = memoize(
//     (key, config) => i18n.t(key, config),
//     (key, config) => (config ? key + JSON.stringify(config) : key),
// );

// export const setI18nConfig = (manualLanguage) => {
//     // fallback if no available language fits
//     const fallback = { languageTag: "en", isRTL: false };

//     const { languageTag, isRTL } =
//         manualLanguage ? manualLanguage : RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
//             fallback;
//     console.log({ languageTag });
//     // clear translation cache
//     translate.cache.clear();
//     // update layout direction
//     I18nManager.forceRTL(isRTL);

//     // set i18n-js config
//     i18n.translations = { [languageTag]: translationGetters[languageTag]() };
//     i18n.locale = languageTag;
// };