import { createI18n } from "vue-i18n";
import enUS from "./locales/en-UN.json";
import jaJP from "./locales/ja-JP.json";

type MessageSchema = typeof enUS;

const i18n = createI18n<[MessageSchema], "en-US" | "ja-JP">({
  locale: "en-US",
  fallbackLocale: "en-US",
  messages: {
    "en-US": enUS,
    "ja-JP": jaJP,
  },
});

export default i18n;
