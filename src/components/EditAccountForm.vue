<template>
  <v-card class="mx-auto my-12" max-width="500" variant="outlined">
    <v-card-title>Edit Account</v-card-title>
    <v-card-actions>
      <v-container class="pa-1">
        <!-- email -->
        <v-form>
          <v-row>
            <v-col cols="9">
              <v-text-field
                v-model="state.model.text_field.email"
                label="Email"
                density="compact"
                variant="outlined"
                clearable
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="3" class="pl-0 d-flex justify-center align-center">
              <v-btn
                @click="updateEmail"
                :disabled="state.disabled.btn.update_email"
                variant="outlined"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
        <!-- email has not been verified yet -->
        <v-alert
          type="warning"
          v-show="state.show.alert.warning.email_not_verified_yet"
          density="compact"
          class="my-2"
          variant="outlined"
        >
          {{ t("EditAccountForm.warning.email_not_verified_yet") }}
        </v-alert>
        <!-- we sent email varification code -->
        <v-alert
          type="info"
          v-show="state.show.alert.info.sent_email_verification_code"
          density="compact"
          class="my-2"
          variant="outlined"
        >
          {{ t("EditAccountForm.info.sent_email_verification_code") }}
        </v-alert>
        <!-- email varification code -->
        <v-form v-show="state.show.form$btn.email_verification_code">
          <v-row>
            <v-col cols="9">
              <v-text-field
                v-model="state.model.text_field.email_verification_code"
                label="Verification Code"
                density="compact"
                variant="outlined"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="3" class="pl-0 d-flex justify-center align-center">
              <v-btn
                @click="sendEmailVerificationCode"
                :disabled="state.disabled.btn.send_email_verification_code"
                variant="outlined"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
        <!-- request resend varification code -->
        <v-btn
          @click="requestResendVerificationCode"
          variant="outlined"
          block
          size="small"
          class="my-2 mx-0"
          v-show="state.show.form$btn.email_verification_code"
          :disabled="state.disabled.btn.request_resend_email_verification_code"
        >
          {{
            t("EditAccountForm.method.request_resend_email_verification_code")
          }}
        </v-btn>
        <!-- sent the code again -->
        <v-alert
          type="info"
          density="compact"
          class="my-2"
          variant="outlined"
          v-show="state.show.alert.info.sent_email_verification_code_again"
        >
          {{ t("EditAccountForm.info.sent_email_verification_code_again") }}
        </v-alert>
        <!-- An error occurred while requesting resend the code -->
        <v-alert
          type="error"
          density="compact"
          class="my-2"
          variant="outlined"
          v-show="state.show.alert.error.request_resend_email_verification_code"
        >
          {{
            t("EditAccountForm.error.request_resend_email_verification_code")
          }}
        </v-alert>
        <!-- the code you input is not match -->
        <v-alert
          type="error"
          v-show="state.show.alert.error.mismatch_email_verification_code"
          density="compact"
          class="my-2"
          variant="outlined"
        >
          {{ t("EditAccountForm.error.mismatch_email_verification_code") }}
        </v-alert>
        <!-- the email updated -->
        <v-alert
          type="success"
          v-show="state.show.alert.success.update_email"
          density="compact"
          class="my-2"
          variant="outlined"
        >
          {{ t("EditAccountForm.success.update_email") }}
        </v-alert>
        <!-- An error occurred while updating the email -->
        <v-alert
          type="error"
          v-show="state.show.alert.error.update_email"
          density="compact"
          class="my-2"
          variant="outlined"
        >
          {{ t("EditAccountForm.error.update_email") }}
        </v-alert>
        <v-divider class="my-3"></v-divider>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useI18n } from "vue-i18n";
import { Auth } from "aws-amplify";
import { useUserStore } from "@/stores/user";

interface State {
  model: {
    text_field: {
      email: string;
      email_verification_code: string;
    };
  };
  disabled: {
    btn: {
      update_email: boolean;
      send_email_verification_code: boolean;
      request_resend_email_verification_code: boolean;
    };
  };
  show: {
    alert: {
      success: {
        update_email: boolean;
      };
      info: {
        sent_email_verification_code: boolean;
        sent_email_verification_code_again: boolean;
      };
      warning: {
        email_not_verified_yet: boolean;
      };
      error: {
        request_resend_email_verification_code: boolean;
        mismatch_email_verification_code: boolean;
        update_email: boolean;
      };
    };
    form$btn: {
      email_verification_code: boolean;
    };
  };
}

export default defineComponent({
  name: "EditAccountForm",
  setup() {
    // Translation Setting
    const { t } = useI18n({
      useScope: "global",
      inheritLocale: true,
    });
    // UserStore setting
    const userstore = useUserStore();
    // state setting
    const state: State = reactive<State>({
      model: {
        text_field: {
          email: userstore.email,
          email_verification_code: "",
        },
      },
      disabled: {
        btn: {
          update_email: false,
          send_email_verification_code: false,
          request_resend_email_verification_code: false,
        },
      },
      show: {
        alert: {
          success: {
            update_email: false,
          },
          info: {
            sent_email_verification_code: false,
            sent_email_verification_code_again: false,
          },
          warning: {
            email_not_verified_yet: !userstore.email_verified,
          },
          error: {
            request_resend_email_verification_code: false,
            mismatch_email_verification_code: false,
            update_email: false,
          },
        },
        form$btn: {
          email_verification_code: !userstore.email_verified,
        },
      },
    });
    // method setting
    async function updateEmail(): Promise<void> {
      state.disabled.btn.update_email = true;

      state.show.alert.info.sent_email_verification_code =
        state.show.alert.warning.email_not_verified_yet =
        state.show.form$btn.email_verification_code =
        state.show.alert.info.sent_email_verification_code_again =
        state.show.alert.error.request_resend_email_verification_code =
        state.show.alert.error.mismatch_email_verification_code =
        state.show.alert.success.update_email =
        state.show.alert.error.update_email =
          false;
      try {
        const user = await Auth.currentAuthenticatedUser();
        const result = await Auth.updateUserAttributes(user, {
          email: state.model.text_field.email,
        });
        if (result === "SUCCESS") {
          state.show.alert.info.sent_email_verification_code = true;
          state.show.form$btn.email_verification_code = true;
          userstore.email = state.model.text_field.email;
          userstore.email_verified = false;
        } else {
          throw Error(result);
        }
      } catch (e) {
        console.error(e);
        state.show.alert.error.update_email = true;
      } finally {
        state.disabled.btn.update_email = false;
      }
    }
    async function sendEmailVerificationCode(): Promise<void> {
      state.disabled.btn.send_email_verification_code = true;

      state.show.alert.success.update_email =
        state.show.alert.error.update_email =
        state.show.alert.error.mismatch_email_verification_code =
          false;
      try {
        const result = await Auth.verifyCurrentUserAttributeSubmit(
          "email",
          state.model.text_field.email_verification_code
        );
        if (result === "SUCCESS") {
          state.show.alert.success.update_email = true;
          userstore.email_verified = true;
          state.show.form$btn.email_verification_code =
            state.show.alert.info.sent_email_verification_code =
            state.show.alert.info.sent_email_verification_code_again =
            state.show.alert.error.request_resend_email_verification_code =
            state.show.alert.warning.email_not_verified_yet =
              false;
        } else {
          throw Error(result);
        }
      } catch (e) {
        if (e instanceof Error && e.name === "CodeMismatchException") {
          state.show.alert.error.mismatch_email_verification_code = true;
        } else {
          console.error(e);
          state.show.alert.error.update_email;
        }
      } finally {
        state.disabled.btn.send_email_verification_code = false;
      }
    }
    async function requestResendVerificationCode(): Promise<void> {
      state.disabled.btn.request_resend_email_verification_code = true;

      state.show.alert.info.sent_email_verification_code_again = false;
      state.show.alert.error.request_resend_email_verification_code = false;
      try {
        await Auth.verifyCurrentUserAttribute("email");
        state.show.alert.info.sent_email_verification_code_again = true;
      } catch (e) {
        console.error(e);
        state.show.alert.error.request_resend_email_verification_code = true;
      } finally {
        state.disabled.btn.request_resend_email_verification_code = false;
      }
    }
    //
    return {
      t,
      state,
      updateEmail,
      sendEmailVerificationCode,
      requestResendVerificationCode,
    };
  },
});
</script>
