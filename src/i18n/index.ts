import { createI18n } from "vue-i18n";

import enUS from "./locales/en-UN.json";
import jaJP from "./locales/ja-JP.json";
type MessageSchema = typeof enUS;

const language_core = [
  { key: "en-US", label: "English", message: enUS },
  { key: "ja-JP", label: "日本語", message: jaJP },
] as const;

type LanguageKeyUnion = typeof language_core[number]["key"];
type LanguageLabelUnion = typeof language_core[number]["label"];
type LanguageKeyMessage = Record<LanguageKeyUnion, MessageSchema>;

const language_key_to_label = new Map<LanguageKeyUnion, LanguageLabelUnion>();
const language_label_to_key = new Map<LanguageLabelUnion, LanguageKeyUnion>();
const language_key_to_message = <LanguageKeyMessage>{};
language_core.forEach(({ key, label, message }) => {
  language_key_to_label.set(key, label);
  language_label_to_key.set(label, key);
  language_key_to_message[key] = message;
});

export { language_key_to_label, language_label_to_key };
export type { LanguageKeyUnion, LanguageLabelUnion };

const i18n = createI18n<{ message: MessageSchema }, LanguageKeyUnion, false>({
  locale: language_core[0].key,
  fallbackLocale: language_core[0].key,
  messages: language_key_to_message,
});

export default i18n;
