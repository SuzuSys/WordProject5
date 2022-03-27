// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefineLocaleMessage } from "vue-i18n";

declare module "vue-i18n" {
  // define the locale messages schema
  export interface DefineLocaleMessage {
    label: string;
    AppChild: {
      HelloWorld: string;
    };
  }
}
