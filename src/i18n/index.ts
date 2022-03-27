import { createI18n } from "vue-i18n";
import enUS from "./locales/en-UN.json";
import jaJP from "./locales/ja-JP.json";

interface VItem {
  value: string;
  label: string;
}

export const list_languages: VItem[] = [
  { value: "en-US", label: "English" },
  { value: "ja-JP", label: "日本語" },
];

const i18n = createI18n<false>({
  locale: "en-US",
  fallbackLocale: "en-US",
  messages: {
    "en-US": enUS,
    "ja-JP": jaJP,
  },
});

export default i18n;
