import { createI18n } from "vue-i18n";
import enUS from "./locales/en-UN.json";
import jaJP from "./locales/ja-JP.json";

export const bijection_languages: Record<string, string> = {
  "en-US": "English",
  "ja-JP": "日本語",
};
/*
const list_languages: { value: string; label: string }[] = [];
for (const [key, value] of Object.entries(bijection_languages)) {
  list_languages.push({ value: key, label: value });
}

export { list_languages };
*/
const i18n = createI18n<false>({
  locale: "en-US",
  fallbackLocale: "en-US",
  messages: {
    "en-US": enUS,
    "ja-JP": jaJP,
  },
});

export default i18n;
