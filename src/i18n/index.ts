import { createI18n } from "vue-i18n";
import enUS from "./locales/en-UN.json";
import jaJP from "./locales/ja-JP.json";

export const language_labels: Record<string, string> = {
  "en-US": "English",
  "ja-JP": "日本語",
};

const i18n = createI18n<false>({
  locale: "en-US",
  fallbackLocale: "en-US",
  messages: {
    "en-US": enUS,
    "ja-JP": jaJP,
  },
});

export default i18n;
