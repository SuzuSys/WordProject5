import { createI18n } from "vue-i18n";
import enUS from "./locales/en-UN.json";
import jaJP from "./locales/ja-JP.json";

const language_labels = new Map<string, string>([
  ["en-US", "English"],
  ["ja-JP", "日本語"],
]);

const language_keys = new Map<string, string>();
language_labels.forEach((key, label) => {
  language_keys.set(label, key);
});

export { language_labels, language_keys };

const i18n = createI18n<false>({
  locale: "en-US",
  fallbackLocale: "en-US",
  messages: {
    "en-US": enUS,
    "ja-JP": jaJP,
  },
});

export default i18n;
