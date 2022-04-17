<template>
  <v-card class="mx-auto my-12" max-width="500" variant="outlined">
    <v-card-title>Edit Profile</v-card-title>
    <v-card-actions>
      <v-container class="pa-1">
        <!-- Name -->
        <v-form>
          <v-row>
            <v-col cols="9">
              <v-text-field
                v-model="state.model.text_field.name"
                label="Name"
                density="compact"
                variant="outlined"
                clearable
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="3" class="pl-0 d-flex justify-center align-center">
              <v-btn
                @click="changeName"
                :disabled="state.disabled.btn.change_name"
                variant="outlined"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
        <!-- Name updated -->
        <v-alert
          type="success"
          v-show="state.show.alert.success.change_name"
          density="compact"
          class="my-2"
          variant="outlined"
        >
          {{ t("EditProfileForm.success.change_name") }}
        </v-alert>
        <!-- An error occurred while updating the name. -->
        <v-alert
          type="error"
          v-show="state.show.alert.error.change_name"
          density="compact"
          class="my-2"
          variant="outlined"
        >
          {{ t("EditProfileForm.error.change_name") }}
        </v-alert>
        <!-- Language -->
        <v-form>
          <v-row>
            <v-col cols="9">
              <v-autocomplete
                v-model="state.model.select.selected_language_label"
                :items="language_labels"
                label="Language"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-autocomplete>
            </v-col>
            <v-col cols="3" class="pl-0 d-flex justify-center align-center">
              <v-btn
                @click="changeLanguage"
                variant="outlined"
                :disabled="disabledBtnChangeLanguage"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
        <!-- Language updated -->
        <v-alert
          type="success"
          v-show="state.show.alert.success.change_language"
          density="compact"
          class="my-2"
          variant="outlined"
        >
          {{ t("EditProfileForm.success.change_language") }}
        </v-alert>
        <!-- An error occurred while updating the language. -->
        <v-alert
          type="error"
          v-show="state.show.alert.error.change_language"
          density="compact"
          class="my-2"
          variant="outlined"
        >
          {{ t("EditProfileForm.error.change_language") }}
        </v-alert>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useI18n } from "vue-i18n";
import { Auth } from "aws-amplify";
import { useUserStore } from "@/stores/user";
import { language_key_to_label, language_label_to_key } from "@/i18n";
import type { LanguageLabelUnion } from "@/i18n";

interface State {
  model: {
    text_field: {
      name: string;
    };
    select: {
      selected_language_label: LanguageLabelUnion | undefined;
    };
  };
  disabled: {
    btn: {
      change_name: boolean;
      change_language: boolean;
    };
  };
  show: {
    alert: {
      success: {
        change_name: boolean;
        change_language: boolean;
      };
      error: {
        change_name: boolean;
        change_language: boolean;
      };
    };
  };
}

export default defineComponent({
  name: "EditProfileForm",
  setup() {
    // Translation Setting
    const { t, locale } = useI18n({
      useScope: "global",
      inheritLocale: true,
    });
    // UserStore setting
    const userstore = useUserStore();
    // state setting
    let user_language: LanguageLabelUnion | undefined = undefined;
    if (userstore.language) {
      user_language = language_key_to_label.get(userstore.language);
    }
    const state: State = reactive<State>({
      model: {
        text_field: {
          name: userstore.name,
        },
        select: {
          selected_language_label: user_language,
        },
      },
      disabled: {
        btn: {
          change_name: false,
          change_language: false,
        },
      },
      show: {
        alert: {
          success: {
            change_name: false,
            change_language: false,
          },
          error: {
            change_name: false,
            change_language: false,
          },
        },
      },
    });
    // language labels
    const language_labels = Array.from(language_label_to_key.keys());
    // method setting
    async function changeName(): Promise<void> {
      state.disabled.btn.change_name = true;

      state.show.alert.success.change_name = false;
      state.show.alert.error.change_name = false;
      try {
        const user = await Auth.currentAuthenticatedUser();
        const result = await Auth.updateUserAttributes(user, {
          name: state.model.text_field.name,
        });
        if (result === "SUCCESS") {
          userstore.name = state.model.text_field.name;
          state.show.alert.success.change_name = true;
        } else {
          throw Error(result);
        }
      } catch (e) {
        console.error(e);
        state.show.alert.error.change_name = true;
      } finally {
        state.disabled.btn.change_name = false;
      }
    }
    async function changeLanguage(): Promise<void> {
      state.disabled.btn.change_language = true;

      state.show.alert.success.change_language = false;
      state.show.alert.error.change_language = false;
      try {
        if (!state.model.select.selected_language_label) {
          throw Error(`selected language is undefined.`);
        }
        const selected_language = language_label_to_key.get(
          state.model.select.selected_language_label
        );
        if (!selected_language) {
          throw Error(`selected language is not in language list.`);
        }
        const user = await Auth.currentAuthenticatedUser();
        const result = await Auth.updateUserAttributes(user, {
          "custom:language": selected_language,
        });
        if (result === "SUCCESS") {
          userstore.language = locale.value = selected_language;
          state.show.alert.success.change_language = true;
        } else {
          throw Error(result);
        }
      } catch (e) {
        console.error(e);
        state.show.alert.error.change_language = true;
      } finally {
        state.disabled.btn.change_language = false;
      }
    }
    // computed
    const disabledBtnChangeLanguage = computed<boolean>(() => {
      let selected = state.model.select.selected_language_label
        ? language_label_to_key.get(state.model.select.selected_language_label)
        : undefined;
      return (
        state.disabled.btn.change_language || selected === userstore.language
      );
    });
    //
    return {
      t,
      state,
      language_labels,
      changeName,
      changeLanguage,
      disabledBtnChangeLanguage,
    };
  },
});
</script>
