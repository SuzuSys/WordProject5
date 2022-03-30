import { defineStore } from "pinia";
import type { LanguageKeyUnion } from "@/i18n";

interface State {
  email: string;
  email_verified: boolean;
  name: string;
  language: LanguageKeyUnion | undefined;
}

export const useUserStore = defineStore({
  id: "user",
  state: () =>
    <State>{
      email: "",
      email_verified: false,
      name: "",
      language: undefined,
    },
  actions: {
    init(
      email: string | undefined,
      email_verified: boolean | undefined,
      name: string | undefined,
      language: LanguageKeyUnion | undefined
    ) {
      if (email) this.email = email;
      if (typeof email_verified === "boolean")
        this.email_verified = email_verified;
      if (name) this.name = name;
      if (language) this.language = language;
    },
  },
});
