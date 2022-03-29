// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefineLocaleMessage } from "vue-i18n";

declare module "vue-i18n" {
  export interface DefineLocaleMessage {
    AppChild: {
      sentence: {
        translation: string;
      };
      error: {
        load_user_info: string;
      };
      method: {
        load_user_info: string;
      };
    };
    EditAccountForm: {
      error: {
        request_resend_email_verification_code: string;
        mismatch_email_verification_code: string;
        update_email: string;
        password_incorrect: string;
        change_password: string;
      };
      success: {
        update_email: string;
        change_password: string;
      };
      warning: {
        email_not_verified_yet: string;
      };
      info: {
        sent_email_verification_code: string;
        sent_email_verification_code_again: string;
      };
      method: {
        request_resend_email_verification_code: string;
      };
    };
  }
}
