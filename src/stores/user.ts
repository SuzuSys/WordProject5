import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    email: "",
    email_verified: false,
    name: "",
    language: "",
  }),
  actions: {
    init(
      email: string | undefined,
      email_verified: boolean | undefined,
      name: string | undefined,
      language: string | undefined
    ) {
      if (typeof email === "string") this.email = email;
      if (typeof email_verified === "string")
        this.email_verified = email_verified;
      if (typeof name === "string") this.name = name;
      if (typeof language === "string") this.language = language;
    },
  },
});
