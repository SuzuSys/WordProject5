<template>
  <authenticator>
    <app-child></app-child>
  </authenticator>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
import { useI18n } from "vue-i18n";
import AppChild from "./AppChild.vue";

export default defineComponent({
  name: "App",
  components: {
    Authenticator,
    AppChild,
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>
