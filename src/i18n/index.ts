import { createI18n } from "vue-i18n";
import enUS from "./locales/en-UN.json";
import jaJP from "./locales/ja-JP.json";

const language_key_to_label = new Map<string, string>([
  ["en-US", "English"],
  ["ja-JP", "日本語"],
]);

const language_label_to_key = new Map<string, string>();
language_key_to_label.forEach((key, label) => {
  language_label_to_key.set(label, key);
});

export { language_key_to_label, language_label_to_key };

const i18n = createI18n<false>({
  locale: "en-US",
  fallbackLocale: "en-US",
  messages: {
    "en-US": enUS,
    "ja-JP": jaJP,
  },
});

export default i18n;
