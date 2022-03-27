// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefineLocaleMessage } from "vue-i18n";

declare module "vue-i18n" {
  export interface DefineLocaleMessage {
    AppChild: {
      sentence: {
        translation: string;
      };
    };
  }
}
